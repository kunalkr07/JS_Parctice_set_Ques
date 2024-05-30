//Rotate an array to the left 1 position

function rotate(arr){
        let firstElem=arr.shift();
        arr.push(firstElem);
        console.log(arr);
        return arr;
}
rotate([1,2,3,4,5]);