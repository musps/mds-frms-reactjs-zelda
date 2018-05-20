import React, { Component } from 'react';
import {
  Board,
  Tile,
  Player
} from './Tools'
import MapOne from './Maps/LevelOne'
import TileConfig from './Config/Tile'

const Game = class Game extends Component {
  state = {
    board: [],
    playerPosition: {
      x: 11,
      y: 11
    }
  }

  constructor (props) {
    super(props)
    this.mapBuild = this.mapBuild.bind(this)
    this.keysHandkler = this.keysHandkler.bind(this)
    this.movePlayer = this.movePlayer.bind(this)
  }

  componentWillMount () {
    this.initBoard(MapOne)
    this.mapBuild()
    document.addEventListener('keydown', this.keysHandkler.bind(this))
  }


  componentWillUnmount () {
    document.removeEventListener('keydown', this.keysHandkler.bind(this))
  }

  initBoard (map) {
    const _board = []
    for (let x = 0; x < map.length; x = x + 1) {
      _board[x] = []

      for (let y = 0; y < map[x].length; y = y + 1) {
        _board[x][y] = TileConfig[map[x][y]]
      }

    }

    console.log('_board', _board)

  }

  mapBuild () {
    const playerPosition = this.state.playerPosition
    const _board = []
    const setPlayer = (playerPosition, x, y) => {
      if (parseInt(playerPosition.x) === parseInt(x) && parseInt(playerPosition.y) === parseInt(y) ) {
        return <Player />
      }
      return null
    }

    for (let x = 0; x < MapOne.length; x = x + 1) {
      _board[x] = []

      for (let y = 0; y < MapOne[x].length; y = y + 1) {
        _board[x].push(
          <Tile 
            key={`${x}-${y}`}
            type={MapOne[x][y]} 
            x={x}
            y={y}
            player={setPlayer(playerPosition, x, y)}
          />
        )
      }
    }

    return _board
  }

  keysHandkler (e) {
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
        ...prevState,
        playerPosition: {
          x: x,
          y: y
        }
      }))

    }
  }

  render () {
    return (
      <div className="App">
        <Board>
          {this.mapBuild()}
        </Board>
      </div>
    )
  }
}

export default Game