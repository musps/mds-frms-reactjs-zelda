import React, { Component } from 'react';
import classNames from 'classnames'
import TileConfig from './Config/Tile'

export const Board = ({children}) => (
  <div className='board'>
    {children}
  </div>
)

export const Player = () => (
  <div className='player'></div>
)

export const Tile = ({type, x, y, player}) => {
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

