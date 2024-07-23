
// To create and read Promise
//let promise = new Promise((resolve , reject)=>{     ///3 states pending , fulfilled , rejected                                    
//     console.log("I am a promise")
//    return reject("Error")
// })

// let result = promise.then((res)=>{
//     console.log("Promise is fulfilled " + res)
// }).catch((res)=>{
// console.log("Promise is Rejected " + res)
// })



// const getData = (getDataid)=>{
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("Data " + getDataid)
//             resolve("Success")
//         },2000)
//     })
// }

// let promise = getData(2);
// promise.then((res)=>{
// console.log("Promise is resolved : " + res)
// })




// const getDataFromApi = (dataid) => {
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             console.log('data ' +  dataid);
//            resolve("Success")
//         }, 4000)
//     })

// }


// By using callback
// console.log("Fetching data 1")
// getDataFromApi(1, (data) => {
//     console.log("Data 1 " + data)
//     console.log("Fetching data 2")
//     getDataFromApi(2, (data2) => {
//         console.log("data 2 " + data2)
//         console.log("Fetching data 3")
//     })
//     getDataFromApi(3, (data3) => {
//         console.log("data 3 " + data3)
//     })
// })

//By using promises

// getDataFromApi(1).then((res)=>{
//     console.log("Fetching data 2")
//    getDataFromApi(2).then((res)=>{
//     console.log("Fetching data 3")
//     getDataFromApi(3).then((res)=>{
//         console.log(res)
//        })
//    })

// }).catch((res)=>{
//     console.log(res)
// })


//By using async/await

// async function abc(){
//     console.log("Fetching data 1")
//     await getDataFromApi(1)
//     console.log("Fetching data 2")
//     await getDataFromApi(2)
//     console.log("Fetching data 3")
//     await getDataFromApi(3)
// }

// abc()

// function Creature(lifespan){
//     this.lifespan=lifespan;
// }

// Person.prototype.Breathing=function(){
//     console.log("Breathing....")
// }

// function Person(id , name , email){
// this.id = id,
// this.name= name,
// this.email=email

// }

// Person.prototype.fullname =  function(){
//     console.log(name + '' + email)
// }

// Person.prototype.__proto__ = Object.create(Creature.prototype)

// let person2 = new Person(1 , "Bilal" , "bilal@test.com")
// let person1 = new Person(2 , "Talha" , "talha@test.com")

// console.log(person1)

// function sayHello(name){
//     console.log("Hello " + name)
// }

// function sayBye(name){
//     console.log("Bye " + name)
// }

// function abc(name , callback){
//  callback(name)

// }

// abc("Talha" , sayHello)
// abc("Bilal" , sayBye)

// document.getElementById("GrandParent").addEventListener("click" , (event)=>{
//    if(event.target.id ==="GrandParent"){
//     console.log("GrandParent Clicked")
//    }
//    else if(event.target.id ==="Parent"){
//     console.log("Parent Clicked")
//    }
//    else if(event.target.id ==="Child"){
//     console.log("Child Clicked")
//    }
// }, false)

//Promise Chaining
// const getData = () => {
//   return fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())

// }


// function getData1() {
//   return fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())

// }
// getData().then((data) => {
//   console.log(data)
//   getData1().then((data) => {
//     console.log(data)
//   })
// });

//async/await chaining scenario
// async function getData () {
//   let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//    return data.json()
// }
// async function getData1 () {
//   let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//  return data.json()

// }

//  const CallFunction =async ()=>{
//  let data= await getData()
//  console.log(data)
//  let data2= await getData1()
//  console.log(data2)
//  }

//  CallFunction()

let arr = [
  {
  id:1,
  name:"Talha",
  email : "talha@test.com"
  },
  {
    id:2,
    name:"Fareed",
    email : "talha@test.com"
    },
    {
      id:3,
      name:"Sarim",
      email : "talha@test.com"
    },
]

let arr2 = arr.map((item)=>{
  if(item.id==2){
   const {name , ...rest} = item
   return rest
  }
  else{
    return item
  }
})

console.log(arr2)