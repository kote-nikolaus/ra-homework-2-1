import PortfolioModel from '../models/PortfolioModel';
import { useState } from 'react';
import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList'

export default function Portfolio() {

  const [portfolio, setFilter] = useState(new PortfolioModel());

  const onSelectFilter = filter => {
    setFilter(prevPortfolio => {
      return {...prevPortfolio, selected: filter};
    });
  };

  return (
    <div>
    <Toolbar
      filters={portfolio.filters}
      selected={portfolio.selected}
      onSelect={onSelectFilter}/>
    <ProjectList
      projects={portfolio.projects.filter(o => (o.category === portfolio.selected || portfolio.selected === 'All'))}/>
    </div>
  )
}
