import React, { Component } from 'react';
import classNames from 'classnames'
import './App.css';

import MapOne from './App/Maps/LevelOne'
import TileConfig from './App/Config/Tile'

const Board = ({children}) => (
  <div className='board'>
    {children}
  </div>
)

const Player = () => (
  <div className='player'></div>
)

const Tile = ({type, x, y, player}) => {
  const cls = classNames({
    'tile': true,
    [TileConfig[type].className]: true
  })

  return (
    <div className={cls} data-x={x} data-y={y}>
      {player}
    </div>
  )
}

const MapBulder = ({map, playerPosition}) => {
  const _map = []
  const setPlayer = (playerPosition, x, y) => {
    if (parseInt(playerPosition.x) === parseInt(x) && parseInt(playerPosition.y) === parseInt(y) ) {
      return <Player />
    }
    return null
  }

  for (let x = 0; x < map.length; x = x + 1) {
    _map[x] = []

    for (let y = 0; y < map[x].length; y = y + 1) {
      _map[x].push(
        <Tile 
          key={`${x}-${y}`}
          type={map[x][y]} 
          x={x}
          y={y}
          player={setPlayer(playerPosition, x, y)}
        />
      )
    }
  }

  return _map
}

class App extends Component {
  state = {
    playerPosition: {
      x: 0, // top <-> bottom
      y: 2 // left <-> right
    }
  }

  constructor (props) {
    super(props)
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
      case 'KeyQ':
        console.log('hit')
        break;
    }
  }

  movePlayer (dir) {
    let x = this.state.playerPosition.x
    let y = this.state.playerPosition.y
    const minX = 0
    const maxX = 19
    const minY = 0
    const maxY = 19

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

    const tileKey = MapOne[x][y]

    if (TileConfig[tileKey].canWalk) {

      this.setState(prevState => ({
        playerPosition: {
          x: x,
          y: y
        }
      }))

    }
  }

  componentWillMount () {
    document.addEventListener('keydown', this.keysHandkler.bind(this))
  }


  componentWillUnmount () {
    document.removeEventListener('keydown', this.keysHandkler.bind(this))
  }

  render() {
    return (
      <div className="App">
        <Board>
          <MapBulder map={MapOne} playerPosition={this.state.playerPosition} />
        </Board>
      </div>
    );
  }
}

export default App;
