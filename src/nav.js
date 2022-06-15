import { buildHome } from "./home.js"


const build = () => {


    // create DOM elements
    let content = document.getElementById("content")
    let nav = document.createElement("div")
    let home = document.createElement("div")
    let menu = document.createElement("div")
    let about = document.createElement("div")
    
    
    
    //append DOM elements
    content.appendChild(nav)
    nav.appendChild(home)
    nav.appendChild(menu)
    nav.appendChild(about)
    
    //apply classes to elements
    nav.classList.add("nav")
    home.classList.add("home")
    menu.classList.add("menu")
    about.classList.add("about")
   
    
    
    // apply inner text
    home.innerText = "Home"
    menu.innerText = "Menu"
    about.innerText = "About"
    
    
    }
     let aboutButton = document.querySelector(".about")
    export let homeButton = document.querySelector(".home")
    export let menuButton = document.querySelector(".menu")
    
    export {build, aboutButton}