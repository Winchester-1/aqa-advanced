class TodoService {
  static async getTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) throw new Error('Failed to fetch todo');
    const todo = await response.json();
    return todo;
  }
}

class UserService {
  static async getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) throw new Error('Failed to fetch user');
    const user = await response.json();
    return user;
  }
}

async function runServices() {
  try {
    const [todo, user] = await Promise.all([TodoService.getTodo(), UserService.getUser()]);
    console.log('Promise.all result:', todo, user);

    const raceResult = await Promise.race([TodoService.getTodo(), UserService.getUser()]);
    console.log('Promise.race result:', raceResult);
  } catch (error) {
    console.error('Error:', error);
  }
}

runServices();