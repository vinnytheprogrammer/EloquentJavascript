function every (array, test){
   let current=true;
   for(let i of array){
      current = current && test(i);
   }
   return current;
}
