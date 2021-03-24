// const names = ["azael", "fernanda", "jose", "bebo"];

// const numbers = [74,65,98,70,14]

// numbers.sort(compareFunction);

// console.log(numbers)


// function compareFunction(a, b) {
//     return a - b;
// }

const products = [{
    name: 'laptop',
    price: 1050,
    count: 3
}, {
    name: 'desktop',
    price: 4000,
    count: 10
}, {
    name: 'Phone',
    price: 500,
    count: 5
}];


products.sort((a, b) => a.price - b.price);

console.log(products)