const students = [
    {id: 21, name: 'Jhankar Mahbub'},
    {id: 31, name: 'Anisul Islam'},
    {id: 41, name: 'The New Boston'},
    {id: 51, name: 'Ten Minute School'}
];

const studentName = students.map(x => x.name);
const fortyPlus = students.filter(x => x.id > 40);
const biggerOne = students.find(x => x.id > 40);
console.log(fortyPlus);
console.log(studentName);
console.log(biggerOne);
console.log(x);
var x;