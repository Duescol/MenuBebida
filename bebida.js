const escolha = document.getElementById("escolha")
const menu = document.getElementById("menu")

function escolher() {
    escolha.textContent = menu.value
}

menu.addEventListener('input', escolher)