//Create a function that will convert from Fahrenheit to Celsius
const prompt=require("prompt-sync")();
    let celcius;
    const fehrenheight=parseInt(prompt("Enter temparature"));

        celcius=5/9*(fehrenheight-32);
        console.log(`The celcius is ${celcius}`)