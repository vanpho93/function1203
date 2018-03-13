const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 20, height: 150 },
    { name: 'Tun', age: 15, height: 130 },
];

const arr = [1, 3, 5, 7, 2, 4, 6, 10];

// console.log(arr.some(x => x % 2 === 1));
// console.log(people.some(x => x.age >= 18));
console.log(people.every(x => x.age >= 9));

Array.prototype.mySome = function(checkFn) {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (checkFn(element)) return true;
    }
    return false;
}
people.mySome(x => true);
