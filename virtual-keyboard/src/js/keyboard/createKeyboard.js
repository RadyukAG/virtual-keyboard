import createRow from '../row/createRow';
import rowsOrder from '../data/rowsOrder';
import createShowHideButton from '../showHideButton/createShowHideButton';

export default function createKeyboard() {
  const keyboard = document.querySelector('.keyboard');
  createRow(rowsOrder, keyboard);
  keyboard.append(createShowHideButton());
}
