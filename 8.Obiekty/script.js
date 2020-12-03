// zadanie1
const car = {
  name: 'BMW',
  age: 5,
  id: '2h34j5!',
  changeName: function (n) {
    this.name = n;
  },
  house: {
    city: 'Krakow',
    rooms: 3,
    kitchen: true,
  },
};
console.log(car.name, car.age, car.id);

// zadanie2
car.changeName('Subaru');
console.log(car);

// zadanie3
const obj = {
  sum: '',
  sumMethod: function (arr) {
    for (let i = 0; i < arr.length; i++) {
      this.sum = arr[i] + arr[i];
    }
    this.arr = this.sum;
    console.log(this.sum);
  },
};
obj.sumMethod([1, 2, 3]);

// zadanie4
const car = {
  name: 'BMW',
  age: 12,
  id: '2h34j5!',
};

for (let property in car) console.log(`${property}: ${car[property]}`);

// zadanie5
console.log(car.house);

// zadanie6
car.doors = 5;
car.hello = () => console.log('Hello');

car.hello();
