import {build as buildNav} from "./nav.js"
import { buildHome } from "./home.js"
import { buildMenu } from "./menu.js"
import { buildAbout } from "./about.js"
import "./styles.css"



let content = document.querySelector("#content")
let homeButton = document.querySelector(".home")
let menuButton = document.querySelector(".menu")
let aboutButton = document.querySelector(".about")

homeButton.addEventListener("click", () =>{
    content.innerHTML= ""
})

buildNav()