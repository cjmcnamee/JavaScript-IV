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
    super(instructor);
    this.specialty = instructor.specialty;
    this.favLanguage = instructor.favLanguage;
    this.catchPhrase = instructor.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about {subject}`)
  }
  grade() {
    console.log(`{student} receives perfect score on {subject}`)
  }
}
