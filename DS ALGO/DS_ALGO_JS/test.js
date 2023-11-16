let a=[1,2,3,4,5];
let b=[6,7,8,9,10];
let c=[];
for (let i=0;i<a.length;i++){
    c.push(a[i]);
}
for(let j=0;j<b.length;j++){
    c.push(b[j])
}
console.log(c);
let result=bubblesort(c);
console.log(result);


function bubblesort(c){
    for(let i=0;i<c.length-1;i++){
        for(let j=0;j<c.length-1-i;j++){
            if(c[j]>c[j+1]){
                let temp=c[j];
                c[j]=c[j+1];
                c[j+1]=temp;
            }
        }
    } 
    console.log(c);
}