const students = {
  totalNumber: 200,
  passed: 160,
  failed: 20,
  ATKT: {
    chemistry: 1,
    physics: 2,
    botany: 3,
    zoology: 0,
    maths: 14
  }
};

// const {failed} = students;
// console.log(failed);
// const {maths} = students.ATKT;
// console.log(maths);
// const { zoology = 10 } = students.ATKT  // 10 will only show if the value is undefined
// console.log(zoology);

// students.ATKT.NewSubject = 11;
const { NewSubject: value = 10 } = students.ATKT;
// console.log(students.ATKT)
console.log(value)
