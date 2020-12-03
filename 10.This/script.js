// zadanie1
function Person(firstName, lastName, age, country, city) {
  this.personFirstName = firstName;
  this.personLastName = lastName;
  this.personAge = age;
  this.personCountry = country;
  this.personCity = city;
  this.favouriteFood = [];

  this.showData = function () {
    console.log(
      `Name: ${this.personFirstName} ${this.personLastName}, 
      Age: ${this.personAge}, 
      Country: ${this.personCountry}, 
      City: ${this.personCity}`
    );
  };

  this.addYear = function () {
    ++this.personAge;
  };
}

const person1 = new Person('Mark', 'Friday', 24, 'USA', 'Bethesda');
const person2 = new Person('Jenny', 'Smith', 34, 'Canada', 'Vancouver');

person1.showData();
person1.addYear();
console.log('One year more: ' + person1.personAge);

person2.showData();
person2.addYear();
person2.addYear();
person1.showData();
console.log(
  'Now, Person 1 has ' +
    person1.personAge +
    ' age and Person 2 has ' +
    person2.personAge +
    ' age'
);

// zadanie2
Person.prototype.addFood = function (food) {
  this.favouriteFood.push(food);
};
Person.prototype.yourFood = function () {
  console.log(this.favouriteFood);
};

person1.addFood('Pancakes');
person1.addFood('Coca Cola');
person1.addFood('Blueberries');
person1.yourFood();

person2.addFood('Pizza');
person2.addFood('French fries');
person2.addFood('Water');
person2.yourFood();

// zadanie3
const calculator = {
  input: function (a, b) {
    this.a = a;
    this.b = b;
  },
  sum: function () {
    console.log(this.a + this.b);
  },
  subtract: function () {
    console.log(this.a - this.b);
  },
  multiply: function () {
    console.log(this.a * this.b);
  },
  divide: function () {
    this.b === 0
      ? console.log("Can't divide by 0!")
      : console.log(this.a / this.b);
  },
};

calculator.input(43, 3);
calculator.sum();
calculator.subtract();
calculator.multiply();
calculator.divide();

// zadanie4
function Ladder(rungs) {
  this.rungs = rungs;
  this.currentPosition = 0;
  this.direction = '';
}

Ladder.prototype = {
  goUp: function (rungs) {
    const position = (this.currentPosition += rungs);
    if (position >= this.rungs) {
      console.log('You are at the top!');
      this.currentPosition = this.rungs;
    } else {
      const rungsLeft = this.rungs - this.currentPosition;
      this.getPosition('top', rungsLeft);
    }
  },
  goDown: function (rungs) {
    const position = (this.currentPosition -= rungs);
    if (position <= 0) {
      console.log('You are on the ground!');
      this.currentPosition = 0;
    } else {
      this.getPosition('ground', rungs);
    }
  },
  getPosition: function (direction, rungs) {
    console.log(
      `You are at the ${this.currentPosition} rung. ${rungs} rungs left to the ${direction}.`
    );
  },
};

const climber = new Ladder(110);

climber.goUp(45);
climber.goDown(27);
climber.goUp(110);
climber.goDown(220);

// let stairs = {
//   yourStair: 0,
//   goUp: function() {
//       this.yourStair++;
//   },

//   goDown: function() {
//       if (this.yourStair <= 0) {
//           this.yourStair = 0;
//           console.log("You reached the lowest stair!");

//           return;
//       }
//       this.yourStair--;
//   },

//   tellMeMyStair: function() {
//       return `Your Stair: ${this.yourStair}`;
//   }
// };

// console.log(stairs.tellMeMyStair());
// stairs.goUp();
// console.log(stairs.tellMeMyStair());
// stairs.goDown();
// stairs.goDown();
