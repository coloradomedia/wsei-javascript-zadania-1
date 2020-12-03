// zadanie1
// 1
console.log(document.querySelector('#buz').parentElement);
// 2
console.log(document.querySelector('#buz').previousElementSibling);
// 3
console.log(document.querySelector('#foo').children);
// 4
console.log(document.querySelector('#foo').parentElement);
// 5
console.log(document.querySelector('#foo').firstElementChild);
// 6
console.log(document.querySelector('#buz'));

// zadanie2
function clkBtn(e) {
  const btn = document.querySelector(e);
  btn.addEventListener('click', (i) => {
    console.log(i.target.textContent);
  });
}
clkBtn('#ex2');

// zadanie3 i 4
function buttons(e) {
  const btn = document.querySelectorAll(e);
  btn.forEach((element) => {
    element.addEventListener('click', (i) => {
      let item = i.target.nextElementSibling.style;
      if (item.display === 'none') {
        item.display = 'block';
      } else {
        item.display = 'none';
      }
      let parent = i.target.parentElement.style;
      const randomColor =
        '#' + Math.floor(Math.random() * 16777215).toString(16);
      parent.backgroundColor = randomColor;
    });
  });
}
buttons('#ex3 button');

// zadanie5
const rect = document.querySelectorAll('#ex5 div');
const list = document.querySelectorAll(['#ex5 li']);

rect.forEach((element) => {
  element.addEventListener('mouseover', (e) => {
    // 1
    // list[0].style.backgroundColor = e.target.style.backgroundColor;
    // 2
    // list[list.length - 1].style.backgroundColor =
    //   e.target.style.backgroundColor;
    // 3
    // for (let i = 0; i < list.length; i++) {
    //   if (i % 2 !== 0) {
    //     list[i].style.backgroundColor = e.target.style.backgroundColor;
    //   }
    // }
    // 4
    // list.forEach((x) => {
    //   x.style.backgroundColor = e.target.style.backgroundColor;
    // });
    // 5
    // e.target.parentElement.lastElementChild.style.backgroundColor =
    //   e.target.style.backgroundColor;
  });
});

// zadanie6
const ex6 = document.querySelector('#ex6');
// 1
const first = ex6.firstElementChild.firstElementChild.firstElementChild;
// 2
const second =
  ex6.firstElementChild.parentElement.firstElementChild.firstElementChild
    .nextElementSibling.parentElement;
// 3
const third =
  ex6.parentElement.firstElementChild.parentElement.firstElementChild
    .nextElementSibling.firstElementChild.firstElementChild.firstElementChild;
