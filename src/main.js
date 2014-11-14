game.phaser = new Phaser.Game(800, 600, Phaser.AUTO, 'game-container');
game.phaser.state.add('boot', game.boot);
game.phaser.state.add('splash', game.splash);
game.phaser.state.add('preloader', game.preloader);
game.phaser.state.add('mainmenu', game.mainmenu);
game.phaser.state.add('game', game.game);
game.phaser.state.start('boot');
