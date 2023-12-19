const numbers = [0,1,2,3,4,5,6,7,8,9,10];
console.log(numbers)

const even = numbers.filter((num)=> num%2==0);
console.log(`Even numbers is : ${even}`)

const odd = numbers.filter((num)=> num%2!=0);
console.log(`Odd numbers is : ${odd}`)