function merge(a,b){
    for(let i=n-1;i>=0;i--){
        // console.log(i)
        for(let j=0;j<m;j++){
            // console.log(j)
            
            if(b[i]<a[j]){
             // console.log(`hy`)
                let temp=b[i];
                b[i]=a[j];
                a[j]=temp;
            }
        }
    }
    // console.log(`hello`)
    console.log(a,b);
}
let a=[1,5,7,9];
let b=[2,8,10];
let m=a.length;
let n=b.length;
merge(a,b);







// function medianofsortrdarr(arr1,arr2){
//     const result=arr1.push(arr2);
//     arr1.sort();
//     console.log(arr1);
// }
// medianofsortrdarr(arr1,arr2);