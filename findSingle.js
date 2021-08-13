/*
 * @param {number[]} arr
 * @returns number
const arr = [10, 2, 2 , 1, 0, 0, 10]
findSingle(arr) // 1
 */
 function findSingle(arr) {
   var res = [];
   for (var i = 0; i < arr.length; i++){
     if (arr[0] != arr[i]) {res.push(arr.shift(arr[0]));}
     else {arr.shift(arr[0]);}
   }
   return res;
 }
 console.log(findSingle([10, 2, 2 , 1, 0, 0, 10]));
