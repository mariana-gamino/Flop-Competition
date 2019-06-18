window.onload = function() {
  addEventListener('keydown', (event) => {
    if(event.keyCode === 13) {
      startGame()
    } else if(event.keyCode ===32) {
      clearInterval(interval)
      interval = false
    }
  })
}

function update() {
  ctx1.clearRect(0,0, canvas1.width, canvas1.height)
  frames++
  boardOne.draw()
  boardOne.drawFloor()

  player1.draw()
  player2.draw()
}

function startGame() {
  if(interval) return
  interval = setInterval(update, 1000/120)
}