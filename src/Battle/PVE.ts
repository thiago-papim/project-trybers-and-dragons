import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _arrMonster: SimpleFighter[];
  constructor(playerOne: Fighter, arrMonster: SimpleFighter[]) {
    super(playerOne);
    this._arrMonster = arrMonster;
  }

  get arrMonster() {
    return this._arrMonster;
  }

  fight(): number {
    while (this._arrMonster.every((e) => e.lifePoints !== -1)
    && this.player.lifePoints !== -1) {
      this._arrMonster.forEach((e) => {
        e.attack(this.player);
        this.player.attack(e);
      });
    }
    return super.fight();
  }
}

export default PVE;