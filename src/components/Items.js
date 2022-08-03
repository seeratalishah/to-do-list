import React from 'react';
import '../styles/items.css';

function Items(props) {
  return (
    //items list component
        <li className='list-item'><span>{props.item}</span><i className="fa-solid fa-trash" onClick={()=>{props.onSelect(props.id)}}></i></li>
  )
}

export default Items;