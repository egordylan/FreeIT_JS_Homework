var x = prompt('Input x please');
var y = prompt('Input y please');
var minNum = varMin(x, y);
function varMin(x, y) {
   if (x < y) {
     return x;
   }
   else if (x == y) {
     return 'Да вы знаток вводить равные значения' ;
   }
   else {
     return y;
   }
 }
console.log(minNum)
alert(minNum)



// тернарный оператор
var x = prompt('Input x please'), y = prompt('Input y please');
(x < y) ? alert(x) : alert(y);
