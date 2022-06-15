const buildHome = () => {
  // create DOM elements
  let content = document.getElementById("content")
  let hero = document.createElement("div")
  let heroText = document.createElement("div")
  let header1 = document.createElement("h1")
  let header2 = document.createElement("h1")
  let img = document.createElement("img")
  let homeButton = document.querySelector(".home")
    
  
  //append DOM elements
  content.appendChild(hero)
  hero.appendChild(heroText)
  heroText.append(header1,img,header2)
  
  //apply classes to elements
  hero.classList.add("hero")
  heroText.classList.add("hero-text")
  homeButton.classList.add("nav-active")
  
  // apply inner text
  header1.innerText = "Big Brew"
  header2.innerText = "Tap house"
  img.src="../src/assets/beer.jpg"
  }
  
  export {buildHome}   


 