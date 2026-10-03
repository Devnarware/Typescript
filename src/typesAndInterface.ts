// --------------  TYPES -----------------
type Book = {
    title: string,
    author: string
}

// type in ts -> it is used to create custom type which we can use in our code to define the data type

const AtomicHabits: Book = {
    title: "Atomic Habits",
    author: "James Clear"
}

// example of type alias, we can create multiple book from just a single type

// we can use them in functions

function getBookTitle(book: Book): string{
    return book.title as string ;
}


type ID = string | number
// example of unioin type

const userId: ID = 1234
const userId2: ID = "asdf" 
// we can assign both string and number to the variable of type ID

type User = {
    name: String,
    readonly id: ID // we can use a type in antoher type as well
    // it is readonly means we cannt change the value once it is assigned, we can only read it
}

const user: User = {
    name: "Dev",
    id: "asd123"
}
console.log(user.name, " ", user.id);

user.name = "Devendra" // we can change the name of the user
// user.id = "newId" ->  we cant change the id of the user because it is readonly

console.log(user.name, " ", user.id);




//---------------------- INTERFACES --------------------

interface Person {
    name: string,
    age: number
}
// interface -> it is similar to type but it is used to define the structure of an object, not to create a custom type or data type.

interface Student extends Person {
    rollNo: number
}
// we can extend an interface to create a new interface with additional properties

const student1: Student = {
    name: "Devendra",
    age:22,
    rollNo: 123
}

console.log(student1.name, " ", student1.age);
