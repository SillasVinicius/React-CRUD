import React from 'react';
import Main from './../template-admin/Main/Main';
import './../Admin.css';

import Logo from './../template-admin/Logo/Logo';
import Nav from './../template-admin/Nav/Nav';
import Footer from './../template-admin/Footer/Footer';

export default (props) => {
  return (
    <React.Fragment>
      <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Início" subtitle="Projeto que realiza cadastro e manutenção de informações.">
            <div className="display-4">Bem Vindo!</div>
            <hr></hr>
            <p className="mb-0">Sistema feito em ReactJs que realiza as operações de Inserção, Deleção, Listagem e Atualização de informações vindas de uma base de dados.</p>
        </Main>
        <Footer />
      </div>
    </React.Fragment> 
  );
}
