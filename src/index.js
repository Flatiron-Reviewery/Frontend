document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded');
})

fetch('https://api.openbrewerydb.org/breweries')
.then(res => res.json())
.then(brewery => renderCard(brewery))

const renderCard = brewery => {
    const cardContainer = document.getElementById('card-container')
    brewery.forEach(cards => {
        let total = 0;

        const card = document.createElement('div')
        const cardTop = document.createElement('div')
        const title = document.createElement('h2')
        const location = document.createElement('h2')
        const mid = document.createElement('mid')
        const bottom = document.createElement('div')
        const reviewery = document.createElement('button')
        const like = document.createElement('p')
        const likeButton = document.createElement('button')
        const dislikeButton = document.createElement('button')
        const form = document.createElement('form')
        const text = document.createElement('input')
        const submit = document.createElement('button')
        const modal = document.createElement('div')
        const modalH1 = document.createElement('h1')
        const commentForm = document.createElement('div')
        const closeModal = document.createElement('span')
        const breaktag = document.createElement('br')


        like.innerText = `Total Likes: ${total}`
        likeButton.innerText = '+'
        dislikeButton.innerText = '-'
        reviewery.innerText = 'Revieweries'
        submit.innerText = 'Add Comment'
        modalH1.innerText = 'Comments'
        closeModal.innerText = 'X'

        card.id = 'card'
        cardTop.id = 'card-top'
        title.id = 'title'
        location.id = 'location'
        mid.id = 'mid'
        likeButton.id = 'like-button'
        dislikeButton.id = 'like-button'
        bottom.id = 'bottom'
        reviewery.id = 'review'
        modal.id = 'modal'
        commentForm.id = 'comment-form'
        closeModal.id = 'close'
        text.id = 'text-area'
        submit.id = 'submit'
        console.log(text);
        title.innerText = cards.name
        location.innerText = `${cards.city}, ${cards.state}`

        cardTop.append(title, location)
        mid.append(like, likeButton, dislikeButton)
        bottom.append(reviewery)
        form.append(text, breaktag, submit)
        commentForm.append(closeModal, modalH1, form)
        modal.append(commentForm)
        card.append(cardTop, mid, bottom, modal)
        cardContainer.append(card)


        reviewery.addEventListener('click', () => {
            modal.style.display = 'block'
        })
        
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none'
        })
        
        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = 'none'
            }
        })

        likeButton.addEventListener('click', (e) => {
            like.innerText = `Total Likes: ${++total}`
        })

        dislikeButton.addEventListener('click', (e) => {
            like.innerText = `Total Likes: ${--total}`
        })

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const p = document.createElement('p')
            p.innerText = text.value
            console.log(text.value);
            form.append(p)
            form.reset()            
        })
    })
}