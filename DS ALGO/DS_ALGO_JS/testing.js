var countAndSay = function(n) {
    let str = "";
    for(let i=1; i<=n; i++){
        helper(i)
    }
    function helper(i){
        if(i==1){str = "1";return;}
        let newstr = ""
        for(let j=0; j<str.length; j++){
            let count = 1;
            while(j+1 < str.length && str[j]==str[j+1]){
                    count++;
                    j++;
            }
            newstr += count + str[j]
        }
        str = newstr
    }
    console.log(str)
    return str
   
};

let result= countAndSay(i)
console.log(result)


























// function equal(a,b){
//     for(let i=0;i<=a.length;i++){
//         if(b==a[i]){
//          return true;
//         }
//         else{
//         return false;
//     } 
// }
    
// }
// let result=equal(a=[1,2,3,0],b=0);
// console.log(result);
