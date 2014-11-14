game.game = {};
game.game.preload = function(){
  game.phaser.stage.backgroundColor = 0x4488cc;
  game.phaser.load.image('ground', 'assets/ground.png');
  game.phaser.load.image('byc', 'assets/byc.jpg');
  game.phaser.load.image('bullet', 'assets/bullet.png');
};

game.game.create = function(){
  game.game.ground = game.phaser.add.group();
    for(var x = 0; x < game.phaser.width; x += 32) {
        // Add the ground blocks, enable physics on each, make them immovable
        var groundBlock = game.phaser.add.sprite(x, game.phaser.height - 32, 'ground');
        game.phaser.physics.enable(groundBlock, Phaser.Physics.ARCADE);
        groundBlock.body.immovable = true;
        groundBlock.body.allowGravity = false;
        this.ground.add(groundBlock);
    }

    game.game.gun1 = game.phaser.add.sprite((game.phaser.width/2) - 50, game.phaser.height - 100, 'bullet');
    game.game.gun2 = game.phaser.add.sprite((game.phaser.width/2) + 50, game.phaser.height - 100, 'bullet');

    // Set the pivot point to the center of the gun
    game.game.gun1.anchor.setTo(0.5, 0.5);
    game.game.gun2.anchor.setTo(0.5, 0.5);
    game.game.bulletPool = game.phaser.add.group();
    game.game.SHOT_DELAY = 100;
    game.game.BULLET_SPEED = 500;
    game.game.NUMBER_OF_BULLETS = 1;
    for(var i = 0; i < game.game.NUMBER_OF_BULLETS; i++) {
        // Create each bullet and add it to the group.
        var bullet = game.phaser.add.sprite(0, 0, 'bullet');
        game.game.bulletPool.add(bullet);

        // Set its pivot point to the center of the bullet
        bullet.anchor.setTo(0.5, 0.5);

        // Enable physics on the bullet
        game.phaser.physics.enable(bullet, Phaser.Physics.ARCADE);

        // Set its initial state to "dead".
        bullet.kill();
    }

  game.phaser.byc = game.phaser.add.sprite(game.phaser.width/2, game.phaser.height - 64, 'byc');
  game.phaser.byc.scale.x = 0.1;
  game.phaser.byc.scale.y = 0.1;

};
game.game.start = function(){

};
game.game.shootBullet = function() {
    // Enforce a short delay between shots by recording
    // the time that each bullet is shot and testing if
    // the amount of time since the last shot is more than
    // the required delay.
    if (game.game.lastBulletShotAt === undefined) game.game.lastBulletShotAt = 0;
    if (game.phaser.time.now - game.game.lastBulletShotAt < game.game.SHOT_DELAY){
      return;
    }
    game.game.lastBulletShotAt = game.phaser.time.now;

    // Get a dead bullet from the pool
    var bullet = game.game.bulletPool.getFirstDead();

    // If there aren't any bullets available then don't shoot
    if (bullet === null || bullet === undefined) return;

    // Revive the bullet
    // This makes the bullet "alive"
    bullet.revive();

    // Bullets should kill themselves when they leave the world.
    // Phaser takes care of this for me by setting this flag
    // but you can do it yourself by killing the bullet if
    // its x,y coordinates are outside of the world.
    bullet.checkWorldBounds = true;
    bullet.outOfBoundsKill = true;

    // Set the bullet position to the gun position.
    bullet.reset(game.game.gun1.x, game.game.gun1.y);

    // Shoot it
    bullet.body.velocity.x = game.game.BULLET_SPEED;
    bullet.body.velocity.y = 0;
};

// The update() method is called every frame
game.game.update = function() {

    // Shoot a bullet
    if (game.phaser.input.activePointer.isDown) {
        game.game.shootBullet();
    }
};
