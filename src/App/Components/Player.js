import React, { Component } from 'react';
import classNames from 'classnames'

const Player = ({dir}) => {
  const cls = classNames({
    'player': true,
    [dir]: true
  })

  return (
    <div className={cls}></div>
  )
}

export default Player