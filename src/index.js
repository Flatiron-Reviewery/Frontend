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