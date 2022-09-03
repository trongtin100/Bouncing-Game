function findAvg(arr) {
    let sum = 0;
    for ( let i = 0; i < arr.length; i++ ){
        sum += arr[i];
    }
    let avg = sum/arr.length;
    return avg;
}
let num = [0, 5, 6, 7, 8 ,9];
let avgSum = findAvg(num);
console.log(avgSum);
