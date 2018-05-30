const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,
  createUser: () => {
    const user = { username: 'little.yesulga@gmail.com' };
    user['password'] = 'Passw0rd';
    return user;
  },
  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error')
};

module.exports = functions;
