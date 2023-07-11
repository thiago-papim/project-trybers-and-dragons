import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  // playerOne: Fighters;
  private _playerTwo: Fighter;
  constructor(playerOne: Fighter, playerTwo: Fighter) {
    super(playerOne);
    // this.playerOne = playerOne;
    this._playerTwo = playerTwo;
  }

  get playerTwo(): Fighter {
    return this._playerTwo;
  }

  fight(): number {
    while (this.player.lifePoints !== -1) {
      this.player.attack(this.playerTwo);
      this.playerTwo.attack(this.player);
      if (this.playerTwo.lifePoints === -1) {
        break;
      }
    }
    return super.fight();
  }
}

export default PVP;