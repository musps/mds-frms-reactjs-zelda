import React, { Component } from 'react'
import MapOne from './Maps/LevelOne'
import Board from './Board'
import TileConfig from './Config/Tile'
import Scoreboard, {
  PlayerInfo,
  Inventaire,
  InventaireItem,
  Info,
  InfoItem
} from './Components/Scoreboard'

const Game = class Game extends Component {
  state = {
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="game">
        <Board map={MapOne} />
        <Scoreboard>

          <Info title='Board'>
            <InfoItem name='Map' value='1' />
          </Info>

          <Info title='Player' fullfill={true}>
            <InfoItem name='HP' value='10' />
            <InfoItem name='LEVEL' value='10' />
            <InfoItem name='EXP' value='10' />
            <InfoItem name='ATTACK SPEED' value='10' />
            <InfoItem name='MOVE SPEED' value='10' />
            <InfoItem name='DEF' value='10' />
          </Info>

          <Inventaire>
            <InventaireItem />
            <InventaireItem />
            <InventaireItem />
            <InventaireItem />
            <InventaireItem />
            <InventaireItem />
            <InventaireItem />
            <InventaireItem />
          </Inventaire>
        </Scoreboard>
      </div>
    )
  }
}

export default Game
