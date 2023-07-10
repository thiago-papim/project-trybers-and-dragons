import Race from './Race';

class Dwarf extends Race {
  lifePoints: number;
  instances: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 80;
    this.instances = 0;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances() {
    return 0;
  }
}

export default Dwarf;