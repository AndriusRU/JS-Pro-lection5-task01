export default class Character {
  constructor(name) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Length of Name has to have from 2 until 10 letters!!!');
    }
    this.health = 100;
    this.level = 1;
  }
}
