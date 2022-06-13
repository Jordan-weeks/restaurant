export const buildAbout = () => {
  // create DOM elements
  let content = document.getElementById("content")
  let about = document.createElement("div")
  let h1 = document.createElement("h1")
  let message = document.createElement("div")
  
  //append DOM elements
  content.append(about)
  about.append(h1,message)
  
  //apply classes to elements
  
  
  // apply inner text
  h1.innerText = "About Us"
  message.innerText = "I'm baby dIY jianbing organic lumbersexual franzen taiyaki literally hell of wolf offal schlitz blog. Air plant neutra DIY artisan poutine iPhone woke selvage, keffiyeh hexagon fam. Art party iPhone franzen paleo. YOLO coloring book art party vinyl hella, intelligentsia tofu ugh squid bespoke edison bulb tonx typewriter. Pop-up direct trade prism godard, pug beard cronut disrupt unicorn 8-bit photo booth paleo mustache poke gochujang."
  }
 
  


 