// 常见排序算法实现
// https://www.cnblogs.com/onepixel/p/7674659.html

// 排序相关的一些概念
// 原地排序算法：特指空间复杂度是O(1)的排序算法
// 稳定排序算法：如果待排序序列中存在值相等的元素，经过排序后，相等元素之间原有的先后顺序不变
/* 有序度：数组中具有有序关系的元素对的个数
 * 满有序度：n * (n - 1) / 2
 * 逆序度：满有序度 - 有序度
 * 排序就是增加有序度 减少逆序度
 */

const arr = [3, 44, 38, 5, 15, 46, 50, 28, 26, 36, 19, 4, 2, 47, 27];

/* ------比较类排序：通过比较来决定元素间的相对次序，由于其时间复杂度不能突破O(nlogn)，因此也被称为非线性时间比较类排序------ */

/* 交换排序 */

// 冒泡排序-每次查看相邻的元素 如果逆序 则交换
// 时间复杂度O(n^2) 空间复杂度O(1) 原地排序 稳定排序
function bubbleSort(arr) {
  let flag;
  for (let i = 0; i < arr.length - 1; i++) {
    flag = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
}
bubbleSort(arr);
console.log("bubbleSort--", arr);

// 快速排序-先调配出左（比标杆小）右（比标杆大）子数组，然后对左右子数组进行排序
// 时间复杂度O(nlogn) 空间复杂度O(nlogn) 原地排序 稳定排序
function quickSort(arr, begin, end) {
  if (begin >= end) return;
  const pivot = partition(arr, begin, end);
  quickSort(arr, begin, pivot - 1);
  quickSort(arr, pivot + 1, end);
}

function partition(arr, begin, end) {
  let pivot = begin,
    count = pivot + 1;
  for (let i = count; i <= end; i++) {
    if (arr[i] < arr[pivot]) [arr[count++], arr[i]] = [arr[i], arr[count]];
  }
  count--;
  [arr[pivot], arr[count]] = [arr[count], arr[pivot]];
  return count;
}
quickSort(arr, 0, arr.length - 1);
console.log("quickSort--", arr);

/* 插入排序 */

// 简单插入排序-对于未排序数据 在已排序序列中从后向前扫描 找到相应位置并插入
// 时间复杂度O(n^2) 空间复杂度O(1) 原地排序 稳定排序
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i,
      cur = arr[i];
    while (j - 1 >= 0 && cur < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = cur;
  }
}
insertionSort(arr);
console.log("insertionSort--", arr);

// 希尔排序-第一个突破O(n^2)的排序算法，是简单插入排序的改进版
// 时间复杂度O(n^1.3) 空间复杂度O(1) 原地排序 稳定排序
function shellSort(arr) {
  for (let gap = arr.length >> 1; gap > 0; gap >>= 1) {
    for (let i = gap; i < arr.length; i++) {
      let j = i,
        cur = arr[i];
      while (j - gap >= 0 && cur < arr[j - gap]) {
        arr[j] = arr[j - gap];
        j = j - gap;
      }
      arr[j] = cur;
    }
  }
}
shellSort(arr);
console.log("shellSort--", arr);

/* 选择排序 */

// 选择排序-每次找最小值 然后放到待排序数组的起始位置
// 时间复杂度O(n^2) 空间复杂度O(1) 原地排序 不稳定排序
function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) min = j;
    }
  }
}
selectionSort(arr);
console.log("selectionSort--", arr);

// 堆排序
// 时间复杂度O(n^logn) 空间复杂度O(1) 原地排序 稳定排序
function heapSort(arr) {
  var len = arr.length;
  for (var i = len >>> 1; i >= 0; i--) {
    heapify(arr, len, i);
  }
  for (var i = len - 1; i >= 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    heapify(arr, i, 0);
  }
}
function heapify(arr, len, i) {
  var left = i * 2 + 1,
    right = i * 2 + 2,
    max = i;
  if (left < len && arr[left] > arr[max]) max = left;
  if (right < len && arr[right] > arr[max]) max = right;
  if (max != i) {
    [arr[max], arr[i]] = [arr[i], arr[max]];
    heapify(arr, len, max);
  }
}
heapSort(arr, 0, arr.length - 1);
console.log("heapSort--", arr);

/* 归并排序 */

// 二路归并排序-先排序左右子数组 然后合并两个有序数组
// 时间复杂度O() 空间复杂度O() 非原地排序 稳定排序
function mergeSort(arr, begin, end) {
  if (begin >= end) return; // 递归返回条件
  let mid = (begin + end) >> 1;
  mergeSort(arr, begin, mid); // 分
  mergeSort(arr, mid + 1, end); // 分

  merge(arr, begin, mid, end);
}

function merge(arr, begin, mid, end) {
  let tmp = [],
    i = begin,
    j = mid + 1;
  k = 0;
  while (i <= mid && j <= end)
    tmp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
  while (i <= mid) tmp[k++] = arr[i++];
  while (j <= end) tmp[k++] = arr[j++];
  for (let p = 0; p < tmp.length; p++) arr[begin + p] = tmp[p];
}

mergeSort(arr, 0, arr.length - 1);
console.log("mergeSort--", arr);

/* ------非比较类排序：不通过比较来决定元素间的相对次序，它可以突破给予比较排序的下界，以线性时间运行，因此也称为线性时间非比较类排序------ */
/* tips：对要排序数据的要求很苛刻 */

// 桶排序-将要排序的数据分到几个有序的桶里，桶内排完序后(可以使用快排)把每个桶里的数据按照顺序依次取出
// 桶排序比较适合用在数据存储在外部磁盘中，数据量比较大，内存有限，无法将数据全部加载到内存中的情况
function bucketSort(arr, bucketSize) {
  var minValue = arr[0],
    maxValue = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) minValue = arr[i];
    else if (arr[i] > maxValue) maxValue = arr[i];
  }
  var bucketSize = bucketSize || 5, // 桶的数据范围
    bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1, // 桶的数量
    buckets = new Array(bucketCount);
  for (var i = 0; i < buckets.length; i++) buckets[i] = [];
  for (var i = 0; i < arr.length; i++)
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  arr.length = 0;
  for (var i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]); // 对每个桶进行排序
    for (var j = 0; j < buckets[i].length; j++) arr.push(buckets[i][j]);
  }
}
bucketSort(arr);
console.log("bucketSort--", arr);

// 计数排序-计数排序其实是桶排序的一种特殊情况 计数排序每个桶内的数据是相同的
// 要排序的 n 个数据，所处的范围并不大的时候，比如最大值是k，我们就可以把数据划分成k个桶
function countingSort(arr, maxValue) {
  var bucket = new Array(maxValue + 1),
    sortedIndex = 0;
  for (var i = 0; i < arr.length; i++) {
    if (!bucket[arr[i]]) bucket[arr[i]] = 0;
    bucket[arr[i]]++;
  }
  for (var i = 0; i < bucket.length; i++) {
    while (bucket[i] > 0) {
      arr[sortedIndex++] = i;
      bucket[i]--;
    }
  }
}
countingSort(arr, 50);
console.log("countingSort--", arr);

// 基数排序
function radixSort(arr, maxDigit) {
  var divide = 1,
    mod = 10,
    counter = [];
  for (var i = 0; i < maxDigit; i++, divide *= 10, mod *= 10) {
    for (var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / divide);
      if (!counter[bucket]) counter[bucket] = [];
      counter[bucket].push(arr[j]);
    }
    var idx = 0;
    for (var j = 0; j < counter.length; j++) {
      var value;
      if (counter[j]) {
        while ((value = counter[j].shift())) arr[idx++] = value;
      }
    }
  }
}
radixSort(arr, 2);
console.log("radixSort--", arr);
