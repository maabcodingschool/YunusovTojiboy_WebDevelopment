const button =document.getElementById('button')
const toasts =document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info' ,  'success' , 'error']

button.addEventListener('click' , () => createNotification())

function createNotification (message = null , type = null) {
    const nodif = document.createElement('div')
    nodif.classList.add('toast')
    nodif.classList.add(type ? type : getRandomType())

    nodif.innerText = message ? message : getRandomMessage()

    setTimeout(() => {
        nodif.remove()
    }, 3000)

    toasts.appendChild(nodif)
}

function getRandomMessage () {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType () {
    return types[Math.floor(Math.random() * types.length)]
}