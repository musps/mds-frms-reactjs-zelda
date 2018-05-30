import React, { Component } from 'react';
import TileConfig from './Config/Tile'

import Tile from './Components/Tile'
import Player from './Components/Player'

import movePlayer from './Actions/MovePlayer'
import attackPlayer from './Actions/AttackPlayer'

const Board = ({map, player, children}) => (
  <div className='board'>
    {children}
  </div>
)

const BoardContainer = class BoardContainer extends Component {
  state = {
    board: [],
    playerPosition: {
      dir: 'right',
      x: 5,
      y: 13
    }
  }

  constructor (props) {
    super (props)
    this.initBoard = this.initBoard.bind(this)
    this.renderMap = this.renderMap.bind(this)
    this.keysHandler = this.keysHandler.bind(this)
  }

  componentWillMount () {
    this.initBoard(this.props.map)
    document.addEventListener('keydown', this.keysHandler.bind(this))
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.keysHandler.bind(this))
  }

  keysHandler (e) {
    const setState = this.setState.bind(this)
    const playerPosition = this.state.playerPosition
    const board = this.state.board

    switch (e.code) {
      case 'ArrowUp':
        movePlayer(board, playerPosition, 'up', setState)
        break;
      case 'ArrowDown':
        movePlayer(board, playerPosition, 'down', setState)
        break;
      case 'ArrowLeft':
        movePlayer(board, playerPosition, 'left', setState)
        break;
      case 'ArrowRight':
        movePlayer(board, playerPosition, 'right', setState)
        break;
      case 'KeyQ':
        attackPlayer(board, playerPosition, setState)
        break;
    }
  }

  initBoard (map) {
    const _board = []
    for (let x = 0; x < map.length; x = x + 1) {
      _board[x] = []

      for (let y = 0; y < map[x].length; y = y + 1) {
        let tile = Object.assign({}, TileConfig[map[x][y]])
        tile.x = x
        tile.y = y
        _board[x][y] = tile
      }
    }

    this.setState({
      board: _board
    }) 
  }

  renderMap () {
    const playerPosition = this.state.playerPosition
    const _board = []
    const setPlayer = (playerPosition, x, y) => {
      if (parseInt(playerPosition.x, 10) === parseInt(x, 10) && parseInt(playerPosition.y, 10) === parseInt(y, 10) ) {
        return (<Player dir={playerPosition.dir} />)
      }
      return (null)
    }

    for (let x = 0; x < this.state.board.length; x = x + 1) {
      _board[x] = []

      for (let y = 0; y < this.state.board[x].length; y = y + 1) {
        _board[x].push(
          <Tile 
            config={this.state.board[x][y]}
            key={`${x}-${y}`}
            type={this.state.board[x][y].className} 
            x={x}
            y={y}
            player={setPlayer(playerPosition, x, y)}
          />
        )
      }
    }
    return _board
  }

  render () {
    return (
      <Board>
        {this.renderMap()}
      </Board>
    )
  }
}

export default BoardContainer
