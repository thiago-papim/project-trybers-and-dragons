import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static instances = 0;
  skill: EnergyType;

  constructor(name: string) {
    super(name);
    Mage.instances += 1;
    this.skill = 'mana';
  }

  get energyType(): EnergyType {
    return this.skill;
  }

  static createdArchetypeInstances() {
    return this.instances;
  }
}

export default Mage;