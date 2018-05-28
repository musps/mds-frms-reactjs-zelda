
const destroyTile = (board, x, y, setState) => {
  const tile = JSON.parse(JSON.stringify(Object.assign({}, board[x][y])))

  if (tile.canBeDestroyed && tile.destroyConfig.hp > 0) {
    tile.destroyConfig.hp -= 1
    if (tile.destroyConfig.hp === 0) {
      tile.canWalk = true
    }
  }

  board[x][y] = tile

  setState(prevState => ({
    ...prevState,
    board: board
  }))
}

const attackPlayer = (board, playerPosition, setState) => {
  let nextX = playerPosition.x
  let nextY = playerPosition.y

  const minX = 0
  const maxX = (board.length - 1)
  const minY = 0
  const maxY = (board[0].length - 1)

  switch (playerPosition.dir) {
    case 'up':
      nextX = nextX - 1
      break;
    case 'down':
      nextX = nextX + 1
      break;
    case 'left':
      nextY = nextY - 1
      break;
    case 'right':
      nextY = nextY + 1
      break;
  }

  if (nextX >= minX && nextX <= maxX && nextY >= minY && nextY <= maxY) {
    const tile = board[nextX][nextY]

    destroyTile(board, nextX, nextY, setState)
  }
}

export default attackPlayer
