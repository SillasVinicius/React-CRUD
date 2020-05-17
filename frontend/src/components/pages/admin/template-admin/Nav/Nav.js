import React from 'react';
import './Nav.css';
import NavItem from './../Nav-item/Nav-item';

export default (props) => {
  return (
      <aside className="menu-area">
          <nav className="menu">
              <NavItem link="/admin" icon="home" nameItem="Início"/>
              <NavItem link="/admin/users" icon="users" nameItem="Usuários"/>
              <NavItem link="/" icon="sign-out" nameItem="Sair"/>
          </nav>
      </aside>
  );
}
