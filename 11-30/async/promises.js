

let one = new Promise((resolve,reject) => {
    let dbReq = false

    if(dbReq){
        resolve({user:"one",age:22})
    }else{
        reject(new Error("DB connection failed"))
    }
});

one
.then((data) => console.log(data))
.catch((err) => console.log(err))
.finally(() => console.log("promise complete"))

