//Create a function that will return the number of words in a text.

function words(){
    let sentence="HELLO WORLD!";
   console.log(`The reversed words will be ${sentence.split('').reverse().join('')}`)
   console.log(`The number of sentence will be ${sentence.length}`);
   for(let val of sentence){
    if(val.charAt(val)===''){
        val++;
    }
    console.log(val);
   }
   
  
}

words()