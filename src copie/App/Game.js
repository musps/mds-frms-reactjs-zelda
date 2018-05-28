import React, { Component } from 'react';
import MapOne from './Maps/LevelOne'
import Board from './Board'
import TileConfig from './Config/Tile'

const Game = class Game extends Component {
  state = {
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="App">
        <Board map={MapOne} />
      </div>
    )
  }
}

export default Game
