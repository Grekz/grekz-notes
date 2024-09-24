const binarySearchRange = (array, search, start, end) => {
  let left = Math.max(start, 0)
  let right = Math.min(array.length - 1, end)
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const cur = array[mid]
    if (cur === search) return mid
    if (cur < search) left = mid + 1
    else right = mid - 1
  }
  return -1
}

const binarySearch = (array, search) => {
  let left = 0
  let right = array.length - 1
  return binarySearchRange(array, search, left, right)
}

const tests = [
  {
    input: {
      array: [1, 2, 3, 4, 5, 6],
      search: 3,
    },
    output: 2, // 0-based index
  },
  {
    input: {
      array: [1, 2, 3, 4, 5, 6],
      search: 9,
    },
    output: -1, // 0-based index
  },
  {
    input: {
      array: [1, 2, 3, 4, 5, 6],
      search: 1,
    },
    output: 0, // 0-based index
  },
].forEach(({ input: { array, search }, output }, idx) => {
  const result = binarySearch(array, search)
  console.log({
    testCase: idx,
    result,
    expectedOutput: output,
    success: result === output,
    array,
    search,
  })
})

const testRange = [
  {
    input: {
      array: [1, 2, 3, 4, 5, 6],
      search: 3,
      start: 1,
      end: 50,
    },
    output: 2, // 0-based index
  },
  {
    input: {
      array: [1, 2, 3, 4, 5, 6],
      search: 9,
      start: 3,
      end: 5,
    },
    output: -1, // 0-based index
  },
  {
    input: {
      array: [1, 2, 3, 4, 5, 6],
      search: 1,
      start: 3,
      end: 5,
    },
    output: -1, // 0-based index
  },
].forEach(({ input: { array, search, start, end }, output }, idx) => {
  const result = binarySearchRange(array, search, start, end)
  console.log({
    testCase: `Test Range: ${idx}`,
    result,
    expectedOutput: output,
    success: result === output,
    array,
    search,
  })
})
