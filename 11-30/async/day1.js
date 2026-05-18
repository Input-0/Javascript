function addTocart(fn)  {
    setTimeout(() =>{
        console.log("added to cart");
        fn()
        
    },5000)


}
function checkout(fn)  {
    setTimeout(() =>{
        console.log("checkout");
        fn()
    },4000)


}
function payment(fn)  {
    setTimeout(() =>{
        console.log("payment");
        fn()
    },2000)


}
function shiped()  {
    setTimeout(() =>{
        console.log("shipped");
        
    },1000)


}

addTocart(() =>{
    checkout(() =>{
        payment(() =>{
            shiped()
        })
    })
})
// callback hell






