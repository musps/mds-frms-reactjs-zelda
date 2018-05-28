
const movePlayer = (curPosition, nextDirection, setState) => {
  let x = curPosition.x
  let y = curPosition.y
  let dir = curPosition.dir

  const minX = 0
  const maxX = 19
  const minY = 0
  const maxY = 19

  switch (nextDirection) {
    case 'ArrowUp':
      if (x > minX) {
        x = x - 1
        dir = 'up'
      }
      break;
    case 'ArrowDown':
      if (x < maxX) {
        x = x + 1
        dir = 'down'
      }
      break;
    case 'ArrowLeft':
      if (y > minY) {
        y = y - 1
        dir = 'left'
      }
      break;
    case 'ArrowRight':
      if (y < maxY) {
        y = y + 1
        dir = 'right'
      }
      break;
  }

  setState(prevState => ({
    ...prevState,
    playerPosition: {
      dir: dir,
      x: x,
      y: y
    }
  }))
}

export default movePlayer
