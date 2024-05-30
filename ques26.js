//Calculate the sum of first 100 prime numbers and return them in an array.


function isPrime(n){
    for(let i=2;i<=n;i++){
        if(i%n==0){
            return `${i} is a prime number`
        }else{
            return `${i} is not a prime number`
        }
    }

  
}

console.log(isPrime(18));