class MaxBinaryHeap {
  constructor() {
    this.value = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    let arr = this.value;
    let elem = arr.push(value);
    let elemIndex = arr.length - 1;
    let parentIndex = Math.floor(((elemIndex-1)/2));

    while (arr[elemIndex] > arr[parentIndex] && parentIndex >= 0) {
      let temp = arr[elemIndex];
      arr[elemIndex] = arr[parentIndex];
      arr[parentIndex] = temp;
      elemIndex = parentIndex;
      parentIndex = Math.floor(((elemIndex-1)/2));
    }
    return this;
  }

  remove() {
    let arr = this.value;
    let max = arr[0];
    let curr = arr.pop();
    if (arr.length < 1) {
      return max;
    }
    arr[0] = curr;

    let currIndex = 0;
    let leftIndex = (currIndex * 2) + 1;
    let rightIndex = (currIndex * 2) + 2;

    while(arr[currIndex] < arr[leftIndex] || arr[currIndex] < arr[rightIndex]) {

      if(arr[leftIndex] > arr[rightIndex]) {
        let temp = arr[leftIndex];
        arr[leftIndex] = arr[currIndex];
        arr[currIndex] = temp;

        currIndex = leftIndex;
        leftIndex = (currIndex * 2) + 1;
        rightIndex = (currIndex * 2) + 2;
      }

      if (arr[rightIndex] > arr[leftIndex]) {
        let temp = arr[rightIndex];
        arr[rightIndex] = arr[currIndex];
        arr[currIndex] = temp;

        currIndex = rightIndex;
        leftIndex = (currIndex * 2) + 1;
        rightIndex = (currIndex * 2) + 2;
      }
    }
    return max;
  }

}

let heap = new MaxBinaryHeap();
heap.insert(55);
