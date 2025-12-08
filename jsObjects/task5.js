const users = [
  {name: 'John', email: 'john@gmail.com', age: 30},
  {name: 'Alex', email: 'alex@gmail.com', age: 29},
  {name: 'Steve', email: 'steve@gmail.com', age: 32}
];

for (const user of users) {
  const {name, email, age} = user;
  console.log(`User's name is ${name}, user's email is ${email}, user is ${age} years old`);
}