// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

const fred = new Person({
    name: 'fred',
    age: 23,
    location: 'bedrock',
    gender: 'trans'
})

const wilma = new Person({
    name: 'wilma',
    age: 18,
    location: 'bedrock',
    gender: 'male'
})
wilma.speak();
fred.speak();

class Instructor extends Person {
    constructor(instAttr) {
        super(instAttr);
        this.specialty = instAttr.specialty;
        this.favLanguage = instAttr.favLanguage;
        this.catchPhrase = instAttr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(studentObj, subject) {
        console.log(`${studentObj.name} recieves a perfect score on ${subject}`);
    }
}

const camPope = new Instructor({
    name: 'Cameron',
    age: 31,
    location: 'Utah',
    gender: 'm',
    specialty: 'python',
    favLanguage: 'python',
    catchPhrase: 'told you so'
})

const shelly = new Instructor({
    name: 'Shelly',
    age: 31,
    location: 'Mars',
    gender: 'f',
    specialty: 'js',
    favLanguage: 'Python',
    catchPhrase: 'do not instantiate your instances unless you are instantly confident'
})
camPope.demo('python');



class Student extends Person {
    constructor(stAttr) {
        super(stAttr);
        this.previousBackground = stAttr.previousBackground;
        this.className = stAttr.className;
        this.favSubjects = stAttr.favSubjects;
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}


const ali = new Student({
    name: 'Ali',
    age: 38,
    location: 'Jersey',
    gender: 'Male',
    previousBackground: 'codecademy pro',
    className: 'pt5',
    favSubjects: ['react', 'python', 'c']
})

const jenny = new Student({
    name: 'Jenny',
    age: 24,
    location: 'Matawan',
    gender: 'Female',
    previousBackground: 'none',
    className: 'pt10',
    favSubjects: ['js', 'python']

})

shelly.grade(ali, 'java')
ali.listsSubjects();
jenny.PRAssignment(jenny.favSubjects[0])
ali.sprintChallenge(ali.favSubjects[2]);

class ProjectManager extends Instructor {
    constructor(pMAttr) {
        super(pMAttr);
        this.gradClassName = pMAttr.gradClassName;
        this.favInstructor = pMAttr.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }
    debugsCode(stObj, subject) {
        console.log(`${this.name} debugs ${stObj.name}'s code on ${subject}`);
    }
}

const cookiemonsta89 = new ProjectManager({
    name: 'joseph',
    age: 30,
    location: 'East Coast',
    gender: 'male',
    specialty: 'python',
    favLanguage: 'python',
    catchPhrase: 'error messages are your friend',
    gradClassName: 'ft2',
    favInstructor: 'Cam Pope'
})

const chaya = new ProjectManager({
    name: 'chaya',
    age: 30,
    location: 'West Coast',
    gender: 'female',
    specialty: 'python',
    favLanguage: 'c++',
    catchPhrase: 'error messages are not your friend, until you become enlightened',
    gradClassName: 'ft2',
    favInstructor: 'Cam Pope'
})
cookiemonsta89.standUp('webpt5');
chaya.debugsCode(ali, ali.favSubjects[2]);
 