const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 20, height: 150 },
    { name: 'Tun', age: 15, height: 130 },
];
// people.forEach(person => {
//     console.log(person);
// });
console.log(people.filter(p => p.age > 12));

Array.prototype.myFilter = function(checkFn) {
    const output = [];
    for(let i = 0; i < this.length; i++) {
        const person = this[i];
        if (checkFn(person)) {
            output.push(person);
        }
    }
    return output;
}
console.log(people.myFilter(x => x.age > 16));
