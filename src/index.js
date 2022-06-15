import {build, build as buildNav, } from "./nav.js"
import { buildHome } from "./home.js"
import { buildMenu } from "./menu.js"
import { buildAbout } from "./about.js"
import "./styles.css"
let homeButton = document.querySelector(".home")
let menuButton = document.querySelector(".menu")
let aboutButton = document.querySelector(".about")
const pageLoad = () =>{
    buildNav()
    buildHome()
    applyClicks()
}
let content = document.querySelector("#content")

const applyClicks = () => {
    homeButton = document.querySelector(".home")
    menuButton = document.querySelector(".menu")
    aboutButton = document.querySelector(".about")
    homeButton.addEventListener("click",() => {homeClick()})
    menuButton.addEventListener("click",() => {menuClick()})
    aboutButton.addEventListener("click",() => {aboutClick()})
    
    console.log("clicks added")
} 

    
const homeClick = () => {
    content.innerHTML=""
    buildNav()
    buildHome()
    applyClicks()
    homeButton = document.querySelector(".home")
    homeButton.classList.add("nav-active")
    console.log("home click")
}

const menuClick = () => {
    content.innerHTML=""
    buildNav()
    buildMenu()
    applyClicks()
    // menuButton = document.querySelector(".menu")
    // menuButton.classList.add("nav-active")
    console.log("menu click")
}
const aboutClick = () => {
    content.innerHTML=""
    buildNav()
    buildAbout()
    applyClicks()
    // menuButton = document.querySelector(".menu")
    // menuButton.classList.add("nav-active")
    console.log("about click")
}
// })
// menuButton.addEventListener("click",()=>{
//     content.innerHTML=""
//     buildNav()
//     buildMenu()
//     applyClicks()
//     menuButton = document.querySelector(".menu")
//     menuButton.classList.add("nav-active")
// })
// aboutButton.addEventListener("click",()=>{
//     content.innerHTML=""
//     buildNav()
//     buildAbout()
//     applyClicks()
//     aboutButton = document.querySelector(".about")
//     aboutButton.classList.add("nav-active")
// })
// }
     
// buildNav()
// buildHome()
// applyClicks()
// homeButton.classList.add("nav-active")

pageLoad()