//  FOR EACH METHOD

const letters = ['a', 'b', 'c', 'd', 'a', 'b'];

let count = {};

letters.forEach(item => {
   if (count[item]) {
        count[item]++;
    } else {
            count[item] = 1
        }
});

console.log(count);


