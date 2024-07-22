// Static method to define the properties and functions in class




class MathOperations {
    public static PI: number = Math.PI;

    public static multiply(a:number, b:number):number{
        return a + b
    }

    public static division(a:number, b:number):number{
        return a/b
    }

    public static modules (a:number, b:number):number{
        return a % b
    }
}

console.log(MathOperations.PI)
console.log(MathOperations.multiply(2, 2)) // output = 4
console.log(MathOperations.division(10, 5)) // output = 2
console.log(MathOperations.modules(18, 4)) // output =  2