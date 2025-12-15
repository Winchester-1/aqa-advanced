function getTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch todo');
      }
      return response.json();
    });
}

function getUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
      return response.json();
    });
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