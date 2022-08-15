if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add("dark-mode")
}

else {
    document.body.classList.remove("dark-mode")
}

function btnOn() {
    localStorage.setItem("theme", "dark")
    document.body.classList.add("dark-mode")
}

function btnOff() {
    localStorage.setItem("theme", "light")
    document.body.classList.remove("dark-mode")
}