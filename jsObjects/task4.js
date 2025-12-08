let person = {
  firstName: 'Alex',
  lastName: 'Teller',
  age: 29
};

person.email = 'alex_teller@gmail.com';
delete person.age;

console.log(person);