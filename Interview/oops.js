/**UnderStading OOP in javascript in much details going deeper */
// Eg want to design a school system  software now let usnderstand OOPS from this perspetction

class Person {
    constructor(name, sirName) {
        (this.name = name), (this.sirName = sirName);
    }

    introduceSelf() {
        console.log(`Hi i am  ${this.name}, how you doing`);
    }
}

const rohit = new Person("Rohit", "tiwari"); // rohit in instance of class Person

class Proffersor extends Person {
    constructor(name, sirName, teaches) {
        super(name, sirName);
        this.teaches = teaches;
    }
    grade() {
        console.log("the Grades for the Given sunare ", `${this.teaches}`);
    }
    introduceSelf() {
        console.log(
            `Hi i am Proffesor ${this.name}  i will be teaching you ${this.teaches}`
        );
    }
}

//math sir is instance class Proffesor
// Preffesor inheriteds Parent class Proffesor values
const mathSir = new Proffersor("MathValeSir", ["Math", "Science", "Art"]);

class Student extends Person {
    constructor(name, sirName, year) {
        super(name, sirName);
        this.year = year;
    }
    favrateSubject(subject) {
        if (!subject) throw new Error("Please Provide Subject");
        console.log(
            `My favrate subject are invloing and solving the ${subject}`
        );
    }
    
    introduceSelf() {
        console.log(
            `Hi my name is ${this.name}  and i m studnet of batch ${this.year}`
        );
    }
}

// studenOfSummeris instance of Class Student
// it also intertetaes propetiy from Parent class Person
const studenOfSummer = new Student("summer", "tiwari", 2024);

// introduceSelf function  is ploytmoprphisem fucntion which behaved diffrenctly in diffent enviorment
studenOfSummer.introduceSelf();
mathSir.introduceSelf();

/**ENCAPCULATION*/ 
//===> if introduceSelf is polymorphism 
// for Proffesor class  grade is encapsulation method and  teaches is encapsulated property



//Understanding The OOPS CONCEPT FORM THE PROSPECTIVE OF THE REP SYSTEM DESIGN IN THE BACKEND