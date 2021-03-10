let arr1 = [2, 4, 1, -5, 54, 32, 14];

function findMin (arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log ('Min of ', arr, 'is ', min )
}

findMin(arr1);
