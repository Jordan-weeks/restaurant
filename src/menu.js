const buildMenu = () =>{
  
    let tapList = [{
      beerName: "Fresh Haze IPA",
      ibu: "45",
      abv: "6.5%",
      description: "Soak up the soft golden rays of an inviting malt body as the lively hues of citrusy hops linger on the horizon of a cool, refreshing finish."
      },
      {
      beerName: "Black Butte Porter",
      ibu: "30",
      abv: "5.5%",
      description: "Bold reputation. Soft disposition. Surprising Balance. Behold an iconic and unexpectedly complex porter that's more than meets the eye."
      },
      {
      beerName: "Neon Daydream",
      ibu: "35",
      abv: "4.8%",
      description: "Drift beneath dayglow skies on a cool, refreshing current of zesty candied orange and lemon notes, immersed in the mellow malt embrace of a deliciously lazy, hazy afternoon."
      }
  ]

    const buildCard = ({beerName,ibu,abv,description})=> {
      let card = document.createElement("div")
      let beerNameElement = document.createElement("h1")
      let abvElement = document.createElement("div")
      let ibuElement = document.createElement("div")
      let descriptionElement = document.createElement("div")

      card.classList.add("beer-card")
      
      beerNameElement.innerText=`${beerName}`
      abvElement.innerText=`ABV: ${abv}`
      ibuElement.innerText=`IBU: ${ibu}`
      descriptionElement.innerText=`${ description }`
      menuContent.appendChild(card)
      card.append(beerNameElement,abvElement,ibuElement,descriptionElement)
      
    }
  
  
      // create DOM elements
  let content = document.getElementById("content")
  let menuPage = document.createElement("div")
  let menuContent = document.createElement("div")
  let h1 = document.createElement("h1")
  let menuButton = document.querySelector(".menu")
    
  
  //append DOM elements
  content.appendChild(menuPage)
  menuPage.appendChild(menuContent)
  menuContent.appendChild(h1)
  
  
  //apply classes to elements
  menuPage.classList.add("menu-page")
  menuContent.classList.add("menu-content")
  menuButton.classList.add("nav-active")
  
  // apply inner text
  h1.innerText = "The Brews"
  

tapList.forEach(buildCard)
}
export {buildMenu}