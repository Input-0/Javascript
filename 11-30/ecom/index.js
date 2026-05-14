let Items = [
    {id:1,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2YmEk45TDf1A47Yn3BcsaaeiZRHNmWEc-Q&s",name:"Nike-sport-1",price:3000},
    {id:2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2YmEk45TDf1A47Yn3BcsaaeiZRHNmWEc-Q&s",name:"Nike-sport-1",price:3000},
    {id:3,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2YmEk45TDf1A47Yn3BcsaaeiZRHNmWEc-Q&s",name:"Nike-sport-1",price:3000},
    {id:4,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2YmEk45TDf1A47Yn3BcsaaeiZRHNmWEc-Q&s",name:"Nike-sport-1",price:3000},
    {id:5,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2YmEk45TDf1A47Yn3BcsaaeiZRHNmWEc-Q&s",name:"Nike-sport-1",price:3000},
]

let productC = document.querySelector(".product-section")
let cartC = document.querySelector(".cart-section")


let b = document.createDocumentFragment()
document.addEventListener("DOMContentLoaded",()=>{
    
    Items.forEach((val) =>{
        let product = document.createElement("div")
        product.setAttribute('class',`product product-${val.id}`)
        let pImg = document.createElement("img")
        pImg.setAttribute("src",val.img)
        let pPrice =document.createElement("span")
        pPrice.textContent = val.price
        let pName =document.createElement("span")
        pName.textContent = val.name
        let btn =document.createElement("button")
        btn.textContent = "Add to cart"
        product.append(pImg,pPrice,pName,btn)
        b.append(product)
        
    })
    
    productC.append(b)
    let btn = document.querySelectorAll("button")
    console.log(btn);

   productC.addEventListener("click",(e) =>{
    if(e.target.tagName == "BUTTON"){
        console.log("button clicked");
        
    }
   })
    
})