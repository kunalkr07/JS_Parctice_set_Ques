//Create a function that will find the nth Fibonacci number using recursion.

    function fiabo(num){
        if(num == 0)
            return 0;
        if( num ==  1)
            return 1;
        return fiabo(num - 1) + (num - 2);
    }

    let num=fiabo(10);
    console.log(num);