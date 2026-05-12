let pSection = document.querySelector(".product-section")

let cSection = document.querySelector(".cart-product")

let Items = [
    {id:1,imgURL:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT2PQFDUVHR3r7VT86QK5rWReJBq6cErh-aVFQTM72qDJt2zk7CyWzpW0r4NqHAIVtMpW_iuIeXdh_4bYneKHZpuvrsWzeOHrWdsZXo1XyDX7steLaMJCn5nkA4rI5ghzKlgfFaskAUuLw&usqp=CAc",price:14000,name:"chelsi"},
    {id:2,imgURL:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT2PQFDUVHR3r7VT86QK5rWReJBq6cErh-aVFQTM72qDJt2zk7CyWzpW0r4NqHAIVtMpW_iuIeXdh_4bYneKHZpuvrsWzeOHrWdsZXo1XyDX7steLaMJCn5nkA4rI5ghzKlgfFaskAUuLw&usqp=CAc",price:14000,name:"chelsi"},
    {id:3,imgURL:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT2PQFDUVHR3r7VT86QK5rWReJBq6cErh-aVFQTM72qDJt2zk7CyWzpW0r4NqHAIVtMpW_iuIeXdh_4bYneKHZpuvrsWzeOHrWdsZXo1XyDX7steLaMJCn5nkA4rI5ghzKlgfFaskAUuLw&usqp=CAc",price:14000,name:"chelsi"},
    {id:4,imgURL:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT2PQFDUVHR3r7VT86QK5rWReJBq6cErh-aVFQTM72qDJt2zk7CyWzpW0r4NqHAIVtMpW_iuIeXdh_4bYneKHZpuvrsWzeOHrWdsZXo1XyDX7steLaMJCn5nkA4rI5ghzKlgfFaskAUuLw&usqp=CAc",price:14000,name:"chelsi"}
]
document.addEventListener("DOMContentLoaded",() =>{

    Items.forEach((val) =>{
        let card = document.createElement("div")
        card.classList.add("product")
        let img = document.createElement("img")
        img.setAttribute("src",val.imgURL)
        let pPrice = document.createElement("span")
        pPrice.textContent = val.price
        let pName = document.createElement("span")
        pName.textContent= val.name
        let btn = document.createElement("button")
        btn.textContent = "Add to cart"
        card.append(img,pPrice,pName,btn)
        pSection.append(card)

    })



})

