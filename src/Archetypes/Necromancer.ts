import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static instances = 0;
  skill: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer.instances += 1;
    this.skill = 'mana';
  }

  get energyType(): EnergyType {
    return this.skill;
  }

  static createdArchetypeInstances() {
    return this.instances;
  }
}

export default Necromancer;