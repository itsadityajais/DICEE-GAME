// console.log("hello");
// let a = 10;
// let b = 20;
// console.log(a + b);
// console.log(typeof (a + b));

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);

// let arr2 = [];
// function print(arr) {
//   //    console.log(arr[i])
//   for (let i = 0; i < arr.length; i++) {
//     //i=0
//     arr2[i] = arr[i] * 2; //1*2
//     console.log(arr2[i]);
//   }
//   console.log(arr);
// }

// print([1, 2, 3, 4, 5]);
// let outputArray = [];
// function doubleArrayElement(inputArray) {
//   for (let i = 0; i < inputArray.length; i++) {
//     //i=0,i=1
//     let value = inputArray[i] * 2;
//     outputArray[i] = value; //For i=0       arr2[0]=arr[0]*2=---arr2[0]=1*2----arr2=[2] //for i=1      arr2[1]=arr[1]*2------arr2[1]=2*2-----arr2[2,4]
//   }
//   return outputArray;
// }

console.log(doubleArrayElement);

function doubleArrayElement(inputArray, factor) {
  let outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    //i=0,i=1
    let value = inputArray[i] * factor;
    outputArray[i] = value; //For i=0       arr2[0]=arr[0]*2=---arr2[0]=1*2----arr2=[2] //for i=1      arr2[1]=arr[1]*2------arr2[1]=2*2-----arr2[2,4]
  }
  return outputArray;
}
