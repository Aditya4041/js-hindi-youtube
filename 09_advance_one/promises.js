// const  promiseone = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('asyne task is compelete');
//         resolve()
//     }, 1000);
// })
// promiseone.then(function(){
//     console.log("promis consumed");
    
// })




// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('asyne task 2');
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("promis 2 consumed");
    
// })



// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({username:"aditya", email:"aditya@gmail.com"})
//     }, 1000);
// })
// promiseThree.then(function(user){
//     console.log(user);
    
// })


// const promisefour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true 
//         if (!error) {
//             resolve({username:"aditya", password:"123" })
//         } else{
//             reject('ERROR:something went wrong')
//         }
//     }, 1000);
// })
// promisefour.then((user)=>{
//     console.log(user);
//     return user.username
    
// }).then((username)=>{
//     console.log(username);
    
// }).catch(function(error){
//     console.log(error);
    
// }).finally(()=> console.log("the promise is either resolve or rejected")
// )


const promisefive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true 
        if (!error) {
            resolve({username:"aditya js", password:"123" })
        } else{
            reject('ERROR:js went wrong')
        }
    }, 1000);
});


async function consume(){
    try {
        const response = await promisefive
    console.log(response);
    
    } catch (error) {
       console.log(error);
        
    }

}
consume()


