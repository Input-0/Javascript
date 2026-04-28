let ob = {
    name:"two",
    age:22,
    gender:"female",
    role:{
        first:"dev",
        second:"team-lead"
    }
}



// let ob2 = {...ob}

// let ob2 = Object.assign({},ob)


// let ob2 = JSON.parse(JSON.stringify(ob))
let ob2 = structuredClone(ob)
// console.log( ob2);

ob2.role.first = "tinashe"
console.log(ob);



