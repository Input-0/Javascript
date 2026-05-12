let btn = document.querySelector("button")

btn.addEventListener("click",(e) =>{
    e.preventDefault()
    e.stopPropagation()
    console.log("form clicked");
    

    
    
})

let sec = document.querySelector("section")
let div = document.querySelector("div")

div.addEventListener("click",(e) =>{
    // e.preventDefault()
    console.log("div clicked");
    

    
    
})
sec.addEventListener("click",(e) =>{
    // e.preventDefault()
    console.log("section clicked");
    

    
    
})

