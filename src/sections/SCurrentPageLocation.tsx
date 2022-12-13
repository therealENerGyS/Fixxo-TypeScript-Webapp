import React from 'react';
import { NavLink } from 'react-router-dom'

interface LocationType {
  currentPage: string
  parentPage?: string
}

const SCurrentPageLocation: React.FC<LocationType> = ({ currentPage, parentPage }) => {
  return (
    <section className="current-page-location">
      <div className="_container">
        <ul className="location-text">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {
            (parentPage != undefined) ? <li><NavLink to={`/${parentPage}`}>{parentPage}</NavLink></li> : ""
          }
          <li>{currentPage}</li>
        </ul>
      </div>
    </section>
  )
}

export default SCurrentPageLocation;
