// решение через цикл

var start = Number(prompt());
var end = Number(prompt());
var total = 0;
while  (start <= end) {
  total += start;
  start += 1;
}
console.log(total);


// решение через функции

var start = Number(prompt());
var end = Number(prompt());

function range(ar){
  var arr = [];
  var largest = Math.max(ar[0], ar[1]);
  var lowest = Math.min(ar[0], ar[1]);
  for (var i = lowest; i <= largest; i++){
      arr.push(i);
    }
  return arr;
}

function sum(arr){
  var total = 0;
  for (var i = 0; i < arr.length; i++){
      total = total + arr[i];
  }
  return total;
}

console.log(range([start, end]));
console.log(sum(range([start, end])));
