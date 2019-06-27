function attackRoll() {
  let attackVal = Math.ceil(Math.random() *  13);

  if(attackVal >= monster.ac) {
    monster.hp -= this.attr.str;
  }
}
