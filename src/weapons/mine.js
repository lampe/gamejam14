function Mine(x,y){
  if(weapons.minePool === undefined) {
    weapons.minePool = [];
  }
  weapons.minePool.push(this);
}
