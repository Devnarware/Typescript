// if there is no paramerter and return type

// 1. noramal funtion

function printUser(): void {
    console.log("greetings");
}

// 2. arrow function

const anotherUser = (): void =>{
    console.log("greetings from arrow funtion");
}

// void -> making sure you are not returning anything

// we are accepting some parameter but not returning anything

function add(a: number, b: number): void {
    console.log(a + b);
}


// accepting parameters and returning something

const diff = (a: number, b: number): number => {
    return a-b;
}

// using type in function

type user = {
    name: string,
    age: number
}

function printuser(user: user): string{
    return `Hello, this is ${user.name} and he is ${user.age}`
}
