//Print the first 10 Fibonacci numbers without recursion

let num1=0;//initial value 0
let num2=1;//second value 1

for(let i=2;i<=10;i++){//loops starts from 2 and end at 10
    let Fibonacci=num1+num2;
    num1=num2;
    num2=Fibonacci;
    console.log(`The fiabonnaci numbers are ${num1}`)
}
