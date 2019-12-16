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
  	}
  	console.log(list);
  	return list.value;
     
}

/*function recurNth(list, n) {
   while (n>0) {
     recurNth(list.rest, n-2);
     list=list.rest;
   }
   list.rest = null;
   return list.value;
}*/

 
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 3));
// → 20
//console.log(recurNth(arrayToList([10, 20, 30]), 1));
