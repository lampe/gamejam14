enemies = {};
enemies.startTime = Date.now();
enemies.count = 0;
enemies.MAX_ENEMIES = 600000;
enemies.spawnIsActive = false;
enemies.spawntime = 1300;
enemies.types = [];
enemies.start = function(){
  setTimeout(function(){
    enemies.spawnIsActive = true;
    enemies.lastSpawn = Date.now();
    enemies.types.push(function(){new Kanonenfutter(-40, game.phaser.height - game.phaser.height*0.40,"right",10,1);});
    enemies.types.push(function(){new Kanonenfutter(game.phaser.width + 40, game.phaser.height - game.phaser.height*0.40,"left",20,1);});
  }, 3000);
};
enemies.spawn = function(){
  date = Date.now();
  // console.log(enemies.lastSpawn + 1000 > date);
  if(enemies.lastSpawn + enemies.spawntime < date){
    enemies.types[Math.floor(Math.random()*enemies.types.length)]();
    enemies.count += 1;
    enemies.lastSpawn = date;
  }
};
