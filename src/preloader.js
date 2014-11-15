game.preloader = {};
game.preloader.preload = function () {
	game.phaser.add.sprite(0,0, "loadingScreenBackground");
	this.loadingBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loadingBar');
	this.loadingBar.anchor.setTo(0.5, 0.5);
	this.load.setPreloadSprite(this.loadingBar);
	

	// all of the assets we want to load for the game
	game.phaser.load.image('ground', 'assets/gfx/ground.png');
  	game.phaser.load.image('byc', 'assets/gfx/byc.jpg');
  	game.phaser.load.image('bullet', 'assets/gfx/bullet.png');
  	game.phaser.load.spritesheet('kanonenfutter', 'assets/gfx/kanonenfutter.png', 47, 47);
  	//Disabled sound because its annoying
  	game.phaser.load.audio('mainSound', 'assets/sfx/main.mp3');
  	
  	
};

game.preloader.create = function () {

	
  	var tween = this.add.tween(this.loadingBar).to({
    alpha: 0
  	}, 1000, Phaser.Easing.Linear.None, true);
	//tween.onComplete.add(this.startMainMenu, this);
	tween.onComplete(game.startMainMenu.startMenu());

	
}


game.startMainMenu = {};

game.startMainMenu.startMenu = function(){
	//go to main menu
	game.phaser.state.start('mainmenu');
}




