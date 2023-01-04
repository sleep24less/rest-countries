import React from 'react';
import { Link } from 'react-router-dom';

function CountryCard(props) {

  return (
    <Link to={`/${props.name}`} className="grid_item"
    >
      <img src={props.flag} alt={`Flag of ${props.name}`} className='flag'></img>
      <div className='info'>
        <h3 className='name'>{props.name}</h3>
        <ul className='info_list'>
          <li className='info_item'>Population: <span>{props.population}</span></li>
          <li className='info_item'>Region: <span>{props.region}</span></li>
          <li className='info_item'>Capital: <span>{props.capital}</span></li>
        </ul>
      </div>
    </Link>
  )
}

export default CountryCard