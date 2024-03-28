const numArray = new Array<number>();

numArray.push(1);
numArray.push(2);
let i = 0  ;

numArray.forEach(num => {i = i + num});

console.log("The sum is ", i)
