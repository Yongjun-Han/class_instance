class studentBasicInfo {
  constructor(indexForNumbering, studentName, phoneNum, emailAddress){
    this.indexForNumbering = indexForNumbering
    this.studentName = studentName
    this.phoneNum = phoneNum
    this.emailAddress = emailAddress
  }
  set indexForNumbering(value) {
    if(typeof value === "number"){
      this._indexForNumbering = value
    }
    else {
      throw new Error("Invalud argument type")
    }
  }
}

class ClassRoom extends studentBasicInfo {
  constructor(){
    console.log(arguments)
    super(...arguments)
    this.hosil = arguments[4]
  }
}
class TenFloor extends studentBasicInfo{
  constructor(work,dataWork,change){
    super(...arguments)
    this.work = work
    this.dataWork = dataWork
    this.change = change
  }
}

const test = new studentBasicInfo(1,"kong","123-456-7890","eee@ddd,com")
console.log(test)

const classRoomTest = new ClassRoom(2,"uk","232-232-323","343@efad.com","hello")
console.log(classRoomTest)

const tenFloorTest = new TenFloor(3,"444-5454-433","wow","This","is","awesome")
console.log(tenFloorTest)