import Cell from './cell';

const cell = new Cell(document.querySelector('table'));

setInterval(() => {
  cell.placeGoblin();
}, 700);
