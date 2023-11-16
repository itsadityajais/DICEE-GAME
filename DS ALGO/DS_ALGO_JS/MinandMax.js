//Minimum and Maximum element in an array
let arr=[3,1,4,5,2];
let max=arr[0];
for(i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
let min=arr[0];
for(i=1;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log(`Maximum element = ${max}, Minimum element = ${min} `)