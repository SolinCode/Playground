function randomNumber() {
    const randomNumber = Math.round(Math.random() * 9)
    return randomNumber
}

function btnRandom() {
    blockNumber0.innerHTML = (randomNumber())
    blockNumber1.innerHTML = (randomNumber())
    blockNumber2.innerHTML = (randomNumber())
    blockNumber3.innerHTML = (randomNumber())
    blockNumber4.innerHTML = (randomNumber())
    blockNumber5.innerHTML = (randomNumber())
}