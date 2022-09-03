let sum = 0;
let check = true;
let count = 2;
function sumOfListPrime (x) {
    while (count <= x) {
        check = true;
        for (let i = 2; i< count -1; i++) {
            if (count % i == 0) {
                check = false;
                break;
            }
        }
            if (check){
                sum += count;
            }
        count ++;
    }
    console.log(sum)
}
sumOfListPrime(5)




