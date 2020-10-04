//zadanie 1
let a = 1;
let b = 2;

if (a > b) {
  console.log(`${a} is more than ${b}`);
} else {
  console.log(`${b} is more than ${a}`);
}

//zadanie2
// let a = 1
// let b = 2
// let c = 3

// if{}

//zadanie3
for (let i = 0; i < 10; i++){
  console.log('Lubię JavaScript');
}

//zadanie4
let a = 0
for (let i = 0; i < 10; i++){
  a+=i
}
console.log(i);

//zadanie5
var a = 5

for (let i = 0; i <= a; i++){
  if (i % 2 == 0) {
    console.log(i +' - parzysta');
  } else {
    console.log(i +' - nieparzysta');
  }
}

//zadanie6
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
      console.log("i= " + i + ", j= " + j);
  }
}

//zadanie7
console.log(0);
for(i = 1; i < 100; i++) {
if(i%15==0)
    console.log("FizzBuzz");
if else(i%3 == 0)
    console.log("Fizz");
else if(i%5 == 0)
    console.log("Buzz");
else
    console.log(i);
}

// zadanie8
// a)
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
//b)
let star = ' *';

for(let x = 0; x < 5; x++) {
    var result = '';
    for(y = 0; y < 5 - x; y++) {
        result += ' ';
    }
    for(z = 0; z <  x + 1; z++) {
        result += star;
    }
    console.log(result);
}
//c)
