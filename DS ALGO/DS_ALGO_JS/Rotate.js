let arr=[1,2,3,4,5];
let n = arr.length;
 
function rotate(arr,n){
   let x =arr[n-1],i;
   for(i=n-1;i>0;i--){
    arr[i]=arr[i-1];
   }
    arr[0]=x;   
 }
 rotate(arr, n);
  
console.log("Rotated array is :");
 for(let i=0;i<n;i++)
 console.log(arr[i]+ " ");



