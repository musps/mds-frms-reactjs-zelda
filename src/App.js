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
      x: 0,
      y: 0
    }
  }

  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this)
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
