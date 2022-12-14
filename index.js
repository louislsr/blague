function addJoke(joke) {
    const card = document.createElement('div')
    card.classList.add('card', 'w-100', 'p-3', 'bg-indigo', 'bg-card', 'text-color', 'mb-4')

    const question = document.createElement('h2')
    question.innerHTML = joke.question

    const answer = document.createElement('p')
    answer.innerHTML = joke.answer

    card.appendChild(question)
    card.appendChild(answer)

    document.getElementById('jokes').appendChild(card)

    window.scrollTo(0, document.body.scrollHeight)
}

function getJoke() {
    return fetch('https://api.blablagues.net?rub=blagues&cat_ex=news+insolites,pepite')
        .then(response => response.json())
        .then(data => ({
            question: data.data.content.text_head,
            answer: data.data.content.text || data.data.content.text_hidden
        }))
}

function nextJoke() {
    getJoke()
        .then(joke => addJoke(joke))
} 

document.getElementById('next').addEventListener('click', () => {
    nextJoke()
})

nextJoke()

