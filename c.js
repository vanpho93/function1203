const numbers = [1, 3, 5, 6, 2, 4, 8];
// const ns = numbers.push(10);
numbers.push(10);
const ns = [1, ...numbers, 1];
const ns2 = Object.assign([], numbers);
console.log('ns2 =', ns2);
numbers.push(5);
// numbers.push(10);
// numbers.unshift(10);
// numbers.pop();
// numbers.shift();
// numbers[1] = 10;
// numbers.splice(1, 2);
// numbers.splice(2, 0, 10);
console.log(ns);
