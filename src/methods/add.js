// Require Packages
const get = require("lodash/get");
const set = require("lodash/set");

module.exports = function (db, params, options) {
  let fetched = db
    .prepare(`SELECT * FROM ${options.table} WHERE ID = (?)`)
    .get(params.id);

  if (!fetched) {
    db.prepare(`INSERT INTO ${options.table} (ID,json) VALUES (?,?)`).run(
      params.id,
      "{}"
    );
    fetched = db
      .prepare(`SELECT * FROM ${options.table} WHERE ID = (?)`)
      .get(params.id);
  }

  if (params.ops.target) {
    fetched = JSON.parse(fetched.json);
    let oldValue = get(fetched, params.ops.target);
    if (oldValue === undefined) oldValue = 0;
    else if (isNaN(oldValue))
      throw new Error(
        `Data @ ID: "${params.id}" IS NOT A number.\nFOUND: ${fetched}\nEXPECTED: number`
      );
    params.data = set(fetched, params.ops.target, oldValue + params.data);
  } else {
    if (fetched.json === "{}") fetched.json = 0;
    else fetched.json = JSON.parse(fetched.json);
    if (isNaN(fetched.json))
      throw new Error(
        `Data @ ID: "${params.id}" IS NOT A number.\nFOUND: ${fetched.json}\nEXPECTED: number`
      );
    params.data = parseFloat(fetched.json, 10) + parseFloat(params.data, 10);
  }

  params.data = JSON.stringify(params.data);

  db.prepare(`UPDATE ${options.table} SET json = (?) WHERE ID = (?)`).run(
    params.data,
    params.id
  );

  let newData = db
    .prepare(`SELECT * FROM ${options.table} WHERE ID = (?)`)
    .get(params.id).json;
  if (newData === "{}") return null;
  else {
    newData = JSON.parse(newData);
    return newData;
  }
};
