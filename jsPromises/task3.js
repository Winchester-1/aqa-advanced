async function getTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  if (!response.ok) {
    throw new Error('Failed to fetch todo');
  }

  const todo = await response.json();
  return todo;
}

async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }

  const user = await response.json();
  return user;
}

const allResult = Promise.all([getTodo(), getUser()]);

allResult
  .then(([todo, user]) => {
    console.log('Promise.all result:');
    console.log('Todo:', todo);
    console.log('User:', user);
  })
  .catch(error => {
    console.error('Error in Promise.all:', error);
  });

const raceResult = Promise.race([getTodo(), getUser()]);

raceResult
  .then(result => {
    console.log('Promise.race result:', result);
  })
  .catch(error => {
    console.error('Error in Promise.race:', error);
  });