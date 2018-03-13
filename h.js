const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 20, height: 150 },
    { name: 'Tun', age: 15, height: 130 },
];

const arr = [1, 3, 5, 7, 2, 4, 6, 10];

// console.log(arr.indexOf(7));
// console.log(people.indexOf({ name: 'Ti', age: 20, height: 150 }));

// console.log(people.find(p => p.name === 'Ti'));
// console.log(people.findIndex(p => { return p.name === 'Ti'}));
arr.forEach(x => console.log(x));