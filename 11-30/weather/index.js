let city = ""
let apiKey = "043d775049a1d9b3b1f756884e7c404e"

let tempCard = document.querySelector(".w-container")
let inputCity = document.querySelector("input")
let btn = document.querySelector("button")


btn.addEventListener("click",(e) =>{
    tempCard.innerHTML  = ""
     city  =  inputCity.value
     console.log(city);
     getWeather()
     

})


let getWeather = async() =>{
  
          let response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    let data = await response.json()

    console.log(data);

    let Tcity = document.createElement("h2")
    Tcity.textContent = data.name
    let tem = document.createElement("h2")
    tem.textContent = `${data.main.temp} Deg`
    let wImg = document.createElement('img')
    wImg.setAttribute("src","")
    wImg.style.cssText = "height:100px; width:100px"
    tempCard.append(Tcity,tem,wImg)
    if(data.weather[0].main === 'Clear'){
        console.log('clear');
        
    }else if(data.weather[0].main === 'Clouds'){
        wImg.setAttribute("src","https://static.vecteezy.com/system/resources/previews/021/079/964/non_2x/cloudy-weather-icon-sun-behind-cloud-weather-forecast-icon-for-cloudy-weather-suitable-for-social-media-and-app-icon-cloud-and-sun-illustration-grey-and-orange-colors-free-vector.jpg")
        
    }
    
}


