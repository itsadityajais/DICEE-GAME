let a=[10,9,8,7,6,5,4,3,2,1]
let arr=[];
function reverse(a){
    for(let i=a.length-1;i>=0;i--){
        arr.push(a[i]);
    }
    return arr;
}
reverse(a);
console.log(`Reversed Array of [${a}] is => [${arr}]`);
console.log(typeof arr)