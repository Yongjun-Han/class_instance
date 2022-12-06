class Person {
  constructor(first,last) {
    this.first = first
    this.last = last
    this.id = 0
  }
  get fullName(){
    this.id += 1
    return `${this.first} ${this.last}`
  }
  set fullName(value){
    console.log("change FullName")
    console.log(value)
    const [firstName, lastName] =  value.split(' ')
    this.first = firstName
    this.last = lastName
  }
}
// Person.fullName = "John Smith"

let actor = new Person("Brendan","Fraser")
console.log(actor)

actor.first = "Mike"

console.log(actor.fullName)
actor.fullName = "Timothee Chalamet"
actor.fullName = "Han Yongjun"

console.log(actor.first)
console.log(actor.last)
console.log(actor.id)
console.log(actor.fullName)

