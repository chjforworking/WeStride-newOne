//Every = ทุกตัวต้องถูก ไม่งั้นขึ้น false
const words = ['dog','cat','log','bag'];

const checker = words.every(words => words.length ===3)
console.log(checker); //true

const checker2 = words.every(words => words[0] === 'a');
console.log(checker2); //false

console.log('///////////////////////////');

//Some = ถูกแค่บางตัวก็ได้ true แล้ว
const words2 = ['green','blue','red','black'];

const checkSome = words2.some(words2 => words2.length ===4);
console.log(checkSome); //true

const checkSome2 = words2.some(words2 => words[0]==='F');
console.log(checkSome2); //false

console.log('///////////////////////////');