class Person {
   name = "";
   age = "";
   titel = ""; 

constructor(name, age, titel) {
       this.name = name;
       this.age = age;
       this.titel = titel;
   }

   intro() { 

       return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.titel}.`;

   }

}

let dis = new Person("Ivan", "33", "BA");


console.log(dis.intro());


class Info extends Person {
   salary;
   location;
   
   constructor(name, age, titel, location, salary) {
       super(name, age, titel,);
        this.salary = salary;
        this.location = location;
   }

   intro() {
       return `${super.intro()} and I get ${this.salary} every month, and I work in ${this.location}`;
   }

}

let dis1 = new Info("Ivan", "33", "BA", "3.000,-", "Vienna");


console.log(dis1.intro());