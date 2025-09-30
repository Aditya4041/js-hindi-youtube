const user = {
    username : "aditya",
    price : 999 ,

    welcomemessage: function(){
        // console.log(`${this.username} ,welcome to website`);
        // console.log(this);
        
    }  
}
// user.welcomemessage()
// user.username="adi"
// user.welcomemessage()
// console.log(this);

// function one ()
// {
//     let username="aditya"
//     console.log(this.username);
    
// }
// one()

// const chai = function()
// {
//      let username="aditya"
//     console.log(this.username);
// }
// ++++++++++++++ Arrow function (()=>{})+++++++++++++++++++++++
const chai = () =>
{
     let username="aditya"
    console.log(this.username); 
}

// chai()

// const addtwo = (num1,num2) =>{
//     return num1+num2
// } explicit return


// const addtwo = (num1,num2) => num1+num2
// const addtwo = (num1,num2) => (num1+num2) // implicit return
const addtwo = (num1,num2) => ({username : "aditya"})


console.log(addtwo(2,5));
