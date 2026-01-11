export default class GameBoard {
    constructor() {
      this.board = document.getElementById('game-board');
      this.cells = [];
      this.createBoard();
    }
  
    createBoard() {
      for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;
        this.board.appendChild(cell);
        this.cells.push(cell);
      }
    }
  
    getCell(index) {
      return this.cells[index];
    }
  
    getRandomCellIndex() {
      return Math.floor(Math.random() * 16);
    }
  }