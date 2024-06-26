let message = document.querySelector('.message')
let input = document.querySelector("input")
let showHide = document.querySelector('#show')

input.addEventListener('input', () => {
    const passwordLength = input.value.length

    if (passwordLength === 0) {
        message.innerHTML = ''
    } else if (passwordLength < 4) {
        setMessage('Too weak', 'red')
    } else if (passwordLength <= 5) {
        setMessage('Weak', 'orange')
    } else if (passwordLength < 8) {
        setMessage('Medium', 'blue')
    } else {
        setMessage('Strong', 'green')
    }
})

function setMessage(text, color) {
    message.innerHTML = text
    message.style.color = color
}

showHide.addEventListener('click', function () {
    input.type = input.type === 'password' ? 'text' : 'password';
});
