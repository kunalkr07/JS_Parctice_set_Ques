//Print the first 100 prime numbers

function prime(){
    for(let i=0;i<=100;i++){
        if(i!==0 && i%2!==0){
            console.log(`The prime numbers are ${i}`)
        }
    }
}
prime();