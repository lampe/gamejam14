game.preloader = {};




game.preloader.preload = function () {
  game.phaser.add.sprite(0,0, "loadingScreenBackground");
  this.loadingBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loadingBar');
  this.loadingBar.anchor.setTo(0.5, 0.5);
  this.load.setPreloadSprite(this.loadingBar);

  // all of the assets we want to load for the game
  game.phaser.load.image('ground', 'assets/gfx/ground.png');

  game.phaser.load.image('byc', 'assets/gfx/rad.png');
  game.phaser.load.image('bullet', 'assets/gfx/bullet.png');
  game.phaser.load.image('wall', 'assets/gfx/wall.jpg');
  game.phaser.load.atlas('mine', 'assets/gfx/mine.png', 'assets/gfx/mine.json');
  game.phaser.load.image('tutorialBackground', 'assets/gfx/tutorialBackgroundDummy.png');
  game.phaser.load.image('tutorialOverlay', 'assets/gfx/tutorialOverlayDummy.png');
  game.phaser.load.spritesheet('poleVaulter', 'assets/gfx/poleVaulter.png', 81, 144);

  //Dieb
  game.phaser.load.atlas('kanonenfutter', 'assets/gfx/dieb/dieb.png', 'assets/gfx/dieb/dieb.json');
  game.phaser.load.atlas('kanonenfutterRight', 'assets/gfx/dieb/dieb_flipped.png', 'assets/gfx/dieb/dieb_flipped.json');
  game.phaser.load.atlas('kanonenfutterExplosion', 'assets/gfx/dieb/dieb_explosion_lowres.png', 'assets/gfx/dieb/dieb_explosion_lowres.json');


  //Disabled sound because its annoying
  game.phaser.load.audio('mainSound', 'assets/sfx/main.mp3', true);
  game.phaser.load.audio('mgShoot', 'assets/sfx/mg_shoot.mp3', true);
  game.phaser.load.audio('explosion', 'assets/sfx/explosion.mp3', true);
  game.phaser.load.audio('punch', 'assets/sfx/punch.mp3', true);
  game.phaser.load.audio('splatter', 'assets/sfx/splatter.mp3', true);
  game.phaser.load.audio('gameOver', 'assets/sfx/gameOver.mp3', true);

  //loadingscreen
  game.phaser.load.atlas('mainMenuBackground', 'assets/gfx/titelscreen/titlescreen.png', 'assets/gfx/titelscreen/titlescreen.json');
  //backgrounds
  game.phaser.load.atlas('background', 'assets/gfx/backgrounds/background.png', 'assets/gfx/backgrounds/background.json');
  game.phaser.load.atlas('gameOver', 'assets/gfx/gameover/gameover.png', 'assets/gfx/gameover/gameover.json');
  game.phaser.load.atlas('minigun', 'assets/gfx/minigun.png', 'assets/gfx/minigun.json');
  game.phaser.load.spritesheet('button1', 'assets/gfx/buttons1.png', 129, 98);
  game.phaser.load.spritesheet('button2', 'assets/gfx/buttons2.png', 129, 98);
  game.phaser.load.spritesheet('button3', 'assets/gfx/buttons3.png', 129, 98);
  game.phaser.load.spritesheet('button4', 'assets/gfx/buttons4.png', 129, 98);
  game.phaser.load.atlas('shot', 'assets/gfx/shot.png', 'assets/gfx/shot.json');

  game.phaser.load.spritesheet('buttonWallLeft', 'assets/gfx/buttons/wallLeft.png', 129, 98);
  game.phaser.load.spritesheet('buttonMineLeft', 'assets/gfx/buttons/mineLeft.png', 129, 98);
  game.phaser.load.spritesheet('buttonGunLeft', 'assets/gfx/buttons/gunLeft.png', 129, 98);
  game.phaser.load.spritesheet('buttonLockLeft', 'assets/gfx/buttons/lockLeft.png', 129, 98);

  game.phaser.load.spritesheet('buttonWallRight', 'assets/gfx/buttons/wallRight.png', 129, 98);
  game.phaser.load.spritesheet('buttonMineRight', 'assets/gfx/buttons/mineRight.png', 129, 98);
  game.phaser.load.spritesheet('buttonGunRight', 'assets/gfx/buttons/gunRight.png', 129, 98);
};

game.preloader.create = function () {

  console.log(Phaser.Animation.generateFrameNames('Dieb_Explosion_', 0, 22,'', 2));
   

  var tween = this.add.tween(this.loadingBar).to({
    alpha: 0
  }, 1000, Phaser.Easing.Linear.None, true);
  //tween.onComplete.add(this.startMainMenu, this);
  console.log(tween);
  tween.onComplete.add(function(){
    //go to main menu
    game.phaser.state.start('game');
  }, this);




};
