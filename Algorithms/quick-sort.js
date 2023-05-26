// O(log n)

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// test
const test = [123, 564, 7564, 7, 567, 567, 564, 7, 45, 7567, 567, 567, 56, 312, 3, 123, 12, 3, 123, 12, 31, 23, 1, 43546, 546, 867, 897, 978978, 67, 67, 67, 67, 67, 7777, 12]

console.log(quickSort(test));