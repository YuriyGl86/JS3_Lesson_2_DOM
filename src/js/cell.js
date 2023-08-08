import goblin from '../img/goblin.png';

export default class Cell {
  constructor(container) {
    this.container = container;
    this.currentCell = undefined;
    this.cells = Array.from(container.querySelectorAll('td'));
    this.img = Cell.getImg();
    this.placeGoblin();
  }

  getRandom() {
    let random = Math.floor(Math.random() * this.cells.length);
    while (random === this.currentCell) {
      random = Math.floor(Math.random() * this.cells.length);
    }
    return random;
  }

  static getImg() {
    const img = document.createElement('img');
    img.src = goblin;
    img.alt = 'гоблин';
    return img;
  }

  placeGoblin() {
    const randomPosition = this.getRandom();
    this.cells[randomPosition].appendChild(this.img);
    this.currentCell = randomPosition;
  }
}
