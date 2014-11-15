var game = {};
requirejs([
    'src/gameover',
    'src/game',
    'src/byc.js',
    'src/enemies/enemies',
    'src/enemies/kanonenfutter',
    'src/enemies/poleVaulter',
    'src/weapons/weapons',
    'src/weapons/gun',
    'src/weapons/wall',
    'src/weapons/mine',
    'src/mainmenu',
    'src/buymenu',
    'src/tutorial',
    'src/preloader',
    'src/splash',
    'src/boot'
    ],
    function(){
        game.phaser = new Phaser.Game(1280, 720, Phaser.AUTO, 'game-container');
        game.phaser.state.add('boot', game.boot);
        game.phaser.state.add('splash', game.splash);
        game.phaser.state.add('preloader', game.preloader);
        game.phaser.state.add('mainmenu', game.mainmenu);
        game.phaser.state.add('tutorial', game.tutorial);
        game.phaser.state.add('game', game.game);
        game.phaser.state.add('environmentTest', game.environmentTest);
        game.phaser.state.add('gameover', game.gameover);
        game.phaser.state.start('boot');
});
