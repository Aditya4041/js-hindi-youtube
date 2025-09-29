// singleton


// object literals

const mysym = Symbol("key1")
const jsuser = {
    name: "aditya",
    age: 20,
    location: "kolhapur", 
    email: "adittya123@gmail.com",
    [mysym]: "mykey1",
    lastLoginDays :["monday","saturday"],
    isloggedin : false 
}
// console.log(jsuser.age);
// console.log(jsuser["age"]);
// console.log(jsuser[mysym]);

// jsuser.age = 25
// Object.freeze(jsuser)// used for lock the edit changes
// jsuser.age = 26
// console.log(jsuser);

jsuser.fun = function(){
    console.log("welcome js users");    
}
jsuser.fun2 = function(){
    console.log(`welcome ${this.name}`);    
}
 console.log(jsuser.fun());
 console.log(jsuser.fun2());

 