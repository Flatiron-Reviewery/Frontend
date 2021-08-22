fetch ("https://raw.githubusercontent.com/openbrewerydb/openbrewerydb/master/breweries.json")
.then(resp => resp.json())
.then(data => data.forEach(brewery => renderCard(brewery)));//returns array of OBJECTS, coverts to obj..

function renderCard(breweries) { //console.log(breweries) returns all objects
    // const title = document.querySelector("#title")
    const container = document.querySelector("#card")
    const newElement = document.createElement('p')
    newElement.textContent = breweries.name
    container.appendChild(newElement)
    

    // const header = document.querySelector(".top")
    // const brewContent = document.querySelector("#card > div.content")
    // const reviewsSection = document.querySelector("#card > div.reviews")


    }

 
