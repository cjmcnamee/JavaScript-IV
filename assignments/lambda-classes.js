// CODE here for your Lambda Classes
class Person {
  constructor(info) {
    this.name = info.name;
    this.age = info.age;
    this.location = info.location;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(instructorInfo) {
    super(instructorInfo);
    this.specialty = instructorInfo.specialty;
    this.favLanguage = instructorInfo.favLanguage;
    this.catchPhrase = instructorInfo.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`)
  }
  grade(student, subject) {
    console.log(`${this.name} receives perfect score on ${subject}`)
  }
}

class Student extends Person {
  constructor(studentInfo) {
    super(studentInfo);
  }
}
