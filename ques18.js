//Rotate an array to the right 1 position
function rotateRight(arr){
    let firstElem=arr.pop();
    arr.unshift(firstElem);
    console.log(arr);
    return arr;
}
rotateRight([1,2,3,4,5,6]);