// const students = {
//   totalNumber: 200,
//   passed: 160,
//   failed: 20,
//   ATKT: {
//     chemistry: 1,
//     physics: 2,
//     botany: 3,
//     zoology: 0,
//     maths: 14
//   }
// };

// const {failed} = students;
// console.log(failed);
// const {maths} = students.ATKT;
// console.log(maths);
// const { zoology = 10 } = students.ATKT  // 10 will only show if the value is undefined
// console.log(zoology);

// students.ATKT.NewSubject = 11;
// const { NewSubject: value = 10 } = students.ATKT;
// // console.log(students.ATKT)
// console.log(value)


// ES 6 Destructuring the Arrays

const place = ['Kanour', 'Barhi', 'Katni', '483770'];

// const [, tehshil, district, PIN] = place; // leaving the 0th index sting
// const [, tehshil, , PIN] = place; // leaving the name of sting at index of 2
const [,,, tehshil] = place; //naming the last sting only; 


// console.log('My area pin is', PIN);
// console.log('My Village name is', place[0]);
// console.log(district, 'is my district');
console.log(tehshil);
