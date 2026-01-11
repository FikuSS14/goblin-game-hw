import goblinImg from './assets/goblin.png';

export default class Goblin {
  constructor() {
    this.element = document.createElement('img');
    this.element.src = goblinImg;
    this.element.alt = 'Goblin';
    this.element.className = 'goblin';
    this.currentCell = null;
  }

  showInCell(cell) {
    if (this.currentCell) {
      this.currentCell.innerHTML = '';
    }
    cell.appendChild(this.element);
    this.currentCell = cell;
  }

  hide() {
    if (this.currentCell) {
      this.currentCell.innerHTML = '';
      this.currentCell = null;
    }
  }
}