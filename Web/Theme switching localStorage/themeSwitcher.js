const body = document.getElementById("body")

if (localStorage.getItem('theme') === 'light') {
    body.classList.add("light")
}

else {
    body.classList.add("dark")
}

function btnDark() {
    body.classList.replace("light", "dark")
    localStorage.removeItem('theme')
    localStorage.setItem('theme', 'dark')
}


function btnLight() {
    body.classList.replace("dark", "light")
    localStorage.removeItem('theme')
    localStorage.setItem('theme', 'light')
}