weapons.gunPool = [];
function Gun(x,y,speed,numberOfBullets,delay,facing) {
  this.BULLET_SPEED = speed;
  this.NUMBER_OF_BULLETS = numberOfBullets;
  this.SHOT_DELAY = delay;
  this.facing = facing;
  this.bulletPool = game.phaser.add.group();
  weapons.gunPool.push(this);
  this.sprite = game.phaser.add.sprite(x, y, 'minigun');
  this.sprite.animations.add('mgcooldown', Phaser.Animation.generateFrameNames('MinigunCooldown_', 0, 20,'', 2), 15, true, false);
  this.sprite.animations.add('mgidle', ["MinigunIdle"], 12, true);
  this.sprite.animations.add('mgloop', Phaser.Animation.generateFrameNames('MinigunLoop_', 0, 5,'', 2), 15, true, false);
  this.sprite.animations.add("mgwarmup", Phaser.Animation.generateFrameNames('MinigunWarmup_', 0, 48,'', 2), 15, true, false);
  this.sprite.animations.play('mgidle');
  this.sprite.anchor.setTo(0.5, 0.5);
  this.sprite.scale.x = 0.4;
  this.sprite.scale.y = 0.4;
  if(this.facing === "left"){
    this.sprite.scale.x *= -1;
  }
  this.sprite.inputEnabled = true;
  this.sprite.events.onInputDown.add(function() {
    this.shootBullet();
  }, this);

  for(var i = 0; i < this.NUMBER_OF_BULLETS; i++) {
    // Create each bullet and add it to the group.
    var bullet = game.phaser.add.sprite(0, 30, 'shot');
    bullet.animations.add('fly2');
    bullet.animations.play('fly', 10, true);
    bullet.strength = 10;
    // Set its pivot point to the center of the bullet
    bullet.anchor.setTo(0.5, 0.5);

    // Enable physics on the bullet
    game.phaser.physics.enable(bullet, Phaser.Physics.P2JS);
    bullet.body.setCollisionGroup(game.game.bulletsGroup);
    bullet.body.collides(game.game.enemiesGroup, function(body1, body2){
      // console.log("hitPANDA");
      // console.log(body1.sprite.key, "BLAAAAAAAAAAAAAAAA", body2.sprite.key)
    });
    bullet.body.collideWorldBounds = false;
    if(this.facing === "left"){
      // bullet.scale.x = -1; //flipped
      bullet.body.rotateRight(180) ;
    }
    // Set its initial state to "dead".
    bullet.kill();
    this.bulletPool.add(bullet);
  }

  this.update = function()
  {
    if(this.state == 0)
      {

      }
      else if(this.state == 1)
        {

        }
        else if(this.state == 2)
          {

          }
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
          if(this.facing === "left"){
            bullet.body.velocity.x = -(this.BULLET_SPEED);
          }else{
            bullet.body.velocity.x = (this.BULLET_SPEED);
          }
          bullet.body.velocity.y = 0;
        };

        this.setBulletSpeed = function(speed){
          this.BULLET_SPEED = speed;
        };
        this.setDelay = function(delay){
          this.SHOT_DELAY = delay;
        };
      }
