// let myname = "aditya     "
// console.log(myname.trueLength);


let myheros =  ["thor","spiderman"]

let heropower = {
    thor: "hammer",
    spiderman:"sling",


    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.aditya = function(){
    console.log(`aditya is present in all objects`);
    
}

// heropower.aditya();
// myheros.aditya()



// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "aditya     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"chinmay".trueLength()
"  yash patil  ".trueLength()