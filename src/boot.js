game.boot = {};
game.boot.preload = function () {
	game.phaser.load.image('loadingScreenBackground','assets/gfx/loadingScreenDummy.png');
	game.phaser.load.image('loadingBar','assets/gfx/loadingBarDummy.png')
	
};
game.boot.create = function(){
  game.phaser.state.start('splash');
};

