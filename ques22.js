/*Create a function that will receive two arrays of numbers as arguments and
return an array composed of all the numbers that are either in the first array
or second array but not in both*/

function array(arr1,arr2){
    let firstArr=arr1.filter(num =>!arr2.includes(num));
    let secondArr=arr2.filter(num => !arr1.includes(num));
    let newArr=firstArr.concat(secondArr);
    console.log(newArr)
}

array([1,2,3,4],[4,5,3,6,7]);
