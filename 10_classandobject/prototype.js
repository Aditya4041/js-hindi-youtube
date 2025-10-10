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

heropower.aditya()