
/*ELEMENTOS DO FORMULÁRIO*/

const form = document.querySelector("form")
const formContent = document.querySelector(".form-content")

const quantity = document.querySelector("#quantity")
const minimum = document.querySelector("#minimum")
const maximum = document.querySelector("#maximum")
const noRepeat = document.querySelector("#no-repeat")

/*ELEMENTOS DO RESULTADO*/

const result = document.querySelector(".result")
const resultLabel = document.querySelector(".result-label")
const numbers = document.querySelector(".numbers")
const drawAgain = document.querySelector("#draw-again")

/*CONTADOR DE SORTEIOS*/

let drawCount = 0

/*REALIZA SORTEIO*/

form.onsubmit = (event) => {
    event.preventDefault()

    // Obtém os valores informados pelo usuário
    const quantityValue = Number(quantity.value)
    const minimumValue = Number(minimum.value)
    const maximumValue = Number(maximum.value)

    // Verifica se o intervalo é válido
    if (minimumValue > maximumValue) {
        alert("O número mínimo não pode ser maior que o máximo.")
        return
    }

    // Calcula quantos números existem no intervalo
    const availableNumbers = maximumValue - minimumValue + 1

    // Verifica se é possível sortear sem repetição
    if (noRepeat.checked && quantityValue > availableNumbers) {
        alert("Não há números suficientes para sortear sem repetição.")
        return
    }

    /*GERAR OS NÚMEROS*/

    const drawnNumbers = []

    while (drawnNumbers.length < quantityValue) {
        const randomNumber =
            Math.floor(Math.random() * availableNumbers) + minimumValue

        // Ignora números já sorteados quando a repetição está desativada
        if (noRepeat.checked && drawnNumbers.includes(randomNumber)) {
            continue
        }

        drawnNumbers.push(randomNumber)
    }

    /*ATUALIZAR CONTADOR*/

    drawCount++

    resultLabel.textContent = `${drawCount}º resultado`

    // Limpa os números do sorteio anterior
    numbers.textContent = ""

    // Cria cada número com um atraso na animação
    drawnNumbers.forEach((number, index) => {
        const element = document.createElement("span")

        element.textContent = number
        element.style.animationDelay = `${index * 700}ms`

        numbers.appendChild(element)
    })

    // Esconde o formulário e mostra o resultado
    formContent.classList.add("hide")
    result.classList.add("show")
}

/*SORTEAR NOVAMENTE*/

drawAgain.addEventListener("click", () => {
    // Esconde o resultado e mostra o formulário
    result.classList.remove("show")
    formContent.classList.remove("hide")
})