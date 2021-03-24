// const numbers = [1,2,3,4,5];

// const total = numbers.reduce(sum, 0);

// function sum(accumulator, value){
//     return accumulator + value;
// }

// console.log(total)


// const numbers = [100,2,3,4,5];

// const max = numbers.reduce(callback, -Infinity);

// function callback(accumulator, value) {
//     if(accumulator > value){
//         return accumulator;
//     }
//     else {
//         return value;
//     }
// }

// console.log(max)


const store = [{
    product: 'laptop',
    value: 1050,
    count: 3
}, {
    product: 'desktop',
    value: 4000,
    count: 10
}, {
    product: 'Phone',
    value: 500,
    count: 5
}];


const totalValueStore = store.reduce((acc,item)=> acc + (item.value * item.count), 0)

console.log(totalValueStore)