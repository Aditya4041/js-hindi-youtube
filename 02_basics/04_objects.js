const user = new Object ()
user.id = "123abc"
user.name = "aditya"
user.isloggedin = false
// console.log(user);

const ruser = {
    email : "aditya@mail.com",
    fullname : {
        userfullname : {
            fristname : "aditya",
            lastname : "suryawanshi"
        }
    }

}

// console.log(ruser.fullname.userfullname.fristname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = Object.assign({},obj1,obj2) // used for combine 2 objects
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {

    },
    {

    },
    {

    }
]
// user[1].email
// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('isloggedin'));


const cource = {
    name :"js in hindi",
    price: 900,
    courceinstructor : "aditya"
}
 
const {courceinstructor} = cource
console.log(courceinstructor);
