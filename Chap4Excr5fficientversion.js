// Your code here.
function deepEqual(object1, object2){
  if(typeof object1 === "object" && object1 !== null){
    let result = true;
    let object1keys = Object.keys(object1);
    let object2keys = Object.keys(object2);
    if(object1keys.length === object2keys.length){
   		for(let i=0 ;i< object1keys.length ; i++ ){
  	     	 if(typeof object1[object1keys[i]] === "object" && object1[object1keys[i]] != null){
  		  	    	return deepEqual(object1[object1keys[i]] , object2[object2keys[i]]);
    		  }
          	else {
        			result = result && (object1[object1keys[i]] === object2[object2keys[i]]);
            	    if(result === false){
                       return false;
                       break;
                    }
                    else{
                      return result;
                    }
        	  }
    	}
    }
    else{
       return false; 
    }
  }
  else{
    return object1===object2 ; 
  } 
}
  
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
