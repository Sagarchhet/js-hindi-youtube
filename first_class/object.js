// const mysym = Symbol("key1")
// const jsUser = {
//     name: "sagar",
//     age: 19,
//     [mysym]: "mykey1",
//     location: "west bengal",
//     email: "sagar@gmail.com",
//     isLoggedIn: false,
//     lastLoggedIn: ["Monday",  "Sunday"]


// console.log(jsUser);
// console.log(jsUser.email)
// console.log(jsUser["age"])
// Object.freeze(jsUser)
// jsUser.email = "sagarchhet@gmail.com"
// console.log(jsUser["email"]);
// jsUser.greeting = function() {
//     // console.log("hello js user")
// }
// console.log(jsUser.greeting())
// jsUser.greetingTwo = function(){
//     console.log(this.name)
// }
// console.log(jsUser.greetingTwo());

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sagar"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
// const regularUser = {
//     email: "sagar@gmail.com",
//     fullname:{
//       username:{
//         firstname: "Sagar",
//         lastname: "chhetri",
//       }
//     }
// }
// console.log(regularUser)
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.username.lastname);

// const obj1 = { 1: "a", 2: "b"}
// const obj2 = { 3: "a", 4: "b"}

// // const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2 }
// console.log(obj3);
// const obj1 = {1: "a", 2: "c"}
// const obj2 = {2: "b", 3: "d"}
// // const obj3 = {...obj1, ...obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)
// const users = [
//     {
//         id : 1,
//         email: "sagarchhetri@gmail.com"
//     },
//      {
//     id : 2,
//     email: "hitest@gmail.com"
//      }]
//      users[1].id
//      console.log(users)
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('sagar'))