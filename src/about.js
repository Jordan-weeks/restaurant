export const buildAbout = () => {

  // create DOM elements
  let content = document.getElementById("content")
  let aboutPage = document.createElement("div")
  let h1 = document.createElement("h1")
  let aboutContent = document.createElement("div")
  let aboutButton = document.querySelector(".about")
    
  
  //append DOM elements
  content.append(aboutPage)
  aboutPage.append(h1,aboutContent)
  
  //apply classes to elements
  aboutPage.classList.add("about-page")
  aboutContent.classList.add("about-content")
  aboutButton.classList.add("nav-active")
  // apply inner text
  h1.innerText = "About Us"
  aboutContent.innerText = "I'm baby dIY jianbing organic lumbersexual franzen taiyaki literally hell of wolf offal schlitz blog. Air plant neutra DIY artisan poutine iPhone woke selvage, keffiyeh hexagon fam. Art party iPhone franzen paleo. YOLO coloring book art party vinyl hella, intelligentsia tofu ugh squid bespoke edison bulb tonx typewriter. Pop-up direct trade prism godard, pug beard cronut disrupt unicorn 8-bit photo booth paleo mustache poke gochujang."
  }
 
  


 