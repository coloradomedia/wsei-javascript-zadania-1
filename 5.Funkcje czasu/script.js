// zadanie1
let i = 1;
const counter = setInterval(function () {
  console.log('Cześć po raz ' + i++);
  if (i == 16) {
    clearInterval(counter);
  }
}, 3000);

// zadanie2
const arr = [1, 2, 3, 4, 5];
setTimeout(function () {
  console.log(arr);
  let i = 0;
  let items = setInterval(function () {
    if (i < arr.length) {
      console.log(arr[i]);
      i++;
    } else {
      clearInterval(items);
    }
  }, 3000);
}, 2000);
