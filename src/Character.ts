import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  _race: Race;
  _archeType: Archetype;
  maxLifePoints: number;
  _lifePoints: number;
  _strength: number;
  _defense: number;
  _dexterity: number;
  _energy: Energy;
  name: string;
  
  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archeType = new Mage(name);
    this.maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archeType.energyType,
      amount: getRandomInt(1, 10), 
    };
    this.name = name;
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archeType; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { return { ...this._energy }; }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (damage <= 0) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this.maxLifePoints += getRandomInt(1, 10);
    if (this.maxLifePoints > this.race.maxLifePoints) {
      this.maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this.maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  special(): void {
    console.log(this._defense);
  }
}

export default Character;