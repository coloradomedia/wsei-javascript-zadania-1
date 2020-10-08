// zadanie1
function hi() {
  console.log('Udało się!');
}
hi();

// zadanie2
function hi(x) {
  console.log('Your parameter ' + x);
}
hi('Milordzie');

//zadanie3
function hi(arr) {
  console.log(arr);
}
hi([1, 2, 3, 4]);

//zadanie4
function write(x) {
  let i = 1;
  let count = setInterval(function () {
    if (i <= 5) {
      console.log(x);
      i++;
    } else {
      clearInterval(count);
      console.log('Koniec');
    }
  }, 500);
}
write('this is my string');
