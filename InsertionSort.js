let array = [2, 8, 7, 4, 3, 6];

function InsertionSort(arr) {
  let j;
  for (let i = 0; i < arr.length; i++) {
    j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j = j - 1;
    }
  }
  return arr;
}

console.log(InsertionSort(array));
