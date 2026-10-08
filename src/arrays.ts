
// there are two ways to define arrays in TS

// 1. direct with the type of array

const arr: string[] = ["Devendra", "Kumar", "Narware"];

// 2. using the Array<> keyword

const num: Array<number> = [1, 2, 3, 4, 5];

// array can be any type, even custom types - they are basically the array of objects

type user = {
    name: string,
    age: number
}

const users: user[] = [
    {name: "Devendra", age: 22},
    {name: "Dev", age: 23},
    {name: "Debu", age: 24}
]


// 2d arrays

const table: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9] 
]

// array with union type

const array: (string | number)[] = []

array[0] = "Devendra";
array[1] = 22;

type id = {
    name: string,
    userId: number
}

const userId: id = {
    name: "dev",
    userId: 1234
}

const tp: any [] = []

tp[0] = "cwgame"
tp[1] = 2026
tp[2] = false
tp[4] = userId // we are not assiging the value of 3rd item of the array

// console.log(tp);


// tuple -> it is a special type of array which can have different types of values in it, but the order of the value will be fixed for all the elements of the array.

const tuple: [string, number, boolean] = ["Devendra", 22, true]

tuple[1] = 23 // we can change the value of the tuple but we have to make sure that the type of the value is same as the type of the tuple

console.log(tuple);
