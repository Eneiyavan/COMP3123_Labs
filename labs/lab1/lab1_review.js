let variableLocal = 200
var variableGlobal = 100
variableGlobal = "Hello"
console.log(variableGlobal)

// Prototype: one-time use object created from the
// base prototype called Object
const newObject = {
  prop1: "Eneiyavan",
  prop2: "comp3123",
  method1: function (param1) {
    console.log(param1)
  }
}

console.log(newObject)
console.log(newObject.prop1)
console.log(newObject.prop2)
newObject.method1("pizza")

// Prototype: constructor
function Student(student_name, course, lunch){
  this.prop1 = student_name
  this.prop2 = course
  this.prop3 = lunch

  this.method1 = function (param1) {
    console.log(param1)
  }
}

const student_morning = new Student("Eneiyavan", "comp3123", "burger")
console.log(student_morning)
console.log(student_morning.prop1)
console.log(student_morning.prop2)
student_morning.method1(student_morning.prop3)

// Optional Homework: Instantiate another Student object and print its values

// Prototypes: Add a method AFTER/IN ANOTHER FILE
// to give more capabilities to the prototype
Student.prototype.prop4 = "hard-coded value"
Student.prototype.method2 = function (param1){
  return param1
}

console.log(student_morning.prop4)
console.log(student_morning.method2("chow mein"))

// Class
class Prof {
  constructor(prof_name_p){
    this.prof_name = prof_name_p
  }

  method1(param1){
    return param1
  }
}

const morning_prof = new Prof("Laily")
console.log(morning_prof)

// Optional Homework: Call morning_prof's method
// and directly next print its property