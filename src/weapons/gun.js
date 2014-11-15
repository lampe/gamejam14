function Gun(x,y,speed,numberOfBullets,delay) {
  if(weapons.gunPool === undefined) {
    weapons.gunPool = [];
  }
  weapons.gunPool.push(this);
  this.sprite = game.phaser.add.sprite(x, y, 'bullet');
  this.sprite.anchor.setTo(0.5, 0.5);
  this.BULLET_SPEED = speed;
  this.NUMBER_OF_BULLETS = numberOfBullets;
  this.SHOT_DELAY = delay;
  this.bulletPool = game.phaser.add.group();
  for(var i = 0; i < this.NUMBER_OF_BULLETS; i++) {
    // Create each bullet and add it to the group.
    var bullet = game.phaser.add.sprite(0, 0, 'bullet');
    // Set its pivot point to the center of the bullet
    bullet.anchor.setTo(0.5, 0.5);
    // Enable physics on the bullet
    game.phaser.physics.enable(bullet, Phaser.Physics.ARCADE);
    // Set its initial state to "dead".
    bullet.kill();
    this.bulletPool.add(bullet);
  }

  this.shootBullet = function() {
    // Enforce a short delay between shots by recording
    // the time that each bullet is shot and testing if
    // the amount of time since the last shot is more than
    // the required delay.
    if (this.lastBulletShotAt === undefined) this.lastBulletShotAt = 0;
    if (game.phaser.time.now - this.lastBulletShotAt < this.SHOT_DELAY){
      return;
    }
    this.lastBulletShotAt = game.phaser.time.now;

    // Get a dead bullet from the pool
    var bullet = this.bulletPool.getFirstDead();

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
    bullet.reset(this.sprite.x, this.sprite.y);

    // Shoot it
    bullet.body.velocity.x = this.BULLET_SPEED;
    bullet.body.velocity.y = 0;
  };
}
