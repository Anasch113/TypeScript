"use strict";
// Abstract classes provide a way to define common properties and methods that multiple derived classes can share. This promotes code reuse and helps to establish a common interface for realted classes 
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea = () => {
        return Math.PI * this.radius * this.radius;
    };
    displayArea() {
        console.log(` this is ${this.color} circle with radius ${this.radius}`);
    }
}
const cirlce = new Circle("red", 10);
console.log(cirlce.calculateArea());
cirlce.displayArea();
