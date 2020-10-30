import KeyboardButton from '../button/keyboardButton';
import enKeys from '../data/keyboardKeys/enKeys';

function createRow(rowsArray, container) {
  const keyButtons = [];
  rowsArray.forEach((el) => {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard__row');
    keyboardRow.append(...el.map((key) => {
      const keyboardButton = new KeyboardButton(enKeys.find((elem) => elem.code === key));
      const button = keyboardButton.createButton();
      keyButtons.push(button);
      return button;
    }));
    container.append(keyboardRow);
  });
}

export default createRow;
