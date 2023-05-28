let home = document.querySelector('#home'),
    header = home.querySelector('#header'),
    navbar = header.querySelector('.navbar'),
    text_welcome = home.querySelector('#text-welcome')

// navbar propriety
navbar.style.marginLeft = '0'

// text_2 welcome
let counter = 1
let counter_scaling = true
let index = 0
let text_1 = "                    " +
                  "Bonjour ! Je m'appelle Monja, Je suis un développeur ..." +
                  "                             "
let text_2 = "                    " +
                  "C'est vraiment un plaisir pour moi de vous acceuillir" +
                  "                             "
let text = ['text_1', 'text_2']
welcome = () => {
    if (counter === eval(text[index % 2]).length) {
        counter_scaling = false
    } else if (counter === 0) {
        counter_scaling = true
        index += 1
    }

    counter_scaling ? counter++ : counter--

    text_welcome.innerText = eval(text[index % 2]).substring(0, counter)

    setTimeout(welcome, 50)
}
welcome()

