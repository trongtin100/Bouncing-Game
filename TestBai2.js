let arr = [1,2,4,5,6,7,8,9,10];
let x;
let a;
let index;
function insertNumberToArray(arr, x, a){
    for (let i = 0; i < arr.length; i++){
        if ( arr[i] == a){
            index = i;
            console.log (index);
            break;
        }
    }
    if (index < 0 && index > arr.length) {
        console.log(arr)
    } else
        arr[index] = x;
        console.log(arr);
}
insertNumberToArray(arr, 10,5);