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
    console.log(`Today we are learning about ${subject}`);
  }
  grade(subject) {
    console.log(`${this.name} receives perfect score on ${subject}`);
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
    console.log(`${student.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${student.name} has begun spring challenge on ${subject}`);
  }
}


class ProjectManagers extends Instructor {   // Grandchild Class
  constructor(pmInfo) {
    super(pmInfo);
    this.gradClassName = pmInfo.gradClassName;
    this.favInstructor = pmInfo.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}`);
  }
  debugsCode(subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}'`);
  }
}

const steve = new Instructor({
  name: 'Steve',
  location: 'The Mine',
  age: '???',
  favLanguage: 'Creeper',
  specialty: 'Mining',
  catchPhrase: `"Play Minecraft; Mine Diamonds"`
});

const miku = new Instructor({
  name: 'Hatsune Miku',
  location: 'Japan',
  age: '16',
  favLanguage: 'Japanese',
  specialty: 'Autotune',
  catchPhrase: `"When you order Domino's, Have Some Fun With Miku!"`
});

const naruto = new Student ({
  name: 'Uzumaki Naruto',
  location: 'Konoha Village',
  age: 17,
  favLanguage: 'Japanese',
  specialty: 'Shadow Clone Jutsu',
  catchPhrase: '"Im gonna be hokage!!!"'
})

console.log(steve.name);  // Instructor Steve console.logs
console.log(steve.location);
console.log(steve.age);
console.log(steve.favLanguage);
console.log(steve.specialty);
console.log(steve.catchPhrase);
steve.speak();
steve.demo('Farming');
steve.grade('Mining');

console.log(miku.name);  // Instructor Hatsune Miku console.logs
console.log(miku.location);
console.log(miku.age);
console.log(miku.favLanguage);
console.log(miku.specialty);
console.log(miku.catchPhrase);
miku.speak();
miku.demo('Vocaloid');
miku.grade('Vocaloid');
