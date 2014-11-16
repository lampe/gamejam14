game.game = {};
game.game.preload = function(){};
game.game.create = function () {
  game.game.animateBackground();
  game.game.enablePhysics();
  game.game.createGroups();

  game.game.mineExplosionSound = game.phaser.add.audio('explosion');
  game.game.splatterSound = game.phaser.add.audio('splatter');
  game.game.gameOverSound = game.phaser.add.audio('gameOver');

  // add the byc
  byc = new Byc((game.phaser.width/2), game.phaser.height - game.phaser.height*0.40);
  enemies.start();
  // new Kanonenfutter(-40, game.phaser.height - game.phaser.height*0.40,"right",20,1);
  // new Kanonenfutter(game.phaser.width + 40, game.phaser.height - game.phaser.height*0.40,"left",20,1);
  // pV = new PoleValter(-40, game.phaser.height - game.phaser.height*0.35,"right");
  // new Wall((game.phaser.width/2) - 150, game.phaser.height - game.phaser.height*0.35);
  // new Mine((game.phaser.width/2) - 250, game.phaser.height - game.phaser.height*0.35);
  // new Mine((game.phaser.width/2) - 150, game.phaser.height - game.phaser.height*0.35);
  // kanonenfutter = new Kanonenfutter(game.phaser.width + 40, game.phaser.height - game.phaser.height*0.35,"left",20,1);

  game.game.bm = new BuyMenu();

  game.soundEnabled = false;
  if(game.soundEnabled) {
    game.game.mainSound = game.phaser.add.audio('mainSound');
      game.game.mainSound.play();
  }


  //first test enemies
  new Kanonenfutter(game.phaser.width + 40, game.phaser.height - game.phaser.height*0.40,"left",20,1);

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
  // if (game.phaser.input.activePointer.isDown) {
  //   for (var i = 0; i < weapons.gunPool.length; i++) {
  //     weapons.gunPool[i].shootBullet();
  //   }
  // }

  //for (var i = 0; i < weapons.gunPool.length; i++) {
    //  weapons.gunPool[i].update();
   //}


   if(enemies.count < enemies.MAX_ENEMIES){
     enemies.spawn();
   }

  weapons.gunPool.forEach(function(gun){
    gun.update(gun);
  });
  
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
game.game.animateBackground = function(){
  game.game.sprite = game.phaser.add.sprite(0,0, 'background');
  game.game.sprite.animations.add('loop');
  game.game.sprite.animations.play('loop', 5, true);
};
game.game.animateGameOver = function() {
    game.game.sprite = game.phaser.add.sprite(0,0, 'gameOver');
    game.game.sprite.animations.add('loop');
    game.game.sprite.animations.play('loop', 31, true, true);
}
