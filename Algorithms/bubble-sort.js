// O(n**2)

const bubbleSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let x = 0; x < arr.length - 1 - i; x++) {
      arr[x] < arr[x + 1] && [[arr[x], arr[x + 1]] = [arr[x + 1], arr[x]]]
    }
  }
  
  return arr
}


// test
const test = [123, 564, 7564, 7, 567, 567, 564, 7, 45, 7567, 567, 567, 56, 312, 3, 123, 12, 3, 123, 12, 31, 23, 1, 43546, 546, 867, 897, 978978, 67, 67, 67, 67, 67, 7777, 12]

console.log(bubbleSort(test));