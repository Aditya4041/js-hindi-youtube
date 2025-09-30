function myname(){
     console.log("a");
 console.log("d");
 console.log("i");
 console.log("t");
 console.log("y");
 console.log("a");
}
// myname()
// function addtwonumbers(number1,number2){
//     console.log(number1+number2);
// }
addtwonumbers(2,3) // call the function using function name 
function addtwonumbers(number1,number2){
    // let add = number1+number2
    // return add
    return number1+number2
}
const add = addtwonumbers(3,5)
// console.log("result:",add);


// function userlogin(username){
//     return `${username} just logged in`
// }

// console.log(userlogin("aditya"));


// function userlogin(username){
//     if(username===undefined){
//         console.log("plz enter user name ");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(userlogin());

function userlogin(username = "adi"){
    if(!username){
        console.log("plz enter user name ");
        return
    }
    return `${username} just logged in`
}

// console.log(userlogin("aditya"));

function calculateprice(...num1)
{
    return num1
}
console.log(calculateprice(200,300,400));



function calculateprice1(val1, val2 ,...num1)
{
    return num1
}
console.log(calculateprice1(200,300,400,300,500));


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));