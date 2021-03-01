import PortfolioModel from '../models/PortfolioModel';
import { useState } from 'react';
import React from 'react';
import './portfolio.css';


export default function Toolbar(props) {

  const onSelect = (filter) => {
    props.onSelect(filter);
  }

  return (
    <ul className='toolbar'>
      {
        props.filters.map(o => <li>
          <button className={props.selected === o ? 'pressed-button': ''} onClick={(e) => onSelect(o)}>{o}</button></li>
        )
      }
    </ul>
  )
}
