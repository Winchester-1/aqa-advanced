const car1 = {
  brand: 'Chevrolet',
  model: 'Impala',
  year: 1967
};

const car2 = {
  brand: 'Dodge',
  model: 'Charger',
  owner: 'Alex Teller'
};

const car3 = {...car1, ...car2};

console.log(car3);
