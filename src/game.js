game.game = {};
game.game.preload = function(){
  game.phaser.stage.backgroundColor = 0x4488cc;
};

game.game.create = function () {
  // create a group with enemies
  game.game.enemies = [];

  //create the ground
  game.game.createGround();
  // add the byc
  byc = new Byc();

  // kanonenfutter.create(-40, game.phaser.height - 50,"right");
  PoleValter.create(-40, game.phaser.height - 50,"right");
  // add 2 guns
  new Gun((game.phaser.width/2) - 50, game.phaser.height - 50,500,2,100,"left");
  new Gun((game.phaser.width/2) + 50, game.phaser.height - 50,500,2,100,"right");
  new Wall((game.phaser.width/2) - 150, game.phaser.height - 50);
  new Mine((game.phaser.width/2) - 250, game.phaser.height - 50);

  game.soundEnabled = false;
  if(game.soundEnabled) {
    mainSound = game.phaser.add.audio('mainSound');
    mainSound.play();
  }
};

game.game.start = function(){
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

// The update() method is called every frame
game.game.update = function() {

  // Colission with byc?
  game.phaser.physics.arcade.overlap(byc.sprite, kanonenfutter.sprite, function(){
    console.log("collide");
    kanonenfutter.sprite.kill();
    kanonenfutter.create(-40, game.phaser.height - 50,"right");
    byc.lowerHealth(50);
  });

  // Shoot a bullet
  if (game.phaser.input.activePointer.isDown) {
    for (var i = 0; i < weapons.gunPool.length; i++) {
      weapons.gunPool[i].shootBullet();
    }
  }

  // Bullet collision?
  for (var y = 0; y < weapons.gunPool.length; y++) {
    weapons.gunPool[y].bulletPool.forEach(function(that){
          game.phaser.physics.arcade.overlap(that, kanonenfutter.sprite, function(){
            kanonenfutter.sprite.kill();
            kanonenfutter.create(-40, game.phaser.height - 50, "right");
            that.kill();
          });
    });
  }

  game.game.enemies.forEach(function(enemy){
      enemy.update();
  }, this);
};
