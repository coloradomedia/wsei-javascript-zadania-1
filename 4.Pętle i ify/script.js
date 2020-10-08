//zadanie 1
let a = 1;
let b = 2;

if (a > b) {
  console.log(`${a} is more than ${b}`);
} else {
  console.log(`${b} is more than ${a}`);
}

//zadanie2
let a = 1;
let b = 2;
let c = 3;

if (a > b && a > c) {
  console.log(`${a} is more than ${b} and ${c}`);
} else if (b > a && b > c) {
  console.log(`${b} is more than ${a} and ${c}`);
} else {
  console.log(`${c} is more than ${a} and ${b}`);
}

//zadanie3
for (let i = 0; i < 10; i++) {
  console.log('Lubię JavaScript');
}

//zadanie4
let a = 0;
for (let i = 0; i < 10; i++) {
  a += i;
}
console.log(i);

//zadanie5
var a = 5;

for (let i = 0; i <= a; i++) {
  if (i % 2 == 0) {
    console.log(i + ' - parzysta');
  } else {
    console.log(i + ' - nieparzysta');
  }
}

//zadanie6
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log('i= ' + i + ', j= ' + j);
  }
}

//zadanie7
console.log(0);
for (i = 1; i < 100; i++) {
  if (i % 15 == 0) {
    console.log('FizzBuzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// zadanie8
// a)
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}
//b)
let star = ' *';

for (let x = 0; x < 5; x++) {
  var result = '';
  for (y = 0; y < 5 - x; y++) {
    result += ' ';
  }
  for (z = 0; z < x + 1; z++) {
    result += star;
  }
  console.log(result);
}
//c)
let star = '*';

for (let x = 0; x < 5; x++) {
  let result = '';
  for (y = 0; y < 5 - x; y++) {
    result += ' ';
  }
  for (z = 0; z < x + 1; z++) {
    result += star;
  }
  for (v = 1; v < x + 1; v++) {
    result += '*';
  }
  console.log(result);
}

//d)
let star = '*';

for (let x = 0; x < 5; x++) {
  let result = '';
  for (y = 0; y < x + 1; y++) {
    result += star;
  }
  let count = x + 1;
  for (i = 1; i > x - 3; i--) {
    result += count++;
  }
  console.log(result);
}
console.log('-----');

//e)
let star = ' *';

for (let x = 0; x < 5; x++) {
  var result = '';
  for (y = 0; y < 5 - x; y++) {
    result += ' ';
  }
  for (z = 0; z < x + 1; z++) {
    result += star;
  }
  console.log(result);
}
for (v = 0; v < 3; v++) {
  console.log('     *');
}
