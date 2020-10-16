class person {
    firstName = "";
    lastName = ""; 
    age = Number("");
    jobTitle = ""; 
    

    constructor(firstName: string, lastName: string, age: number, jobTitle: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age 
        this.jobTitle = jobTitle
    }
    name(){
        return `my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old and i am a ${this.jobTitle}`
    }
    servus(){
        return `Hi there ${this.name()}`;

    }
} 


var fullName = new person("Lucas","Merold", 23, "Bachelor")

document.write(fullName.servus())
console.log (fullName.servus())


class information extends person {
    jobLocation;
    salary; 
    constructor(firstName: string, lastName: string, age: number, jobTitle: string, jobLocation: string, salary: number){
    super(firstName, lastName, age, jobTitle)
    this.jobLocation = jobLocation;
    this.salary = salary;
}
    fullInfo(){
        return `${super.servus()}. I work in ${this.jobLocation} and earn a shitton of ${this.salary} dollares.`
    }

}

var addition = new information("Pablo","Escobar",69, "in exporting-business", "Medellin", 30000000000)
document.write ("<br>")
document.write (addition.fullInfo())