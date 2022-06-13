const buildMenu = () =>{
  //create beer cards
  // class beerFactory {
  //   constructor(beerName, abv, ibu, description){
  //     this.beerName = beerName
  //     this.abv = abv
  //     this. ibu = ibu
  //     this.description = description
  //   }
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
      description: "Bold reputation. Soft disposition. Surprising Balance. Behold an iconic and unexpectedly complex porter that’s more than meets the eye."
      }
  ]
    const buildCard = (beerName,abv,ibu,description)=> {
      let card = document.createElement("div")
      let beerNameElement = document.createElement("h1")
      let abvElement = document.createElement("p")
      let ibuElement = document.createElement("p")
      let descriptionElement = document.createElement("p")

      card.classList.add("beer-card")
      
      beerNameElement.innerText=`${beerName}`
      abvElement.innerText=`ABV: ${abv}`
      ibuElement.innerText=`IBU: ${ibu}`
      descriptionElement.innerText=`${ description }`

      card.appendChild(beerNameElement,abvElement,ibuElement,descriptionElement)

    }
  
  
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
  hero.classList.add("menu")
  heroText.classList.add("hero-text")
  
  // apply inner text
  h1.innerText = "The Brews"
  
  
}
export {buildMenu}