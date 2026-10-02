
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


