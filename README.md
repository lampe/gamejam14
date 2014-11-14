# InnoGames GameJam 14

## running
### Chrome
  start Chrome with the --allow-file-access-from-files flag
### Firefox
  Just start Firefox with the index.html

## File structure
```
|- require.js   // load order
|- index.html   // the main index.html file
|
| \ assets
|
|\libs              // 3rd party libs
| |- phaser.js      // phaser.js
|\
| |src              // our sorce code
| |- boot.js        // Boot Stage
| |- game.js        // Game Stage
| |- main.js        // Main js file where we kick off everything else
| |- mainmenu.js    // Mainmenu Stage
| |- preloader.js   // Preloader Stage
| |- splash.js      // Splash Stage
```
