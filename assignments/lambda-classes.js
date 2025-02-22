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
  grade() {
    return Math.random()*100;
  }
  listsSubjects() {
    console.log(this.favSubjects);
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
  graduate() {
    if(this.grade() >= 70.0){
      console.log(`${this.name} can graduate!`)
    } else {
      console.log(`${this.name} is a failure!`)
    }
  }
}


class ProjectManager extends Instructor {   // Grandchild Class
  constructor(pmInfo) {
    super(pmInfo);
    this.gradClassName = pmInfo.gradClassName;
    this.favInstructor = pmInfo.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student}'s code on ${subject}`);
  }
}

const steve = new Instructor({
  name: 'Minecraft Steve',
  location: 'The Mine',
  age: '???',
  favLanguage: 'Creeper',
  specialty: 'Mining',
  catchPhrase: `"Play Minecraft; Mine Diamonds"`
});

const miku = new Instructor({
  name: 'Hatsune Miku',
  location: 'Japan',
  age: 16,
  favLanguage: 'Japanese',
  specialty: 'Autotune',
  catchPhrase: `"When you order Domino's, Have Some Fun With Miku!"`
});

const naruto = new Student ({
  name: 'Uzumaki Naruto',
  location: 'Konoha Village',
  age: 17,
  previousBackground: 'Ninja',
  className: 'Team 7',
  favSubjects: ['Believing', 'Chakra Control', 'Shadow Clone Jutsu']
})

const connor = new Student ({
  name: 'Connor McNamee',
  location: 'Boston',
  age: 20,
  previousBackground: 'Fry cook',
  className: 'Black Mage',
  favSubjects: ['Art', 'Math', 'HTML']
})

const pikachu = new ProjectManager ({
  name: 'Pikachu',
  location: 'Kanto',
  age: 1,
  favLanguage: 'Pika pika',
  specialty: 'Thunderbolt',
  catchPhrase: `"Pika pika"`,
  gradClassName: 'Kanto School for Liberal Arts (working title)',
  favInstructor: 'Ash Ketchum'
})

const cinnamon = new ProjectManager ({
  name: 'Cinnamon Roll',
  location: 'Japan',
  age: '4.5 billion',
  favLanguage: 'Japanese',
  specialty: 'Being cute',
  catchPhrase: `"o u o"`,
  gradClassName: 'Sanrio University',
  favInstructor: 'Hello Kitty'
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

console.log(naruto.name);  // Student Naruto console.logs
console.log(naruto.location);
console.log(naruto.age);
console.log(naruto.previousBackground);
console.log(naruto.className);
naruto.speak();
naruto.grade();
naruto.listsSubjects();
naruto.PRAssignment('Believeing');
naruto.sprintChallenge('Believing')

console.log(connor.name);  // Student Connor console.logs
console.log(connor.location);
console.log(connor.age);
console.log(connor.previousBackground);
console.log(connor.className);
connor.speak();
connor.graduate();
connor.listsSubjects();
connor.PRAssignment('JavaScript IV');
connor.sprintChallenge('Intro to JavaScript')

console.log(pikachu.name);  // Instructor Pikachu console.logs
console.log(pikachu.location);
console.log(pikachu.age);
console.log(pikachu.favLanguage);
console.log(pikachu.specialty);
console.log(pikachu.catchPhrase);
pikachu.speak();
pikachu.demo('Battling');
pikachu.grade('Battling');
pikachu.standUp('Web21 Channel')
pikachu.debugsCode(naruto.name, 'Believing')

console.log(cinnamon.name);  // Instructor Cinnamon Roll console.logs
console.log(cinnamon.location);
console.log(cinnamon.age);
console.log(cinnamon.favLanguage);
console.log(cinnamon.specialty);
console.log(cinnamon.catchPhrase);
cinnamon.speak();
cinnamon.demo('Eating');
cinnamon.grade('Eating');
cinnamon.standUp('Web21 Channel')
cinnamon.debugsCode(connor.name, 'JavaScript IV')
