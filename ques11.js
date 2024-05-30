//Calculate the average of the numbers in an array of numbers

let array=[1,2,3,4,5,6];
        let sum=0;
for(let val of array){
    sum+=val;   
}
console.log(`The sum of array is ${sum}`);
    let length=array.length;
    console.log(`The length of array is ${length}`);
let average=sum/length;
console.log(`The average of array is ${average}`);