const testFunction = require('./testFunction');

test('Adds 2 + 2 to equal 4', () => {
  expect(testFunction.add(2, 2)).toBe(4);
});

// toEqual compares objects and arrays
test('User should have username little.yesulga@gmail.com', () => {
  expect(testFunction.createUser()).toEqual({
    username: 'little.yesulga@gmail.com',
    password: 'Passw0rd'
  });
});

test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// working with async data
// Promise
// test('User fetched name should be Leanne Graham', () => {
//   expect.assertions(1); //verifies a certain number of assertions are called
//   return testFunction.fetchUser()
//     .then(data => {
//       expect(data.name).toEqual('Leanne Graham');
//     });
// });

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1); //verifies a certain number of assertions are called
  const data = await testFunction.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
