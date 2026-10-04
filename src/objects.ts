

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

const printuser = (user: Partial <user>) => {
    console.log(user);
}

printuser({})

// issue with partial is that it let you pass an empty object to the function which can create an issue, so we have to be careful


