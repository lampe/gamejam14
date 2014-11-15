game.game = {};
game.game.preload = function(){
  game.phaser.stage.backgroundColor = 0x4488cc;
};
game.game.create = function () {
  game.game.sprite = game.phaser.add.sprite(0,0, 'background');
  game.game.sprite.animations.add('loop');
  game.game.sprite.animations.play('loop', 5, true);
  game.game.enablePhysics();
  game.game.createGroups();
  //create the ground
  game.game.createGround();
  // add the byc
  byc = new Byc((game.phaser.width/2), game.phaser.height - game.phaser.height*0.35);

  // kanonenfutter2 = new Kanonenfutter(-40, game.phaser.height - 50,"right");
  // PoleValter.create(-40, game.phaser.height - 50,"right");
  // add 2 guns
  new Gun((game.phaser.width/2) - 50, game.phaser.height - 50,500,2,100,"left");
  new Gun((game.phaser.width/2) + 50, game.phaser.height - 50,500,2,100,"right");
  new Wall((game.phaser.width/2) - 150, game.phaser.height - 50);
  // new Mine((game.phaser.width/2) - 250, game.phaser.height - 50);
  kanonenfutter = new Kanonenfutter(40, game.phaser.height - 50,"right",20,1);

  game.soundEnabled = false;
  if(game.soundEnabled) {
    mainSound = game.phaser.add.audio('mainSound');
    mainSound.play();
  }
};

game.game.createGround = function(){
  game.game.ground = game.phaser.add.group();
  for(var x = 0; x < game.phaser.width; x += 32) {
    // Add the ground blocks, enable physics on each, make them immovable
    var groundBlock = game.phaser.add.sprite(x, game.phaser.height - 32, 'ground');
    game.phaser.physics.enable(groundBlock, Phaser.Physics.ARCADE);
    groundBlock.body.immovable = true;
    groundBlock.body.allowGravity = false;
    this.ground.add(groundBlock);
  }
};
game.game.render = function(){

};
// The update() method is called every frame
game.game.update = function() {
  // Shoot a bullet
  if (game.phaser.input.activePointer.isDown) {
    for (var i = 0; i < weapons.gunPool.length; i++) {
      weapons.gunPool[i].shootBullet();
    }
  }
  game.game.enemies.forEach(function(enemy){
    enemy.update();
  });
};

game.game.enablePhysics = function(){
  game.game.physics.startSystem(Phaser.Physics.P2JS);
  //Turn on impact events for the world, without this we get no collision callbacks
  game.game.physics.p2.setImpactEvents(true);
  game.game.physics.p2.restitution = 0.8;
  game.game.physics.p2.updateBoundsCollisionGroup();
};
game.game.createGroups = function(){
  // create a group with enemies
  game.game.enemies = [];
  game.game.enemiesGroup = game.game.physics.p2.createCollisionGroup();
  game.game.bycGroup = game.game.physics.p2.createCollisionGroup();
  game.game.bulletsGroup = game.game.physics.p2.createCollisionGroup();
  game.game.mineGroup = game.game.physics.p2.createCollisionGroup();
  game.game.wallGroup = game.game.physics.p2.createCollisionGroup();
};
