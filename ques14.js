//Create a function that will return a Boolean specifying if a number is prime.

  const prompt=require("prompt-sync")();
function Boolean(){
    const userNumber=parseInt(prompt("Enter a number"));
    if(userNumber%2==0){
        console.log(true)
    }else{
        console.log(false)
    }
}

Boolean();