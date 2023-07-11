import Monster from './Monster';

class Dragon extends Monster {
  _lifePoints: number;

  constructor() {
    super();
    this._lifePoints = 999;
  }
}

export default Dragon;