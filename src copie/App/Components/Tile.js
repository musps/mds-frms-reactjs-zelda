import React, { Component } from 'react';
import classNames from 'classnames'

const TileClassName = (dir) => {
  return classNames({
    'tile': true,
    [dir]: true
  })
}

const Tile = (cls, x, y) => (
  <div className={cls} data-x={x} data-y={y}>
  </div>
)

class TileComponent extends Component {
  state = {
    config: {}
  }

  constructor (props) {
    super(props)
    console.log('tile')
  }

  render () {
    return (
      <div className='tilte'></div>
    )
  }
}

export default TileComponent
