import React, { Component } from 'react';
import classNames from 'classnames'

export const Board = ({children}) => (
  <div className='board'>
    {children}
  </div>
)

export const Player = ({dir}) => {
  const cls = classNames({
    'player': true,
    [dir]: true
  })

  return (
    <div className={cls}></div>
  )
}

export const Tile = ({type, x, y, player}) => {
  const cls = classNames({
    'tile': true,
    [type]: true
  })

  return (
    <div className={cls} data-x={x} data-y={y}>
      {player}
    </div>
  )
}

