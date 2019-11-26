// Your code here.
function reverseArray(arr){
  let reverarr  = [] ;
  for(i=arr.length-1; i>=0 ; i--){
  	reverarr.push(arr[i]); 
  }
  return reverarr;
}

function reverseArrayInPlace(arr) {
     for(i=0; i<((arr.length)/2);i++){
        let temp = arr[i];
        arr[i]=arr[(arr.length)-i-1];
        arr[arr.length-i-1] = temp;
     }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
