import React, { Component } from 'react';
import { InventaireItem } from './../Components/Scoreboard'

class InventaireItemContainer extends Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (
      <InventaireItem content='nop' />
    )
  }
}

export default InventaireItemContainer
