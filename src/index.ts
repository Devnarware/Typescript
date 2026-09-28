function greet(name: string): string{
    return `Hello ${name}, Welcome to the typescript`
}

function fibo(n: number): number{
   if(n < 2){
    return n ;
   }
    return fibo(n-1) + fibo(n-2) ;
}

console.log(fibo(7));
