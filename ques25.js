/*Create a function that will receive two arrays and will return an array with
elements that are in the first array but not in the second*/

function elements(){
    let arr1=[1,2,4,5];
    let arr2=[2,3,6,7];
    let newArray=arr1.filter(element => !arr2.includes(element));
    console.log(newArray);
}
elements();
