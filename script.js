let message = document.querySelector('.message')
let input = document.querySelector("input")
let showHide = document.querySelector('#show')

input.addEventListener('input', (e) => {
    if (input.value.length == 0) {
        message.innerHTML = ''
    }
    else if (input.value.length < 4) {
        message.innerHTML = 'Too weak'
        message.style.color = 'red'
    }
    else if (input.value.length >= 4 && input.value.length <= 5) {
        message.innerHTML = 'Weak'
        message.style.color = 'orange'
    }
    else if (input.value.length > 5 && input.value.length < 8) {
        message.innerHTML = 'Medium'
        message.style.color = 'blue'
    }
    else if (input.value.length >= 8) {
        message.innerHTML = 'Strong'
        message.style.color = 'green'
    }
})

let t = true;
showHide.addEventListener('click', function () {
    if (t) {
        input.type = 'text';
        t = false;
    } else {
        input.type = 'password';
        t = true;
    }
});

