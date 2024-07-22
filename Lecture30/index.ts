// Abstract classes provide a way to define common properties and methods that multiple derived classes can share. This promotes code reuse and helps to establish a common interface for realted classes 



abstract class Shape {

    constructor(protected color: string) { }

   
    abstract calculateArea: () => number
    abstract displayArea(): void

}

class Circle extends Shape {

    constructor(protected color: string, protected radius: number) {
        super(color)
    }
    public calculateArea = (): number => {
        return Math.PI * this.radius * this.radius
    }

     displayArea(): void {
        console.log(` this is ${this.color} circle with radius ${this.radius}`)
    }

   


}

const cirlce = new Circle( "red", 10)


console.log(cirlce.calculateArea())
cirlce.displayArea()