// zadanie1
const newDiv = document.createElement('div');
newDiv.textContent = 'To jest nowy element';
document.getElementById('root').appendChild(newDiv);

// zadanie2
const fruitsList = document.createElement('ul');

const fruits = [
  'Melon',
  'Blueberries',
  'Raspberries',
  'Banana',
  'Apple',
  'Peach',
  'Pear',
];

fruits.forEach((fruit) => {
  const li = document.createElement('li');
  item.textContent = fruit;
  fruitsList.appendChild(li);
});

document.getElementById('root').appendChild(fruitsList);

// zadanie3
fruitsList.addEventListener('click', () => {
  const items = fruitsList.children;
  for (let i = 0; i < items.length; i++) {
    if (i % 2 !== 0) {
      fruitsList.removeChild(items[i]);
    }
  }
});

// zadanie4
const newButton = document.createElement('button');
newButton.textContent = 'Click ME!';
document.getElementById('root').appendChild(newButton);

newButton.addEventListener('click', (e) => {
  e.currentTarget.remove();
});

// zadanie5
const randomNumber = Math.floor(Math.random() * 11);

for (let i = 0; i <= randomNumber; i++) {
  const randomDiv = document.createElement('div');
  randomDiv.textContent = `To jest div nr ${i}`;
  document.getElementById('root').appendChild(randomDiv);
}

// zadanie6
const elements = {
  div1: 'to jest div',
  span1: 'to jest span',
  div2: {
    div3: 'to jest div',
  },
  span2: 'to jest span',
};

function renderElement(tag, content) {
  const htmlTag = tag.replace(/[0-9]/g, '');
  const element = document.createElement(htmlTag);
  element.textContent = content;
  document.getElementById('root').appendChild(element);
}

for (const key in elements) {
  if (typeof elements[key] === 'string') {
    renderElement(key, elements[key]);
  } else {
    for (const prop in elements[key]) {
      renderElement(prop, elements[key][prop]);
    }
  }
}

// zadanie7
const list1 = document.createElement('ul');
const fruits = [
  'Banana',
  'Orange',
  'Apple',
  'Blueberries',
  'Melon',
  'Pineapple',
  'Coconut',
];

fruits.forEach((fruits) => {
  const listItem = document.createElement('li');
  listItem.textContent = fruits;
  list1.appendChild(listItem);
});
document.getElementById('root').appendChild(list1);

const btn1 = document.createElement('button');
btn1.textContent = 'Add to list 2';
list1.after(btn1);

const list2 = document.createElement('ul');
document.getElementById('root').appendChild(list2);

const btn2 = document.createElement('button');
btn2.textContent = 'Add to list 1';
btn2.disabled = true;
list1.after(btn2);

btn1.addEventListener('click', () => {
  list2.appendChild(list1.lastChild);
  if (list1.children.length === 0) {
    btn1.disabled = true;
  }
  if (list2.children.length > 0) {
    btn2.disabled = false;
  }
});

btn2.addEventListener('click', (e) => {
  list1.appendChild(list2.lastChild);
  if (list2.children.length === 0) {
    e.currentTarget.disabled = true;
  }
  if (list1.children.length > 0) {
    btn1.disabled = false;
  }
});

// zadanie8
const form = document.createElement('form');
const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');
const input4 = document.createElement('input');
const submit = document.createElement('button');

input1.placeholder = 'tag';
form.appendChild(input1);

input2.placeholder = 'text';
form.appendChild(input2);

input3.placeholder = 'color';
form.appendChild(input3);

input4.placeholder = 'quantity';
input4.type = 'number';
form.appendChild(input4);

submit.textContent = 'Create';
form.appendChild(submit);

document.getElementById('root').appendChild(form);

form.addEventListener('submit', createForm);

function createForm(e) {
  e.preventDefault();
  for (let i = 0; i < input4.value; i++) {
    const formElement = document.createElement(input1.value);
    formElement.textContent = input2.value;
    formElement.style.color = input3.value;
    formElement.style.display = 'block';
    form.after(formElement);
  }
}

// zadanie9
const arrHeaders = ['Name', 'Surname', 'Age', 'Childrens'];
const form = document.createElement('form');
const createButton = document.createElement('button');
const moreButton = document.createElement('button');
const deleteButton = document.createElement('button');

createButton.textContent = 'Create table';
moreButton.textContent = 'More rows';
deleteButton.textContent = 'Delete';

form.appendChild(createFields(arrHeaders));
form.appendChild(moreButton);
form.appendChild(createButton);

moreButton.addEventListener('click', () => {
  const addRows = document.querySelectorAll('.more-rows');
  const lastRow = addRows[addRows.length - 1];
  lastRow.after(createFields(arrHeaders));
});

form.addEventListener('submit', createTable);

function createFields(el) {
  let fieldsRow = document.createElement('div');
  fieldsRow.className = 'more-rows';
  el.forEach((value) => {
    const field = document.createElement('input');
    field.placeholder = value;
    fieldsRow.appendChild(field);
  });
  return fieldsRow;
}

function createTable(e) {
  e.preventDefault();

  const defaultTable = document.getElementById('def-table');

  if (defaultTable) {
    defaultTable.remove();
  }

  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  const thead = document.createElement('thead');
  const rows = document.querySelectorAll('.more-rows');

  arrHeaders.forEach((header) => {
    const th = document.createElement('th');
    th.textContent = header;
    thead.appendChild(th);
  });

  rows.forEach((row) => {
    const tr = document.createElement('tr');
    const children = Array.from(row.children);
    const values = children.map((child) => child.value);
    values.forEach((value) => {
      const td = document.createElement('td');
      td.textContent = value;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.id = 'def-table';
  table.appendChild(thead);
  table.appendChild(tbody);

  createButton.after(table);

  form.reset();
}
document.getElementById('root').appendChild(form);

// zadanie10
function bigLetter() {
  const creatorFields = document.querySelectorAll('.more-rows input');
  creatorFields.forEach((field) => {
    field.addEventListener('input', (event) => {
      const formattedText =
        field.value.charAt(0).toUpperCase() + field.value.slice(1);
      event.target.value = formattedText;
    });
  });
}
bigLetter();

// zadanie11
function verify(str) {
  const numbers = str.match(/\d/g);
  if (numbers) {
    let convertNumbersArr = numbers.map((e) => Number(e));
    let sum = convertNumbersArr.reduce((a, b) => a + b);
    let mul = convertNumbersArr.reduce((a, b) => a * b);
    console.log(sum);

    for (let i = 0; i < mul; i++) {
      let div = document.createElement('div');
      div.textContent = `Sum of numbers in string: ${sum}`;
      root.appendChild(div);
    }
  }
}
verify('a23');

// zadanie12
function checkAla(str) {
  const obj = {
    string: str,
    alaStr: function () {
      if (this.string.includes('Ala')) {
        this.string = str.replace('Ala', 'Ola');
        console.log(this.string);
      } else {
        let div = document.createElement('div');
        div.textContent = 'String "Ala" does not exist';
        document.getElementById('root').appendChild(div);
      }
    },
  };
  obj.alaStr();
}
checkAla('Ala Makota');
// checkAla('Marek nie Makota');

// zadanie13
const wordsArr = ['Have', 'a', 'nice', 'day'];

function letterCount(numbersArr) {
  const num = numbersArr.map((string) => string.length);
  return num;
}

function sumNumber(sumArr) {
  const numbers = letterCount(sumArr);
  const sum = numbers.reduce((a, b) => a + b);
  return sum;
}

function avrNumbers(avrArr) {
  const sum = sumNumber(avrArr);
  const num = letterCount(avrArr);
  const avr = sum / num.length;
  return avr;
}
console.log(letterCount(wordsArr));
console.log(`Sum of numbers: ${sumNumber(wordsArr)}`);
console.log(`Average of numbers: ${avrNumbers(wordsArr)}`);

// zadanie14
let obj = {
  name: '',
  surname: '',
  age: '',
};

function modify(name, surname, age) {
  obj.name = 'Jenny';
  obj.surname = 'Bush';
  obj.age = 21;

  if (obj.name.length >= 5 || obj.surname.length >= 5) {
    const button = document.createElement('button');
    button.textContent = 'Default values';
    button.addEventListener('click', () => {
      obj.name = '';
      obj.surname = '';
      obj.age = '';
      console.log(obj);
    });
    document.getElementById('root').appendChild(button);
  }
}
modify();
console.log(obj);
