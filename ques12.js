/*Create a function that receives an array of numbers as argument and returns an
array containing only the positive numbers*/

function array(){
    let num=[1,2,3,-4,-5,-6]
    for(let val of num){
        if(val>0){
            console.log(`The positive nummbers ${val}`)
        }
    }   
}
array();

