class Shape {
    constructor(){
        this.color = 'red';
    }
    getColor(){
        return this.color;
    }
} 

class Rectangle extends Shape{

}

let rect = new Rectangle();

console.log(rect.getColor());