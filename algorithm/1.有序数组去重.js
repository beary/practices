// 第一版
const removeDuplicates = nums => {
  if (!nums)
    return 0
  if (nums.length < 2)
    return nums.length
  let base = 0
  let current = 0
  let i = -1
  let j = i
  /*
  双层循环
  由于每次慢指针变化时，快指针都要回到满指针的位置开始判断
  p1             p2
  0, 0, 0, 0, 0， 1

     p1 p2
  0, 1, 0, 0, 0， 1

  在上面的注释中，p2 为 1 时又会回到下标 1 处开始下一轮循环，而实际上后面连续的 0 已经判断过，是不需要判断的
   */
  while (j < nums.length) {
    i++
    for (j = i; j < nums.length; j++) {
      base = nums[i]
      current = nums[j]
      if (base < current) {
        nums[i + 1] = current
        break
      }
    }
  }
  return i + 1
}

// 第二版
const removeDuplicates2 = nums => {
  if (!nums)
    return 0
  if (nums.length < 2)
    return nums.length
  let base = 0
  let current = 0
  let i = 0
  /*
  当慢指针变化时，快指针不会回到满指针的下标处，而是继续向前，时间复杂度 O(n)
  */
  for (let j = i; j < nums.length; j++) {
    base = nums[i]
    current = nums[j]
    if (base < current)
      nums[++i] = current
  }

  return i + 1
}


const arr = [-1]
const arr2 = [-1]

for (let i = 0; i < 10000; i++)
  for (let j = 2; j > 0; j--) {
    arr.push(i)
    arr2.push(i)
  }

console.log('数组初始化完成')

const t1 = new Date()
removeDuplicates(arr)
const t2 = new Date()
removeDuplicates2(arr2)
const t3 = new Date()

console.log(`版本1执行时间 ${t2.getTime() - t1.getTime()} ms`)
console.log(`版本2执行时间 ${t3.getTime() - t2.getTime()} ms`)

