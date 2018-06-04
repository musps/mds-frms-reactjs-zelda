import React, { Component } from 'react';
import classNames from 'classnames'
import './styles.css'

const Scoreboard = ({children}) => (
  <div className='scoreboard'>
    <h1 className='scoreboard-title'>Scoreboard</h1>
    {children}
  </div>
)

const InfoCls = (fullfill) => {
  return classNames({
    'info': true,
    'fullfill': fullfill
  });
}

export const Info = ({title, fullfill, children}) => (
  <div className={InfoCls(fullfill)}>
    <h1 className='info-title'># {title}</h1>
    {children}
  </div>
)

export const InfoItem = ({name, value}) => (
  <div className='info-item'>
    <h1>{name}</h1>
    <h2>{value}</h2>
  </div>
)

export const Inventaire = ({children}) => (
  <div className='inventaire'>
    {children}
  </div>
)

export const InventaireItem = ({content}) => {
  return (
  <div className='inventaire-item'>
    {content}
  </div>
  )
}

export default Scoreboard
