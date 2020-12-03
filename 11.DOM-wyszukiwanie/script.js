// zadanie1
const list = document.querySelectorAll('.list');

// zadanie2
function showTags(element) {
  const tags = document.querySelectorAll(element);
  console.log(...tags);
}
showTags('input');

// zadanie3
const elements = document.querySelector('#list');

// zadanie4
function showElements(e) {
  const elements = document.querySelectorAll(e);
  console.log(elements);
}
showElements(['li', 'ul', 'span', 'div.list span', 'div#spans span']);
