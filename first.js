let container = document.querySelector(".container")


let Items = [
    {
        pImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvdx8NWIJHj0Lk6N9kD-_FMJqDv9vAFnO2Q&s",
        pTitle:"shoes",
        pPrice:4000
    },
    {
        pImage:"https://fausto.in/cdn/shop/files/FST_FJDWC-7010_SKY_0_400x.jpg?v=1694239398",
        pTitle:"shoes1",
        pPrice:2000
    },
    {
        pImage:"https://assets.myntassets.com/w_360,q_50,,dpr_2,fl_progressive,f_webp/assets/images/9394353/2022/5/18/bb83cc3b-c550-4459-87dd-70f73249d3c41652863728185CampusMenNavyBlueRunningShoes1.jpg",
        pTitle:"shoes2",
        pPrice:5000
    }
]

let fregement = document.createDocumentFragment()

Items.map((val) => {
   let pContainer =  document.createElement("div")
   pContainer.setAttribute("class","product")
   let pImg = document.createElement("img")
   pImg.setAttribute("src",val.pImage)
   let ptitle = document.createElement("span")
   ptitle.textContent  = val.pTitle
   let pprice = document.createElement("span")
   pprice.textContent = val.pPrice
   let btn = document.createElement("button")

   btn.textContent = "add to cart  "
   pContainer.append(pImg,ptitle,pprice,btn)
   fregement.append(pContainer)
})

container.append(fregement)


