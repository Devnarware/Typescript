

type user = {
    name: string,
    age: number,
    id: number
}

const user1: Partial <user> = {
    name: "Devendra",
    age: 22
}

// console.log(user1);

// partial -> it is a utility type which make all the proerties of the type -> optional. so we can create an object of type without definging all the properties of the type.

// ------------------ PARTIAL UTILITY-----------------
const printuser = (user: Partial <user>) => {
    console.log(user);
}

printuser({})

// issue with partial is that it let you pass an empty object to the function which can create an issue, so we have to be careful


// ------------------   REQUIRED UTILITY-----------------
// opposite of partial, if anything is optional in the type, but if the required is used then we have to pass all the properties of the type.

type student = {
    name: string, 
    rollNo: number,
    marks?: number
}

const student1: Required <student> = {
    name: "Devendra",
    rollNo: 123,
    marks: 90   
}
// if we didnt pass the marks property then TS will give an error


// ------------------ PICK UTILITY-----------------
// we can choose what property of the type we want to use 


type Employee = {
    name: string,
    age: number,
    id: number,
    salary: number
}

function getEmployeeDetails(emp: Pick<Employee, "name" | "id">){
    console.log(emp.name, " ", emp.id );
    // console.log(emp.name, " ", emp.salary );
    // it will give an error because we can only use the properties which we picked
}


// ------------------ OMIT UTILITY-----------------
// it is used to hide the properties which we dont want from function to use


type Majdoor = {
    name: string,
    age: number,
    id: number,
    salary: number
}

function getMajdoorDetails(emp: Omit<Employee, "salary">){
    console.log(emp.name, " ", emp.id );
    // console.log(emp.salary);
    // it will give an error because we can only use the properties which we omitted
}



