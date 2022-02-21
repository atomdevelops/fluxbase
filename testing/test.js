// Require Package
let fluxdb = require("fluxbase");

let db = fluxbase();

(async () => {
  // Setting an object to a value
  await db.set("userInformation", { difficulty: "Normal" });

  // Pushing a currently non-existent item to an array in an object
  await db.push("userInfo.gear", "Hammer");

  // Adding to a currently non-existent value in an object
  await db.add("userInfo.coins", 100);

  // Reusing previously mentioned methods
  await db.push("userInfo.gear", "Axe");
  await db.add("userInfo.coins", 150);

  // Fetching properties
  await console.log(db.get("userInfo.coins")); // 250
  await console.log(db.get("userInfo.gear")); // ['Hammer', 'Axe']
})();
