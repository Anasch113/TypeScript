// Usage of generics and practice with examples



// function add(a: number, b: number): number
// function add(a: string, b: string): string
// function add(a: any, b: any): any {
//     return a + b
// }


// Converting above overloading functions into single function using generics


function add<T, U, V>(a: T, b: U , c:boolean) {

    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)

}

const results = add<number, string, boolean>(1, "hello", true)

const resultTwo = add<string, string, boolean>("anas", "rafiq", false)