function Kanonenfutter(x, y, facing, life, strength){
  this.facing = facing;
  if(this.facing === "right"){
    this.sprite = game.phaser.add.sprite(x,y, 'kanonenfutterRight');
    // this.sprite.anchor.setTo(0.5, 0.5);
    // this.sprite.scale.x = 1; //facing default direction
    // this.sprite.scale.x = -1;
  }else{
    this.sprite = game.phaser.add.sprite(x,y, 'kanonenfutter');
  }
  // this.sprite.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 6, true);
  this.sprite.animations.add('walk', Phaser.Animation.generateFrameNames('Dieb_Walkcicle_000', 00, 13,'', 2), 15, true, false);
  // this.sprite.animations.add('wall', [20, 21, 22, 23], 6, true);
  this.sprite.checkWorldBounds = false;


  this.sprite.life = life;
  this.sprite.strength = strength;

  this.sprite.outOfBoundsKill = true;
  game.phaser.physics.enable(this.sprite, Phaser.Physics.P2JS);
  this.sprite.body.collideWorldBounds = false;
  this.sprite.body.setCollisionGroup(game.game.enemiesGroup);
  this.sprite.body.collides(game.game.bulletsGroup, function(enemy,bullet){
    if(enemy.sprite.life - bullet.sprite.strength < 0){
      enemy.sprite.kill();
      bullet.sprite.kill();
    }else{
      enemy.sprite.life = enemy.sprite.life - bullet.sprite.strength;
      enemy.fixedRotation = true;
      bullet.sprite.kill();
    }
  });
  this.sprite.body.collides(game.game.mineGroup, function(enemy,mine){
    game.phaser.physics.p2.removeBody(enemy);
    enemy.sprite.loadTexture('kanonenfutterExplosion', 0);
    enemy.sprite.animations.add('explosion', Phaser.Animation.generateFrameNames('Dieb_Explosion_', 0, 21,'', 1), 15, false, false);
    enemy.sprite.animations.play('explosion');
    setTimeout(function(){
      enemy.sprite.kill();
      mine.sprite.kill();
    }, 700);

  });
  this.sprite.body.collides(game.game.bycGroup, function(enemy,byc){
    if(byc.sprite.life - enemy.sprite.strength < 0){
      game.phaser.state.start('gameover');
    }else{
      enemy.sprite.kill();
      byc.sprite.lowerHealth(enemy.sprite.strength);
      enemy.fixedRotation = true;
      enemy.sprite.alive = false;
    }
  });
  // this.sprite.body.collides(game.game.wallGroup, function(enemy,body2){
  //   // enemy.sprite.alive = false;
  //   // body1.sprite.kill();
  //   // body2.sprite.kill();
  // });
  this.update = function () {
    if(this.sprite.alive === true){
      this.sprite.animations.play('walk');
      if(this.facing === "left") {
        this.sprite.body.moveLeft(250);
      } else {
        this.sprite.body.moveRight(255);
      }
    }
  };
  game.game.enemies.push(this);
  return this;
}
