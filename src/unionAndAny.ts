

let direction: 'N' | 'S' | 'W' | 'E' = 'N' // this type of data type is called union type

// direction = 'south-east' -> it is UNION, it prevent assinging any calue to variable other than the defined values in the union type


let a: any // any means any data can be assigned  to a variable if the data type is any 

a = 10
// a.toUpperCase()
// try to avoid any as mush as possible, coz using any means using javascript

//  UNKNOWN 

let b: unknown // unknown is a special data type which is similar to any, but we cant directly use the methods and the function of a specific data type, fiirst we have to check if the unknown data type variable is worthy of using that method or function or not 


b = "hello" // we assing an unknown data type variable to the number type
// b.toUpperCase() -> we cant directly use the method

if(typeof b === 'string'){
    b.toUpperCase // here we forst check it only then we could use it
}