fetch('https://api.openbrewerydb.org/breweries')
.then(res => res.json())
.then(brewery => renderCard(brewery))

const renderCard = (brewery) => {
    console.log(brewery);
    const cardContainer = document.getElementById('card-container')
    brewery.forEach(cards => {   
        const card = document.createElement('div')
        const title = document.createElement('h1')
        const location = document.createElement('h1')
        title.setAttribute('id', 'title')
        card.setAttribute('id', 'card')
        location.setAttribute('id', 'location')

        title.innerText = cards.name
        location.innerText = cards.city
        card.appendChild(title)
        card.appendChild(location)
        cardContainer.appendChild(card)
    })
}


// fetch ("https://raw.githubusercontent.com/openbrewerydb/openbrewerydb/master/breweries.json")
// .then(resp => resp.json())
// .then(data => data.forEach(brewery => renderCard(brewery)));//returns array of OBJECTS, coverts to obj..

// function renderCard(breweries) { //console.log(breweries) returns all objects
//     // const title = document.querySelector("#title")
//     const container = document.querySelector("#card")
//     const newElement = document.createElement('p')
//     newElement.textContent = breweries.name
//     container.appendChild(newElement)
    

    // const header = document.querySelector(".top")
    // const brewContent = document.querySelector("#card > div.content")
    // const reviewsSection = document.querySelector("#card > div.reviews")


    }

 
