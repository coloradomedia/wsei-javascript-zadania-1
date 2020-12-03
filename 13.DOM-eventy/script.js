// zadanie1
const btn = document.querySelector('#test-event');
// 1
btn.addEventListener('click', (e) => {
  console.log(e);
});
// 2
window.addEventListener('mousemove', (e) => {
  // console.log(e);
});
// 3
btn.addEventListener('mousemove', (e) => {
  // console.log(e);
});
// 4
document.addEventListener('keydown', (e) => {
  // console.log(e);
});
// 5
document.addEventListener('scroll', (e) => {
  // console.log(e);
});
// 6
document.querySelector('#input-test').addEventListener('input', (e) => {
  // console.log(e);
});

// zadanie2
const button = document.querySelector('#ex2');

button.addEventListener('click', (e) => {
  button.nextElementSibling.textContent = e.target.getAttribute('data-text');
});

// zadanie3
const ex3 = document.querySelector('#ex3');

ex3.addEventListener('mouseenter', () => {
  ex3.style.backgroundColor = 'blue';
});
ex3.addEventListener('mouseleave', () => {
  ex3.style.backgroundColor = 'red';
});

// zadanie4
const input = document.querySelector('#input-test');
const alert = document.createElement('div');
alert.textContent = `You can't type a number`;

const validate = (e) => {
  if (e.target.value.match(/\d/g)) {
    input.parentElement.appendChild(alert);
  } else {
    alert.remove();
  }
};

input.addEventListener('input', validate);

// zadanie5
const buttonClick = document.querySelector('#ex5-button');
const span = document.querySelector('#ex5 span');

let i = 0;
buttonClick.addEventListener('click', (e) => {
  i++;
  if (i <= 10) {
    span.textContent = i;
  }
  buttonClick.removeEventListener('click', e);
});

// zadanie6
const bg = document.querySelector('body');

window.addEventListener('scroll', () => {
  if (scrollY >= 200) {
    bg.style.backgroundColor = 'white';
  } else {
    bg.style.backgroundColor = 'red';
  }
});

// zadanie7
function calculator() {
  const calBtns = document.querySelectorAll('#calculator button');
  const input = document.querySelector('#calculator input');
  let equasion = '';
  function evalFunc(eq) {
    return eval(eq);
  }
  window.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
      input.value = evalFunc(equasion);
    }
  });

  calBtns.forEach((el) =>
    el.addEventListener('click', () => {
      equasion += el.textContent;
    })
  );
}

calculator();
