class First {

  first : string

  constructor(first: string){
    this.first = first
  }
}

const firstCall = new First("생성자함수, class의 기본적인 형태")
console.log(firstCall.first)
console.log(firstCall instanceof First)

class Second {
  static staticObject = "정적방식의 클래스 주요기능 static 키워드"
}

console.log(Second.staticObject)
console.log(typeof(Second.staticObject))

class Third {
  test = "test"
}
console.log(Third.test)