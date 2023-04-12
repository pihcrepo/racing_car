let game = document.getElementById('game')
let yellowCar = document.getElementById('yellowCar')
let blueCar = document.getElementById('blueCar')
let redCar = document.getElementById('redCar')
let result = document.getElementById('result')
let write = document.getElementById('write')
let write2 = document.getElementById('write2')
let countPoints = 0

yellowCar.addEventListener('animationiteration', function () {
    let random = Math.floor(Math.random() * 3) * 113 + 32
    yellowCar.style.left = random + 'px'
    countPoints++
    write.innerHTML = 'Points : ' + countPoints
})
redCar.addEventListener('animationiteration', function () {
    let random = Math.floor(Math.random() * 3) * 113 + 32 - 113
    redCar.style.left = random + 'px'
    countPoints++
    write.innerHTML = 'Points : ' + countPoints
})

window.onkeydown = function (key) {
    if (key.keyCode == 37) {
        let blueCarMove = parseInt(window.getComputedStyle(blueCar).getPropertyValue('left'))
        if (blueCarMove > 32) {
            blueCar.style.left = blueCarMove - 113 + 'px'
        }
    }
    if (key.keyCode == 39) {
        let blueCarMove = parseInt(window.getComputedStyle(blueCar).getPropertyValue('left'))
        if (blueCarMove < 258) {
            blueCar.style.left = blueCarMove + 113 + 'px'
        }
    }
}

setInterval(gameOver)

function gameOver() {
    let yellowCarTop = parseInt(window.getComputedStyle(yellowCar).getPropertyValue('top'))
    let redCarTop = parseInt(window.getComputedStyle(redCar).getPropertyValue('top'))
    let yellowCarLeft = window.getComputedStyle(yellowCar).getPropertyValue('left')
    let redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue('left'))
    let blueCarLeft = window.getComputedStyle(blueCar).getPropertyValue('left')

    if (yellowCarLeft === blueCarLeft && (yellowCarTop > 300) && (yellowCarTop < 500)
        || redCarLeft + 113 + 'px' === blueCarLeft && (redCarTop > 300) && (redCarTop < 500)) {
        result.style.display = 'block';
        game.style.display = 'none'
        write2.innerHTML = 'Points: ' + countPoints
    }
}
