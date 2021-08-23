fetch('https://api.openbrewerydb.org/breweries')
.then(res => res.json())
.then(brewery => renderCard(brewery))
let total = 0;

const renderCard = (brewery) => {
    console.log(brewery);
    const cardContainer = document.getElementById('card-container')
    brewery.forEach(cards => {   

        const card = document.createElement('div')
        const title = document.createElement('h1')
        const location = document.createElement('h1')
        const top = document.createElement('div')
        const like = document.createElement('p')
        const likeButton = document.createElement('button')
        const dislikeButton = document.createElement('button')
        const button = document.createElement('button')
        const reviewSection = document.createElement('div')
        const middleSection = document.createElement('div')
        const form = document.createElement('form')
        const textBox = document.createElement('input')
        const submit = document.createElement('button')
        const close = document.createElement('button')

        middleSection.className = 'content'
        reviewSection.className = 'reviews'
        top.className = 'top'
        like.setAttribute('id', 'likes')
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
        like.innerText = `Total Likes: ${total}`
        likeButton.innerText = '+'
        dislikeButton.innerText = '-'

        reviewSection.appendChild(button)
        reviewSection.appendChild(like)
        reviewSection.appendChild(likeButton)
        reviewSection.appendChild(dislikeButton)
        top.appendChild(title)
        top.appendChild(location)
        form.appendChild(close)
        form.appendChild(submit)
        form.appendChild(textBox)
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
            card.style.height = '400px'
            reviewSection.style.display = 'none'
        })

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const p = document.createElement('p')
            p.innerText = textBox.value
            console.log(textBox.value);
            form.appendChild(p)
            form.reset()            
        })

        close.addEventListener('click', (e) => {
            e.preventDefault()
            card.style.height = '200px'
            form.style.display = 'none'
            reviewSection.style.display = 'flex'
        })

        likeButton.addEventListener('click', (e) => {
            like.innerText = `Total Likes: ${++total}`
        })

        dislikeButton.addEventListener('click', (e) => {
            like.innerText = `Total Likes: ${--total}`
        })
    })
}
