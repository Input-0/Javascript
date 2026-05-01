// let obj = {
//     name:"one",
//     age:12,
//     run:function(){
//        let two = () => {
//            console.log(this.name);
           
//         }
//          two()

//     }
// }

// obj.run()


// function Custom(name,age){
//    this.name = name
//    this.age = age
   
// }

// Custom.prototype.run = function(){
//     console.log(this.name,"can run");
    

//    }





// let one = new Custom("tinashe",22)
// let two = new Custom("kawal",24)

// // console.log(one);
// // console.log(two);

// one.run()


// function One(){
//     this.name = "tinashe"
// }


// let ob = new One()

// console.log(ob);


function One(a){
    this.name = a
    
}

One.prototype.age = 21

let ob = new One("four")
let ob2 = new One("five")


// console.log(ob);
// console.log(ob2);
console.log(ob.age);






  

  
