export function createElement(tag, className) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}

export function createButtonChild(key, classString) {
  const p = createElement('p', classString);
  p.innerText = key;
  return p;
}
