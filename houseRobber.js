
function rob (array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];

  array[1] = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
    array[i] = Math.max(array[i - 2] + array[i], array[i - 1])
  }
  console.log(array)
  return array[array.length - 1];
}


rob([2,7,9,4,1])
// 2,7,11, 11, 12
// rob([2,20,9,20,1])
