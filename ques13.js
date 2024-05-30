//Find the maximum number in an array of numbers.

let array=[2,8,4,6];
  
    for(let val of array){
       console.log(`The array are ${val}`)
    }
    if(array[0]>array[1] ){
        console.log(`The max number of array is ${array[0]}`)
    }else if(array[1]>array[2]){
        console.log(`The max number of array is ${array[1]}`)
    }else if(array[2]>array[3]){
        console.log(`The max number of array is ${array[2]}`)
    }else{
        console.log(`The max number of array is ${array[3]}`)
    }