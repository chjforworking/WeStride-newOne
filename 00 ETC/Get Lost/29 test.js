let $score = {
  David: 80,
  Vinoth: 77,
  Divya: 88,
  Ishitha: 95,
  Thomas: 68,
};

let sumScore = 0;
let numOfStudents = 0;

for (let student in $score) {
  let score = $score[student];
  let grade;

  if (score >= 90) {
    grade = "Grade A";
  } else if (score >= 80) {
    grade = "Grade B";
  } else if (score >= 70) {
    grade = "Grade C";
  } else if (score >= 60) {
    grade = "Grade D";
  } else {
    grade = "Grade F";
  }

  console.log(`Score of ${student} is ${score} [${grade}]`);
  sumScore += score;
  numOfStudents++;
}

let avg = sumScore / numOfStudents;
console.log(`Average is ${avg}`);
