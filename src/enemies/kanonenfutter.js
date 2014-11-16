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

  //explosion
  this.sprite.kfExplosion = game.phaser.add.sprite(20, 20, 'kanonenfutterExplosion');
  this.sprite.kfExplosion.animations.add('explosion', Phaser.Animation.generateFrameNames('Dieb_Explosion_', 0, 22,'', 2), 15, false, false);
  
  //adding all animations here
  this.sprite.animations.add('walk', Phaser.Animation.generateFrameNames('Dieb_Walkcicle_', 0, 13,'', 5), 15, true, false);
  this.sprite.animations.add('punch',Phaser.Animation.generateFrameNames('Dieb_Punch_', 0, 14,'', 5) , 15, true);
  this.sprite.animations.add('steal',Phaser.Animation.generateFrameNames('Dieb_Klauanimation_', 0, 3,'', 5) , 15, true);

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

    //explosion
    game.game.mineExplosionSound.play();
    game.game.splatterSound.play();
    enemy.sprite.kfExplosion.animations.play('explosion');

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
