export default class Character {
  constructor(name, type) {
    const arrTypeName = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Length of Name has to have from 2 until 10 letters!!!');
    }
    if (!arrTypeName.includes(type)) {
      throw new Error('Bad type of Hero');
    }
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
