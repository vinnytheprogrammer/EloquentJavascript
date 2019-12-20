// Your code here.
 
function arrayToList(arr){
     let list = null;
     for(i=arr.length-1 ; i>=0 ; i-- ){
     	list = {value : arr[i] , rest : list};
     }
     return list;
}

function listToArray(list){
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;     
}

function prepend(element, list){
    list = {value : element , rest : list} ;
    return list;
}

function nth(list, n) {
  	for(i=0; i<n; i++){
        list = list.rest;
        if(list === null){ 
          return undefined;
        }
  	}  	
    return list.value;     
}

function recurNth(list, n) {
   if(n==0 && list!== null){
     return list.value;
   }
   else if(list === null){
     return undefined;
   }
   else 
     return recurNth(list.rest, n-1);
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20
console.log(recurNth(arrayToList([10, 20, 30]), 10));
