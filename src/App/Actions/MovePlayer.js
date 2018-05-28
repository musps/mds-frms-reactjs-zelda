
const updateDirection = (dir, setState) => {
  console.log('updateDirection')
  setState(prevState => ({
    ...prevState,
    playerPosition: {
      ...prevState.playerPosition,
      dir: dir,
    }
  }))
}

const updatePosition = (dir, x, y, setState) => {
  console.log('updatePosition')
  setState(prevState => ({
    ...prevState,
    playerPosition: {
      dir: dir,
      x: x,
      y: y
    }
  }))
}

const movePlayer = (board, curPosition, nextDir, setState) => {
  let nextX = curPosition.x
  let nextY = curPosition.y

  const minX = 0
  const maxX = (board.length - 1)
  const minY = 0
  const maxY = (board[0].length - 1)

  switch (nextDir) {
    case 'up':
      if (nextX > minX) {
        nextX = nextX - 1
      }
      break;
    case 'down':
      if (nextX < maxX) {
        nextX = nextX + 1
      }
      break;
    case 'left':
      if (nextY > minY) {
        nextY = nextY - 1
      }
      break;
    case 'right':
      if (nextY < maxY) {
        nextY = nextY + 1
      }
      break;
  }

  updateDirection(nextDir, setState)

  if (nextX >= minX && nextX <= maxX && nextY >= minY && nextY <= maxY) {
    const tile = board[nextX][nextY]

    if (tile.canWalk) {
      updatePosition(nextDir, nextX, nextY, setState)
    }
  }
}

export default movePlayer
