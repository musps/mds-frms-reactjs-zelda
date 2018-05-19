import React, { Component } from 'react';
import './App.css';

const Board = ({children}) => (
  <div className='board'>
    {children}
  </div>
)

const Tile = ({children, onClick, x, y, player}) => (
  <div className='tile' onClick={onClick} data-x={x} data-y={y}>
    {player}
  </div>
)

const Player = () => (
  <div className='player'></div>
)

const LevelOne = ({playerPosition, onClick}) => {
  console.log('LevelOne update')
  const game = []

  const setPlayer = (playerPosition, x, y) => {
    if (parseInt(playerPosition.x) === parseInt(x) && parseInt(playerPosition.y) === parseInt(y) ) {
      return <Player />
    }
    return null
  }

  for (let x = 0; x < 10; x++) {
    game[x] = []

    for (let y = 0; y < 10; y++) {
      game[x].push(
        <Tile
          key={`${x}-${y}`}
          onClick={onClick}
          x={x}
          y={y}
          player={setPlayer(playerPosition, x, y)}
        />
      )
    }
  }

  return (
    <Board>
      {game}
    </Board>
  )
}

class App extends Component {
  state = {
    playerPosition: {
      x: 0, // top bottom
      y: 2 // lleft right
    }
  }

  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.keysHandkler = this.keysHandkler.bind(this)
    this.movePlayer = this.movePlayer.bind(this)
  }

  keysHandkler (e) {
    console.log('e', e.code)
    switch (e.code) {
      case 'ArrowUp':
        this.movePlayer('ArrowUp')
        break;
      case 'ArrowDown':
        this.movePlayer('ArrowDown')
        break;
      case 'ArrowLeft':
        this.movePlayer('ArrowLeft')
        break;
      case 'ArrowRight':
        this.movePlayer('ArrowRight')
        break;
    }
  }

  movePlayer (dir) {
    console.log('dir', dir)
    let x = this.state.playerPosition.x
    let y = this.state.playerPosition.y
    const minX = 0
    const maxX = 9
    const minY = 0
    const maxY = 9

    switch (dir) {
      case 'ArrowUp':
        if (x > minX) {
          x = x - 1
        }
        break;
      case 'ArrowDown':
        if (x < maxX) {
          x = x + 1
        }
        break;
      case 'ArrowLeft':
        if (y > minY) {
          y = y - 1
        }
        break;
      case 'ArrowRight':
        if (y < maxY) {
          y = y + 1
        }
        break;
    }

    this.setState(prevState => ({
      playerPosition: {
        x: x,
        y: y
      }
    }))
  }

  componentWillMount () {
    document.addEventListener('keydown', this.keysHandkler.bind(this))
  }


  componentWillUnmount () {
    document.removeEventListener('keydown', this.keysHandkler.bind(this))
  }

  onClick (e) {
    const x = parseInt(e.target.dataset.x)
    const y = parseInt(e.target.dataset.y)

    if (! isNaN(x) || ! isNaN(y)) {
      this.setState(prevState => ({
        playerPosition: {
          x: x,
          y: y
        }
      }))
    }
  }

  render() {
    return (
      <div className="App">
        <LevelOne
          playerPosition={this.state.playerPosition}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default App;
