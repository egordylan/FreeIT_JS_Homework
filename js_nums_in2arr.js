/*
 * @param {number[]} arr1 - integers
 * @param {number[]} arr2 - integers
 * @returns {number[]}
 intersect(
  [1,2,2,3,4,4],
  [2,2,4,5,5,6,2000]
)
// [2,2,4]
 */
arr1 = [1,2,2,3,4,4];
arr2 = [2,2,4,5,5,6,2000];
function intersect(arr1, arr2) {
  var array0 = [];
  var i = 0, j = 0;
  while (i < arr1.length && j < arr2.length){
      if (arr1[i] < arr2[j]){
        i++;}
      else if (arr1[i] > arr2[j]){
        j++;}
      else{
        array0.push(arr1[i]);
        i++;
        j++;
        }
    }
  return array0;
}
console.log(intersect(arr1, arr2));
// найти повторяющиеся 2
function intersect2(arr1, arr2){
  var i = 0, j = 0;
  var array1 = [];
  while (i < arr1.length && j < arr2.length){
    if (arr1[i] === arr2[j]){
        array1.push(arr1[i]);
        i++;
        j++;}
    else {
       if (arr1[i] < arr2[j]){i++;}
       else{j++;}
    }
  }
  return array1;
}
console.log(intersect2(arr1, arr2));

// чере удаление (для предварительно отсортированных массивов)
function intersect3(arr1, arr2){
  var result = [];
  while (arr1.length > 0 && arr2.length > 0){
    if (arr1[0] < arr2[0]) {arr1.shift();}
    else if (arr1[0] > arr2[0]) {arr2.shift();}
    else {
          result.push(arr1.shift());
    }
  }
  return result;
}
console.log(intersect3(arr1, arr2));

// найти уникальные --- не решено. надо подумать на досуге
function unique(arr1, arr2){
  var result = [];
  if (arr1.length == arr2.length){
    while (arr1.length > 0 && arr2.length > 0){
      if (arr1[0] < arr2[0]){
        result.push(arr1.shift());
      }
      else if (arr1[0] > arr2[0]){
        result.push(arr2.shift());
      }
      else if (arr1[0] === arr2[0]){
        arr1.shift();
        arr2.shift();
        }
     }
  }
  else if (arr1.length < arr2.length){
    result.push(arr2.pop());
  }
  else if (arr1.length > arr2.length){
      result.push(arr1.pop());
    }
    return result;
  }
console.log(unique([1,1,2,2,3,4,5,6,7,7,7,7,111], [2,2,2,3,4,4,4,4,4,5,7,7,8,90,2000]));














function unique(arr1, arr2){
  var result = [];
  if (arr1.length < arr2.length) {
    while(arr1.length != arr2.length){
      result.push(arr2.pop());
    }
  }

  else if (arr1.length > arr2.length){
    while(arr1.length != arr2.length){
      result.push(arr1.pop());
    }
  }

  else if(arr1.length == arr2.length){
    while (arr1.length > 0 && arr2.length > 0){
        if (arr1[0] < arr2[0]){
          result.push(arr1.shift());
        }
        else if (arr1[0] > arr2[0]){
          result.push(arr2.shift());
        }
        else if (arr1[0] === arr2[0]){
          arr1.shift();
          arr2.shift();
          }
        }
     }


    return result;
  }
console.log(unique([1,1,2,2,3,4,5,6,7,7,7,7,111], [2,2,2,3,4,4,4,4,4,5,7,7,8,90,2000]));

if (arr1.length < arr2.length){
  for (var i =0; i < arr2.length; i++){
    result.push(arr2.pop());
  }
}
