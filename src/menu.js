const buildMenu = () =>{
      // create DOM elements
  let content = document.getElementById("content")
  let hero = document.createElement("div")
  let heroText = document.createElement("div")
  let h1 = document.createElement("h1")
  let h2 = document.createElement("h1")
  
  //append DOM elements
  content.appendChild(hero)
  hero.appendChild(heroText)
  heroText.appendChild(h1)
  heroText.appendChild(h2)
  
  //apply classes to elements
  hero.classList.add("hero")
  heroText.classList.add("hero-text")
  
  // apply inner text
  h1.innerText = "Big Brew"
  h2.innerText = "Tap house"
  
}