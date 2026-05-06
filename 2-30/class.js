// class Tinashe{
//     constructor(name,age){
//         this.name = name,
//         this.age = age
//     }

//     static gender= "male"

//     static get setAge(){
//         return this.age
//     }
//    static set setAge(age){
//         this.age = age
//     }


// }


// let ob = new Tinashe("one",21)
// // console.log(ob);
// ob.age = 45
// console.log(ob.age);

// console.log(ob);


// oops 

// encapsulation

// class Person{

//     #name = "tinashe"

//     getAge(){
//         return `${this.#name} is 22`
//     }
    

    
// }


// let ob = new Person

// console.log(ob);




// Abstraction

// class Start{
//     fuelCheck(){

//         if(false){
//             return true 
//         }else{
//             throw new Error("NO FUEL")
//         }
//     }

//     engineCheck(){
//         this.fuelCheck()
//         return true
//     }

//     start(){
//         this.engineCheck()
//         return 'car started'
//     }
// }


// let obj = new Start 


// console.log(obj.start());

// enheritence======


// class Parent{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }

//     run(){
//         console.log("running");
        
//     }
// }

// class Child extends Parent{
//     constructor(name,age,gender){
//         super(name,age)
//         this.gender = gender
        
//     }
    
// }

// let ob = new Parent("tinashe",21)
// let ob2 = new Child("kaawal",21,'female')

// console.log(ob2);


// polymorphysm


class Dog{

    sound(){
        console.log("dog is barking");
        
    }

}
class Cat extends Dog{

    sound(){
        console.log("cat is mawing");
        
    }

}

let obj = new Dog()
let obj2 = new Cat()

obj2.sound()
obj.sound()





