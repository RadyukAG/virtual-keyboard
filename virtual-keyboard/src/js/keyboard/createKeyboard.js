import createRow from '../row/createRow';
import rowsOrder from '../data/rowsOrder';

export default function createKeyboard() {
  const keyboard = document.querySelector('.keyboard');
  createRow(rowsOrder, keyboard);
}
