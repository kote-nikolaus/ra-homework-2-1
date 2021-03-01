import PortfolioModel from '../models/PortfolioModel';
import { useState } from 'react';
import React from 'react';
import './portfolio.css';
import Toolbar from './Toolbar';

export default function ProjectList(props) {
  return (
    <div className='project-list'>
      {
        props.projects.map(o => <img className='project-image' src={o.img} alt={o.category}/>)
      }
    </div>
  )
}
