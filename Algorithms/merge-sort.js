// O (log n)

const merge = (firstArr, secondArr) => {
  let i = 0;
  let j = 0;
  let sortArr = [];

  while (i < firstArr.length && j < secondArr.length) {
    sortArr.push(firstArr[i] < secondArr[j] ? firstArr[i++] : secondArr[j++])
  }
  
  return [...sortArr, ...firstArr.slice(i), ...secondArr.slice(j)]
}


const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}


// test
const test = [123, 564, 7564, 7, 567, 567, 564, 7, 45, 7567, 567, 567, 56, 312, 3, 123, 12, 3, 123, 12, 31, 23, 1, 43546, 546, 867, 897, 978978, 67, 67, 67, 67, 67, 7777, 12]

console.log(mergeSort(test));