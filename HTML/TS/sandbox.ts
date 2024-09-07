const Firstname = "Karthi";
console.log(Firstname);
let loc = "Salem"
let pincode = 695582
var date = new Date()
let language: any
language = [2, 4, 1, 5, 7];
// console.log(typeof(language))
console.log(loc)
console.log(pincode)
console.log(date)
console.log(language)
// let age = prompt("Enter your age")
let age = 19
let op = age > 18 ? "You can vote" : isNaN(age) ? "Enter proper input" : "Go home kiddo"
console.log(op)
let factorial = (f: number) => {
    if (f <= 1) {
        return 1
    }
    return f * factorial(f - 1)
}
console.log(factorial(5))
let fibonacci = (f: number) => {
    if (f <= 1) {
        return f
    }
    return fibonacci(f - 1) + fibonacci(f - 2)
}
console.log(fibonacci(10))

let person = {
    data: [
        { "Name": "Mike", "Age": 24, "Occupation": "Web Designer", "Country": "Albania" },
        { "Name": "Jane", "Age": 21, "Occupation": "Software Engineer", "Country": "Spain" },
        { "Name": "Ricky", "Age": 22, "Occupation": "Professional Footballer", "Country": "Australia" }
    ]
}
// console.log(person.data.forEach)
// console.log(person)
person.data.forEach((d) => {
    d.MaritalStatus = "Single"
})
console.log(person)

// let dataFilter = person.data.filter()
const add = (a: number, b: number = 10, c?: number) => {//Here a and b are mandatory , b has a default value but can be 
    //overridden and c is optional 
    console.log(a + b);
}

let pet = {
    "type":"Dog",
    "name":"Bruno",
    "Breed":"Labrador",
}

//using type we can specify for the type used by that variable
type myType = string|number|boolean
const x:myType = true//it coulb be of any of the types mentioned in myTyoe
const y:myType = 199 

class Student{
    private studentId:number
    private firstName:string
    private age:number

    printRecord(){
        console.log(this.studentId,this.firstName,this.age)
    }

    constructor(studentId: number,firstName: string,age: number){
        this.studentId = studentId
        this.firstName  = firstName
        this.age = age
    }
}

let student1 = new Student(101,"Rick",19)
let student2 = new Student(102,"Mike",20)
let student3 = new Student(103,"Odin",18)

interface car{
    brand:string
    seating:number
    color:string
}