// Your code here.
function loop (value, test, update, body) {
   
	for (let i =value; test(i); i = update(i) ){
      body(i);
      
	}
}

loop(3, n => n > 0,  n => {n = n - 1; return n; }, console.log);
// → 3
// → 2
// → 1
// i=update(i) ( Why thsi assignment is required ? Answer ; SCOPE of the i inside update is different from this i ..but please consider the revision
