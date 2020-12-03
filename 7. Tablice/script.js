// zadanie1
let arr = [2, 4, 6, 8];
console.log(arr);

//zadanie2
let arr = [1, 'two', 3, undefined, 5, 'six', 7, 'eight', true];
// 1
console.log(arr[0], arr[1]);
// 2
console.log(arr[arr.length - 1]);
// 3
console.log(arr);
// 4
for (let i = 0; i < arr.length; i++) {
  if (i % 2 == 0) {
    console.log(tab[i]);
  }
}
// 5
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'string') {
    console.log(arr[i]);
  }
}
// 6
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    console.log(arr[i]);
  }
}

//zadanie3
let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
let dif = 0;
// 1
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
// 2
for (let i = 0; i < arr.length; i++) {
  dif -= arr[i];
}
console.log(dif);
// 3
console.log(sum / arr.length);
// 4
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}
// 5
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i]);
  }
}
// 6
console.log(Math.min(...arr));
// 7
console.log(Math.max(...arr));
// 8
console.log(arr.reverse());

// zadanie4
function array(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
array([1, 2, 3, 4, 5, 6]);

// zadanie5
function array(arr) {
  let sum = 0;
  let avr = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avr = sum / arr.length;
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * avr);
  }
}
array([1, 2, 3, 4, 5, 6]);

// zadanie6
function array(arr) {
  let sum = 0;
  let avr = 0;
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    }
  }
  for (let i = 0; i < even.length; i++) {
    sum += even[i];
  }
  avr = sum / even.length;
  console.log(avr);
}
array([1, 2, 3, 4, 5, 6]);

// zadanie7
function array(arr) {
  console.log(arr.sort((a, b) => a - b));
}
array([8, 2, 6, 2, 3, 9]);

// zadanie8
function array(arr1, arr2) {
  let arr3 = [];
  arr3 = arr1.length + arr2.length;
  console.log([arr3]);
}
array([8, 2, 6], [1, 2, 3]);

// zadanie9
function array(arr, element) {
  let arr1 = arr.filter((el) => el != element);
  return arr1;
}
console.log(array([1, 2, 3, 4, 5], 3));

// zadanie10
function array(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * -1;
  }
  console.log(arr);
}
array([1, 2, 3]);
