// Your code here.
function range(start,end,step=1){
  let rangenumbers = [];
  if(step>=0)
  	for (i=start;i<=end; i+=step ){
    	rangenumbers.push(i);
  	}
  else
  	for (i=start;i>=end; i+=step ){
    	rangenumbers.push(i);
  	}  
  return rangenumbers;
}

function sum(rangeofnumbers){
  let sum = 0;
  for (i of rangeofnumbers){
    sum += i; 
  }
  return sum;    
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
