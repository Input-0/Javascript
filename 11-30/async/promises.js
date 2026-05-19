// function one() {
//     return new Promise((resolve,reject) =>{
//             setTimeout(()=>{
//             console.log("first");
//             resolve()
            

//         },5000)
//         })

// }
// function two() {
//     return new Promise((resolve,reject) =>{
//             setTimeout(()=>{
//             console.log("second");
//             resolve()
            

//         },4000)
//         })

// }
// function three() {
//     return new Promise((resolve,reject) =>{
//             setTimeout(()=>{
//             console.log("third");
            
//             resolve()

//         },2000)
//         })

// }
// function four() {
//     return new Promise((resolve,reject) =>{
//             setTimeout(()=>{
//             console.log("four");
            

//         },1000)
//         })

// }
// one().then(() =>two().then(() => three().then(() => four())))



// Promise.all()
// Promise.race()
// Promise.allSettled()
// Promise.any()



    // fetch("https:typicode.com/posts")
    // .then((data) => data.json())
    // .then((data) => console.log(data))
    // .catch((err) => console.log(err))

    // async function one (){
    //   try {
    //     let response = await  fetch("https:typicode.com/posts")
    //     let data = await response.json()
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
        
        
    //   }
      

    // }
    // one()
    // console.log("first");
    
