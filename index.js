
var readlineSync = require("readline-sync");


console.log("welocome to this quiz game\n");
let score = 0;
const que = [
  {
    question: `who laugh very well in money heist?
  a:denver
  b:sierra
  c:professor`,
    answer: "a"
  },
  {
    question: `who was proffessor brother?
  a:denver
  b:berlin
  c:professor`,
    answer: "b"
  },
  {
    question: `who was very bad character in money heist?
  a:denver
  b:sierra
  c:arturo`,
    answer: "c"
  },
  {
    question: `At the end who wins?
  a:police
  b:professor
  c:public`,
    answer: "b"
  },
  {
    question: `What was the name of professor's wife in money heist character?
  a:venus
  b:lisbon
  c:helsinki`,
    answer: "b"
  },
];

function chek(que, ans) {
  let ua = readlineSync.question(que);
  console.log("\n");
  console.log("you answered " + ua);
  if (ua == ans) {
    console.log("right")
    score = score + 1;
  }
  else {
    console.log("wrong");
  }

  console.log("\n__________________________\n");
}

for (let i = 0; i < que.length; i++) {
  var cq = que[i];
  chek(cq.question, cq.answer);
}
console.log("\n");
console.log("you done\nyou scored " + score)