import React from 'react';
import './Nav-item.css';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <>
        <Link to={props.link}>
            <i className={`fa fa-${props.icon}`}></i> {props.nameItem}
        </Link>
    </>
  );
}
