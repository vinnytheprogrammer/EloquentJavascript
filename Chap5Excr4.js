function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  console.log(scripts);
  let counts = [];
  for (let i of scripts){
    counts.push(i.count);
  }
  console.log(counts.indexOf(36));
  return scripts[counts.indexOf(counts.reduce((a,b)=>Math.max(a,b)))].name;
}
 

//console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير , मेरा ज़िन्दगी मे रोशिनी ज़रूर आएगी !,Roshini will definitely come in my life!, میری زندگی میں روشینی ضرور آئے گی!Рошини миний амьдралд гарцаагүй ирэх болно!분명히 내 인생에 빛이 올 것이다!"));
// → rtl
