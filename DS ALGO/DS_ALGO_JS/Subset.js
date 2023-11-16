let a=[6,4,1,3,7];
let b=[1,3,4];
function check(a,b){
  for(i=0;i<a.length;i++){
    if(a[i]==b){
      return true;
    }
  }
  return false;
}

function subset(a,b){
  for(let i=0;i<b.length;i++){
    let result=check(a,b[i])
    if(result==false){
      console.log("NOT A SUBSET")
      return
    }
  }
  console.log("SUBSET")
  return 
}
subset(a,b);