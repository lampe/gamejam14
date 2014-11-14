gun = {};
gun.init = function(){

};
gun.add = function(){
  game.game.gun1 = game.phaser.add.sprite((game.phaser.width/2) - 50, game.phaser.height - 100, 'bullet');
  game.game.gun2 = game.phaser.add.sprite((game.phaser.width/2) + 50, game.phaser.height - 100, 'bullet');
  game.game.gun1.anchor.setTo(0.5, 0.5);
  game.game.gun2.anchor.setTo(0.5, 0.5);
  // create a group with bullets
  game.game.bulletPool = game.phaser.add.group();
  game.game.SHOT_DELAY =100;
  game.game.BULLET_SPEED = 500;
  game.game.NUMBER_OF_BULLETS = 2;
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
};
gun.shootBullet = function() {
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
