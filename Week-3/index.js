function EmployeeInfo(name,Salary)
{
console.log("Welcome " + name + " your monthly Salary is "+ Salary)
}
console.log ("This is my first progamme")
var EmpName="Ishan"
var EmpSalary= 50000

EmployeeInfo(EmpName,EmpSalary)

const EmpSkills= (skills)=> {
 console.log("Expert in "+ skills)
}
EmpSkills("java")

const student= require('./StudentInfo')
const person = require('./person')

console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)

console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )

person1= new person("Jim","USA","myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")