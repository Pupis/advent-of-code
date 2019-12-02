const { readFileSync } = require('fs');
const action = (a) => Math.floor(a/3) - 2;
const firstReducer = (acc, curr) => acc + action(curr);
const secondReducer = (acc, curr) => acc + getFuel(curr);
const getFuel = (a) => {
  let result = action(a);
  return (result > 0) ? result + getFuel(result) : 0;
}

let data = readFileSync('./fixtures/first.txt', 'utf8').split(/\n/);
data.pop();
console.log('First part result = ' + data.map((a) => parseInt(a, 10)).reduce(firstReducer, 0));

data = readFileSync('./fixtures/first.txt', 'utf8').split(/\n/);
data.pop();
console.log('Second part result = ' + data.map((a) => parseInt(a, 10)).reduce(secondReducer, 0));
