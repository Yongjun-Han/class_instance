export default class Student {
  constructor(name,birth,num,course,location,contact,email,lecture,start,end,idNum) {
    this.name = name
    this.birth = birth
    this.ncs = {
      num : num,
      course : course
    }
    this.location = location
    this.contact = contact
    this.email = email
    this.lecture = lecture
    this.start = start
    this.end = end
    this.idNum = idNum
  }
  // get name() {
  //   return this._name
  // }
  set name(value) {
    console.log("--변경 시작--")
    // console.log(value)
    if(typeof value === "string") {
      this._name = value
    }
    else {
      console.log("데이터 타입이 string이 아닌관계로 강제로 변환하였습니다.")
      this._name = String(value)
    }
  }

}

const han  = new Student(12345,19960923,1,"정보기술개발","305호","010-9822-7533","이메일","강의",220719,"2023-01-05","305-1")

console.log("단순객체조회")
console.log(han)
console.log("인스턴스조회")
console.dir(han)
console.log("setter로 정제된 데이터 ")
console.log(typeof han.name)
console.log(typeof han._name)
console.log(han.name === han._name)
console.log(han)

// let lee  = new Student(123,19960923,1,"정보기술개발","305호","010-9822-7533","이메일","강의",220719,"2023-01-05","305-1")
// // console.log(me)
// // han.name = "이상호"

// console.log(lee)

