import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static instances = 0;
  skill: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger.instances += 1;
    this.skill = 'stamina';
  }

  get energyType(): EnergyType {
    return this.skill;
  }

  static createdArchetypeInstances() {
    return this.instances;
  }
}

export default Ranger;