
class Rect {
  constructor(height, width){
    this.height = height
    this.width = width
  }
  get area() {
    return this.calcArea()
  }
  // set area(value){
  //   console.log(value)
  // }
  calcArea(){
    // this.area = this.height * this.width
    return this.height*this.width
  }
}

let square = new Rect(30,40)
// console.log(square)
console.log(square.area)

