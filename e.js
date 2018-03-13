const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 20, height: 150 },
    { name: 'Tun', age: 15, height: 130 },
];

Array.prototype.myMap = function(transformFn) {
    const output = [];
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        output.push(transformFn(element));
    }
    return output;
}

const arr = [1, 3, 5, 7, 2, 4, 6, 10].myMap(x => x * x);
console.log(arr);
