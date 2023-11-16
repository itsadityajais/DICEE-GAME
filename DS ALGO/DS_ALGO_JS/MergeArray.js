let a=[2,3,5,8,7];
let b=[1,4,6,9];
function mergeSortdArray(a,b){
	for(let i=0;i<b.length;i++){
		a.push(b[i]);
	}
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
            if(a[i]>a[j]){
            temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
}
 return a;
}
mergeSortdArray(a,b);
console.log(a);
console.log(typeof a)