class Group {
  // Your code here.
  constructor(){
  	this.elements = [];
  }
  
  add(x){
    if(!this.elements.includes(x)){this.elements.push(x);}
  }
  
  delete(x){
    if(this.elements.includes(x)){
      this.elements.splice( this.elements.indexOf(x), 1 );
    }
  }
  
  has(x){
    return this.elements.includes(x);
  }
  
  static from(iterableObject){
    let grp = new Group();
    for(let i of iterableObject){
      grp.add(i);
    }
    return grp;
  }
  
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
