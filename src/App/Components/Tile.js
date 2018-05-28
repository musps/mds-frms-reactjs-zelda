import React, { Component } from 'react';
import classNames from 'classnames'

const TileClassName = (config) => {
  let cls = {
    'tile': true,
    [config.className]: true
  }

  if (config.canBeDestroyed) {
    cls[config.className + '-' + config.destroyConfig.hp] = true
  }
  return classNames(cls)
}

const Tile = ({x, y, config, children}) => (
  <div className={TileClassName(config)} data-x={x} data-y={y}>
    {children}
  </div>
)

class TileComponent extends Component {
  state = {
    x: null,
    y: null,
    config: {}
  }

  constructor (props) {
    super(props)
    this.init = this.init.bind(this)
    console.log('tile component')
  }

  componentWillMount () {
    this.init(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.init(nextProps)
  }

  init (props) {
    this.setState({
      x: props.x,
      y: props.y,
      config: props.config
    })
  }

  render () {
    return (
      <Tile
        config={this.state.config}
        x={this.state.x}
        y={this.state.y}>
        {this.props.player}
      </Tile>
    )
  }
}

export default TileComponent
