class Person {
  static location = "대전"
  
  constructor() {
    this.first = "한"
    this.last = "용준"
    this.type = "전기"
  }
  checkThis(){
    return this;
  }
  whereInfo(){
    return`\"${this.location}"\에 ${this.first}가 살고 있습니다`
  }
}

console.log(Person.location)
console.log(Person.first)

const a = new Person()
console.log(a)
console.dir(Person)
// Person.fullName = "John Smith"

// let actor = new Person("Brendan","Fraser")
// console.log(actor)

// actor.first = "Mike"

// console.log(actor.fullName)
// actor.fullName = "Timothee Chalamet"
// actor.fullName = "Han Yongjun"

// console.log(actor.first)
// console.log(actor.last)
// console.log(actor.id)
// console.log(actor.fullName)

