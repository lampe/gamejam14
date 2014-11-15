game.preloader = {};
game.preloader.preload = function () {
	game.phaser.add.sprite(0,0, "loadingScreenBackground");
	this.loadingBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loadingBar');
	this.loadingBar.anchor.setTo(0.5, 0.5);
	this.load.setPreloadSprite(this.loadingBar);


    // all of the assets we want to load for the game
    game.phaser.load.image('ground', 'assets/gfx/ground.png');

    game.phaser.load.image('byc', 'assets/gfx/byc.jpg');

    game.phaser.load.image('wall', 'assets/gfx/wall.jpg');
    game.phaser.load.image('mine', 'assets/gfx/mine.png');
    game.phaser.load.image('tutorialBackground', 'assets/gfx/tutorialBackgroundDummy.png');
    game.phaser.load.image('tutorialOverlay', 'assets/gfx/tutorialOverlayDummy.png');
    game.phaser.load.spritesheet('poleVaulter', 'assets/gfx/poleVaulter.png', 81, 144);

    game.phaser.load.spritesheet('kanonenfutter', 'assets/gfx/kanonenfutter.png', 47, 47);
    //Disabled sound because its annoying
    game.phaser.load.audio('mainSound', 'assets/sfx/main.mp3');

    //backgrounds
    game.phaser.load.atlas('background', 'assets/gfx/backgrounds/background.png', 'assets/gfx/backgrounds/background.json');
	game.phaser.load.atlas('minigun', 'assets/gfx/minigun.png', 'assets/gfx/minigun.json');
	game.phaser.load.spritesheet('button1', 'assets/gfx/buttons1.png', 129, 98);
	game.phaser.load.spritesheet('button2', 'assets/gfx/buttons2.png', 129, 98);
	game.phaser.load.spritesheet('button3', 'assets/gfx/buttons3.png', 129, 98);
	game.phaser.load.spritesheet('button4', 'assets/gfx/buttons4.png', 129, 98);
    game.phaser.load.atlas('shot', 'assets/gfx/shot.png', 'assets/gfx/shot.json');
};

game.preloader.create = function () {

	var tween = this.add.tween(this.loadingBar).to({
		alpha: 0
	}, 1000, Phaser.Easing.Linear.None, true);
	//tween.onComplete.add(this.startMainMenu, this);
	console.log(tween);
	tween.onComplete.add(function(){
		//go to main menu
        //game.phaser.state.start('environmentTest');
		game.phaser.state.start('game');
	}, this);
};