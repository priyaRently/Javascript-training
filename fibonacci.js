/*const prompt=require("prompt-sync")();
const num = parseInt(prompt('Enter a number: '));
console.log('Fibonacci Term');

let n1=0,n2=1,term=1;
for(let i=1;i<num;i++)
{
    term=n1+n2;
    n1=n2;
    n2=term;
}

console.log(term);
*/
function fibonacci(n) {

    if (n <= 1)
        return n;
    let ans = fibonacci(n - 1) + fibonacci(n - 2);
    return ans;
}

const prompt = require("prompt-sync")();
const num = parseInt(prompt('Enter a number: '));

let result = fibonacci(num);
console.log(result)