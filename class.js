class Shape {
    constructor(){
        this.color = 'red';
    }
    getColor(){
        console.log(this.color);
    }
} 

class Rectangle extends Shape{

}

let rect = new Rectangle();

console.log(rect.getColor());