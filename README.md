# Fluxbase

![Flux](./src/assets/image_2022-02-21_110116.png)

Fluxbase is an open-sourced package used to allow a beginner-friendly way of storing data. All data is perpetually stored using better-sqlite3 and works right out of the box!

- **Perpetually stored content** - None of your data will be missing through restarts
- **Out of the box** - Fluxbase is guaranteed to work with **no errors** out of the box!
- **Extremely simple** - Fluxbase has very simple syntax and methods which means there's almost no learning curve!
- **Well-documented** - Fluxbase has a very thorough and intuitive documentation to help you get started!
- Much, much more!

**Fluxbase is temporarily named "fluxdata" for reasons regarding for package names taken. The other package will be removed shortly and fluxbase won't be named fluxdata.**

## Example

```js
let Fluxbase = require("fluxdata");
let db = Fluxbase();

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
  await db.get("userInfo.coins"); // 250
  await db.get("userInfo.gear"); // ['Hammer', 'Axe']
})();
```

## How to install

If there are any issues with the installation process, make sure to view our documentation to see anything you've missed.

**Windows and Linux**
With `npm`:

```
npm install fluxbase better-sqlite3
```

With `yarn`:

```
yarn add fluxbase better-sqlite3
```

**Note:** Windows users may need to follow additional steps [found here](https://flux.atomdev.cf).

**macOS**

1. Install XCode
2. Run `npm i -g node-gyp` in your desired terminal
3. Run `node-gyp --python /path/to/python2.7` _(You can skip this step if you haven't installed Python 3.X)_
4. Run `npm i fluxbase` or with yarn, `yarn add fluxbase`
5. That's it!

## Documentation

If you want to learn how to use Fluxbase in depth, please read our documentation with listed descriptions and scenarios for each method.
