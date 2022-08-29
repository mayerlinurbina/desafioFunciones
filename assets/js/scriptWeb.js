let colorGlobal = ""


document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    color ="yellow"
    } else if (event.key === 's') {
    color = "blue"
    } else if (event.key === "d"){
        color = "green"
    }

    })

const div1 = document.getElementById('div-1')
const div2 = document.getElementById('div-2')
const div3 = document.getElementById('div-3')
const div4 = document.getElementById('div-4')

div1.addEventListener('click', (event) => pintar(event, colorGlobal))
div2.addEventListener('click', (event) => pintar(event, colorGlobal))
div3.addEventListener('click', (event) => pintar(event, colorGlobal))
div4.addEventListener('click', (event) => pintar(event, colorGlobal))

function pintar(event, color) {
    const ele = event.target
    ele.style.backgroundColor = color
    console.log(color)
}