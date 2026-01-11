import GameBoard from './GameBoard.js';
import Goblin from './Goblin.js';

export default class Game {
  constructor() {
    this.score = 0;
    this.misses = 0;
    this.gameOver = false;

    this.board = new GameBoard();
    this.goblin = new Goblin();

    this.scoreElement = document.getElementById('score');
    this.gameOverElement = document.getElementById('game-over');

    this.start();
  }

  start() {
    this.spawnGoblin();
  }

  spawnGoblin() {
    if (this.gameOver) return;

    const index = this.board.getRandomCellIndex();
    const cell = this.board.getCell(index);

    this.goblin.showInCell(cell);

    // Сброс клика по гоблину
    let clicked = false;

    const handleClick = () => {
      if (!clicked) {
        clicked = true;
        this.handleHit();
      }
    };

    this.goblin.element.addEventListener('click', handleClick);

    setTimeout(() => {
      if (!clicked) {
        this.handleMiss();
      }
      this.goblin.element.removeEventListener('click', handleClick);
      this.goblin.hide();
      if (!this.gameOver) {
        this.spawnGoblin(); 
      }
    }, 1000);
  }

  handleHit() {
    this.score++;
    this.misses = 0;
    this.updateScore();
  }

  handleMiss() {
    this.misses++;
    if (this.misses >= 5) {
      this.endGame();
    }
  }

  updateScore() {
    this.scoreElement.textContent = `Score: ${this.score}`;
  }

  endGame() {
    this.gameOver = true;
    this.gameOverElement.style.display = 'block';
  }
}