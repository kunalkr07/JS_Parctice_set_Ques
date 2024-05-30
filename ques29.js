//Calculate the sum of numbers received in a comma delimited string in js
    
    function sumofComma(inputString){
        const numberString=inputString.split(',');
        console.log(numberString);
        const sum=numberString.reduce((previous,currentValue) =>{
            const number=parseFloat(currentValue.trim());
          
            return previous +(isNaN(number)?0:number);
        },0)
    }
    const input="1,2,3.5,4.1,-5";
    const result=sumofComma(input);
    console.log(`The result is ${result}`);