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
  get nameEdit() {
    return this.name
  }
  set nameEdit(value) {
    console.log("--변경 시작--")
    // console.log(value)
    if(typeof value === "string") {
      this.name = value
    }
    else {
      console.log("이름은 문자여야 합니다.")
    }
  }
  
}

let han  = new Student("한용준",19960923,1,"정보기술개발","305호","010-9822-7533","이메일","강의",220719,"2023-01-05","305-1")

let lee  = new Student(123,19960923,1,"정보기술개발","305호","010-9822-7533","이메일","강의",220719,"2023-01-05","305-1")
// console.log(me)
han.nameEdit = "이상호"

console.log(lee)

