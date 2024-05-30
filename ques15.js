//Calculate the sum of digits of a positive integer number

function positive(){
    let array=[1,2,3,-4,-5,-7,8];
    let sum=0;
    for(let val of array){
        console.log(`The value of array ${val}`)
        if(val>=0){
            sum+=val;
        }
    }
    console.log(`The sum of positive value are ${sum}`)
}

positive();