let arr1 = [2, 4, 1, -5, 54, 32, 14];
let min = arr1[0];

function findMin (arr) {
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

findMin(arr1);
console.log ('Min of ', arr1, 'is ', min )
