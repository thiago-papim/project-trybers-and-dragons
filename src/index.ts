import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('');
const player2 = new Character('');
const player3 = new Character('');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (arrBattle: Battle[]) => {
  for (let i = 0; i < arrBattle.length; i += 1) {
    arrBattle[i].fight();
  }
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };