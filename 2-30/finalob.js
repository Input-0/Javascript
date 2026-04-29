let user = {
    name:"kawal",
    age:25,
    gender:"female"
}


// let photos = {
//     id:1,
//     photos:["photo","photo1","photo2"]

// }

// photos.__proto__ = user 

// Object.setPrototypeOf(photos,user)

// console.log(photos.__proto__ === user);

// console.log(Object.getPrototypeOf(photos));




let ob = Object.create(user,{
    number:{
        value:98204824,
        enumerable:true,
        writable:true,
        configurable:true
    }
})

ob.isSuccess = false
ob.number = 234943
delete ob.number
// ob.voter = false

// delete ob.voter

// console.log(Object.getPrototypeOf(ob));
console.log(ob);

