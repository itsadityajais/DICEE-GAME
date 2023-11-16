//Check Duplicates
let string="aditya";
function CheckDuplicates(string){
    for(i=0;i<string.length;i++){
        if(string.indexOf(string[i])!==string.lastIndexOf(string[i])) {
            // console.log(string[i]);
            return "Duplicates exists";
        }
    }
    return "Duplicates not exists";
}

let result=CheckDuplicates(string);
console.log(result);