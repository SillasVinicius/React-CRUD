import React from 'react';
import logo from './../../../../../assets/imgs/logo.svg';
import './Logo.css';
import { Link } from 'react-router-dom';

export default (props) => {
  return(
      <aside className="logo">
          <Link className="logo" to="/admin">
            <img src={logo} alt="logo"/>
          </Link>
      </aside>
  );
}