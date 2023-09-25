import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type = 'Swordsman') {
    super(name, type);
    // this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
