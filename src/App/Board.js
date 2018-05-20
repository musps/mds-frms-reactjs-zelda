import React, { Component } from 'react';
import TileConfig from './Config/Tile'
import {
  Tile,
  Player
} from './Tools'
import movePlayer from './Actions/MovePlayer'

const Board = ({map, player, children}) => (
  <div className='board'>
    {children}
  </div>
)

const BoardContainer = class BoardContainer extends Component {
  state = {
    board: [],
    playerPosition: {
      dir: 'up',
      x: 11,
      y: 11
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

    switch (e.code) {
      case 'ArrowUp':
        movePlayer(playerPosition, 'ArrowUp', setState)
        break;
      case 'ArrowDown':
        movePlayer(playerPosition, 'ArrowDown', setState)
        break;
      case 'ArrowLeft':
        movePlayer(playerPosition, 'ArrowLeft', setState)
        break;
      case 'ArrowRight':
        movePlayer(playerPosition, 'ArrowRight', setState)
        break;
      case 'KeyQ':
        console.log('hit')
        break;
    }
  }

  initBoard (map) {
    const _board = []
    for (let x = 0; x < map.length; x = x + 1) {
      _board[x] = []

      for (let y = 0; y < map[x].length; y = y + 1) {
        _board[x][y] = TileConfig[map[x][y]]
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
