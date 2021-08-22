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
        const top = document.createElement('div')
        const button = document.createElement('button')
        const reviewSection = document.createElement('div')
        const middleSection = document.createElement('div')
        const form = document.createElement('form')
        const textBox = document.createElement('input')
        const submit = document.createElement('button')
        const comment = document.createElement('p')
        const close = document.createElement('button')

        middleSection.className = 'content'
        reviewSection.className = 'reviews'
        top.className = 'top'
        title.setAttribute('id', 'title')
        card.setAttribute('id', 'card')
        location.setAttribute('id', 'location')
        form.setAttribute('id', 'hidden-form')
        textBox.setAttribute('id', 'text-form')

        title.innerText = cards.name
        location.innerText = `${cards.city}, ${cards.state}`
        button.innerText = 'View Comments!'
        submit.innerText = 'Add Comment!'
        close.innerText = 'Close Comments'

        reviewSection.appendChild(button)
        top.appendChild(title)
        top.appendChild(location)
        form.appendChild(comment)
        form.appendChild(textBox)
        form.appendChild(submit)
        form.appendChild(close)
        card.appendChild(top)
        card.appendChild(middleSection)
        card.appendChild(reviewSection)
        card.appendChild(form)
        cardContainer.appendChild(card)

        button.addEventListener('click', () => {
            if (form.style.display === 'flex') {
                form.style.display = 'none';
            } else {
                form.style.display = 'flex'
            }
            card.style.height = '300px'
            button.style.display = 'none'
        })

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            comment.innerText = textBox.value
            form.reset()
        })

        close.addEventListener('click', (e) => {
            e.preventDefault()
            card.style.height = '200px'
            form.style.display = 'none'
            button.style.display = 'flex'
        })
    })
}
