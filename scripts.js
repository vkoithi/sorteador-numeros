const quantity = document.querySelector("#quantity")
const minimum = document.querySelector("#minimum")
const maximum = document.querySelector("#maximum")
const noRepeat = document.querySelector("#no-repeat")

const form = document.querySelector("form")
const draw = document.getElementById("draw")

form.onsubmit = (event) => {
    event.preventDefault()

    const quantityValue = Number(quantity.value)
    const minimumInput = Number(minimum.value)
    const maximumInput = Number(maximum.value)

    if (minimumInput > maximumInput) {
        alert("Não foi possível fazer o sorteio")
        return
    } 

    const availableNumbers = maximumInput - minimumInput + 1

    if (quantityValue > availableNumbers && noRepeat.checked) {
        alert("Não há número suficientes para sortear sem repetição")
        return
    }

    const drawnNumbers = [] 
    
    while (drawnNumbers.length < quantityValue) { 
        const randomNumber = Math.floor(Math.random() * availableNumbers) + minimumInput 
        
        if (noRepeat.checked && drawnNumbers.includes(randomNumber)) { 
            continue 
        } 

        drawnNumbers.push(randomNumber) 
        console.log(drawnNumbers)
    }

    draw.classList.add("drawing")
}
