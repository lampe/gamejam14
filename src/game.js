game.game = {};
game.game.preload = function(){
  game.phaser.stage.backgroundColor = 0x4488cc;
  game.phaser.load.image('ground', 'assets/ground.png');
  game.phaser.load.image('byc', 'assets/byc.jpg');
  game.phaser.load.image('bullet', 'assets/bullet.png');
  game.phaser.load.spritesheet('kanonenfutter', 'assets/kanonenfutter.png', 47, 47);
};

game.game.create = function(){
  //create the ground
  game.game.createGround();
  kf = new Kanonenfutter(-40, game.phaser.height - 100,"right");
  // add the byc
  new Byc();
  // add 2 guns
  new Gun((game.phaser.width/2) - 50, game.phaser.height - 100,500,2,100,"left");
  new Gun((game.phaser.width/2) + 50, game.phaser.height - 100,500,2,100,"right");
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
  // Shoot a bullet
  if (game.phaser.input.activePointer.isDown) {
    for (var i = 0; i < weapons.gunPool.length; i++) {
      weapons.gunPool[i].shootBullet();
    }
  }
  for (var y = 0; y < weapons.gunPool.length; y++) {
    weapons.gunPool[y].bulletPool.forEach(function(that){
          game.phaser.physics.arcade.collide(that, kf.sprite, function(){ console.log("collide");});
    });
  }
  kf.sprite.animations.play('left');
  kf.sprite.x += 1;
};
