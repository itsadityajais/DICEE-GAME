let arr=[1,4,5,6,2];
let large;
large=arr[0];
for(i=1;i<arr.length;i++){
    if(arr[i]>large){
    large=arr[i];
    } 
}
console.log(large);

function fact(large){
    if(large==0)
      return 1;
    else
      return large*fact(large-1)
}
let result=fact(large);
console.log(result);







// if(large==0)
// console.log('Factorail of 0 is 1');
// else{
//     let fact=1;
//     for(i=1;i<=large;i++){
//         fact=fact*i;
//     }
//     console.log(`Factorial of ${large}=${fact}`)
// }
