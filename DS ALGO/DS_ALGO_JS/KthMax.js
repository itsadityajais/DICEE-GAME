function bubblesort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    } 
    console.log(arr);
}
let arr=[2,1,3,5,4,0,6,8,9,7];
bubblesort(arr);
let k=2;
console.log(`${k}max=`+ arr[arr.length-k]);
console.log(`${k}min=`+arr[k-1]);