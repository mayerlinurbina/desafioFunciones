function pintar(event, color = "green") {
    const ele = event.target
    ele.style.backgroundColor = color 
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", (event) => pintar(event, "yellow"));



