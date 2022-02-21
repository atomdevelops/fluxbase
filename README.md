# Flux
![Flux](./image_2022-02-21_110116.png)

Flux is an open-sourced package used to allow a beginner-friendly way of storing data. All data is perpetually stored using better-sqlite3 and works right out of the box!
- **Perpetually stored content** - None of your data will be missing through restarts
- **Out of the box** - Flux is guaranteed to work with **no errors** out of the box!
- **Extremely simple** - Flux has very simple syntax and methods which means there's almost no learning curve!
- **Well-documented** - Flux has a very thorough and intuitive documentation to help you get started!
- Much, much more!

## Example
```js
import db from 'fluxdb';

// Setting an object to a value
db.set('userInformation', { difficulty: 'Normal' });

// Pushing a currently non-existent item to an array in an object
db.push('userInfo.gear', 'Hammer');

// Adding to a currently non-existent value in an object
db.add('userInfo.coins', 100);

// Reusing previously mentioned methods
db.push('userInfo.gear', 'Axe');
db.add('userInfo.coins', 150);

// Fetching properties
db.get('userInfo.coins'); // 250
db.get('userInfo.gear'); // ['Hammer', 'Axe']
```

## How to install
If there are any issues with the installation process, make sure to view our documentation to see anything you've missed.

**Windows and Linux**
With `npm`:
```
npm install fluxdb
```
With `yarn`:
```
yarn add fluxdb
```
**Note:** Windows users may need to follow additional steps [found here](https://flux.atomdev.cf).

**macOS**
1. Install XCode
2. Run `npm i -g node-gyp` in your desired terminal
3. Run `node-gyp --python /path/to/python2.7` *(You can skip this step if you haven't installed Python 3.X)*
4. Run `npm i fluxdb` or with yarn, `yarn add fluxdb`
5. That's it!

## Documentation
If you want to learn how to use Flux in depth, please read our documentation with listed descriptions and scenarios for each method.
