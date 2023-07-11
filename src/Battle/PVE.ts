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

  // fight(): number {
  //   for (let i = 0; i < this._arrMonster.length; i += 1) {
  //     while (this.player.lifePoints !== -1) {
  //       this.player.attack(this.arrMonster[i]);
  //       this.arrMonster[i].attack(this.player);
  //       if (this.arrMonster[i].lifePoints === -1) {
  //         break;
  //       }
  //     }
  //   }
  //   return super.fight();
  // }
}

export default PVE;