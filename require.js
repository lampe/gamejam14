var game = {};
requirejs([
    'src/gameover',
    'src/game',
    'src/byc.js',
    'src/enemies/enemies',
    'src/enemies/kanonenfutter',
    'src/weapons/weapons',
    'src/weapons/gun',
    'src/mainmenu',
    'src/preloader',
    'src/splash',
    'src/boot'],
    function(){
        game.phaser = new Phaser.Game(1280, 720, Phaser.AUTO, 'game-container');
        game.phaser.state.add('boot', game.boot);
        game.phaser.state.add('splash', game.splash);
        game.phaser.state.add('preloader', game.preloader);
        game.phaser.state.add('mainmenu', game.mainmenu);
        game.phaser.state.add('game', game.game);
        game.phaser.state.add('gameover', game.gameover);
        game.phaser.state.start('boot');
});
