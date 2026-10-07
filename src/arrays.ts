
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

console.log(array);



