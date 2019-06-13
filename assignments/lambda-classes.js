// CODE here for your Lambda Classes
class Person {    // Parent Class
  constructor(info) {
    this.name = info.name;
    this.age = info.age;
    this.location = info.location;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {    // Child Class
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

class Student extends Person {   // Child Class
  constructor(studentInfo) {
    super(studentInfo);
    this.previousBackground = studentInfo.previousBackground;
    this.className = studentInfo.className;
    this.favSubjects = studentInfo.favSubjects;
  }
  listsSubjects() {
    console.log(this.favoriteSubjects);
  }
  PRAssignment(subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`)
  }
  sprintChallenge(subject) {
    console.log(`${student.name} has begun spring challenge on ${subject}`)
  }
}
