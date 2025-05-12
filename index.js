let lastMouseX = 0
let lastMouseY = 0
let points = 0
let increment = 1
let autoIncrement = 0
let autoIncrementInterval = null
const scoreDisplay = document.getElementById("points")
const clickImage = document.getElementById("clickImage")
const tooltip = document.getElementById("tooltip")
const TrainingButton = document.getElementById('Training')
const BakerButton = document.getElementById('Enchanced Shooting')

TrainingButton.addEventListener("click", () => {
    if (points >= 10) {
        points -= 10
        increment += 1
        scoreDisplay.innerText = "ShotsMade: " + points
    }

})

BakerButton.addEventListener("click", () => {
    if (points >= 50) {
        points -= 50
        autoIncrement += 1
        scoreDisplay.innerText = "ShotsMade: " + points
        if (!autoIncrementInterval) {
            autoIncrementInterval =  setInterval(incrementPerSecond, 1000)
        }
       
    }
})

function incrementPerSecond() {
    points += autoIncrement
    scoreDisplay.innerText = "ShotsMade: " + points
}

clickImage.addEventListener("click", () => {
    points += increment
    scoreDisplay.innerText = "ShotsMade: " + points
})



function showTooltip(event) {
    const tooltipText = event.target.getAttribute('data-tooltip')
    if (tooltipText) {
        tooltip.textContent = tooltipText
        tooltip.style.display = "block"
        tooltip.style.opacity = 1
    }
}

function hideTooltip() {
    tooltip.style.display = "none"
    tooltip.style.opacity = 0
}

function moveTooltip(event) {
    const mouseX = event.pageX
    const mouseY = event.pageY

    if (Math.abs(mouseX - lastMouseX) > 5 || Math.abs(mouseY - lastMouseY) > 5) {
        lastMouseX = mouseX
        lastMouseY = mouseY
        tooltip.style.left = `${mouseX + 10}px`
        tooltip.style.top = `${mouseY - 30}px`
    }
}


document.querySelectorAll('.upgrade-button').forEach(button => {
    button.addEventListener("mouseover", showTooltip)
    button.addEventListener("mousemove", moveTooltip)
    button.addEventListener("mouseout", hideTooltip)
});