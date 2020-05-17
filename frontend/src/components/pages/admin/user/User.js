import React, {Component} from 'react';
import BaseUrl from './../../../../routes/BaseUrl';
import axios from 'axios';

import Main from './../template-admin/Main/Main';
import './../Admin.css';

import Logo from './../template-admin/Logo/Logo';
import Nav from './../template-admin/Nav/Nav';
import Footer from './../template-admin/Footer/Footer';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Inserir, Listar, Alterar e Excluir'
}

const inicial = {
    user: { name: '', email: ''},
    list: []
}

export default class User extends Component {

  state = { ...inicial };

  componentWillMount() {
      axios(BaseUrl).then(resp => {
          this.setState({ list: resp.data });
      })
  }

  limpar() {
      this.setState({ user: inicial.user });
  }

  criar() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${BaseUrl}/${user.id}` : BaseUrl
    axios[method](url, user)
        .then(resp => {
            const list = this.atualizarLista(resp.data)
            this.setState({ user: inicial.user, list })
        })
    }

  atualizarLista(user, add = true) {
    const list = this.state.list.filter(u => u.id !== user.id);
    if(add) list.unshift(user);
    return list;
  }

  atualizarCampos(e) {
      const user = { ...this.state.user };
      user[e.target.name] = e.target.value;

      this.setState({user: user});
  }
  
  renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.atualizarCampos(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.atualizarCampos(e)}
                                placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-outline-primary"
                            onClick={e => this.criar(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-outline-secondary ml-2"
                            onClick={e => this.limpar(e)}>
                            Limpar
                        </button>
                    </div>
                </div>
            </div>
        )
    }


  carregar(user) {
      this.setState({user: user});
  }

  remover(user) {
      axios.delete(`${BaseUrl}/${user.id}`).then(resp => {
          const list = this.atualizarLista(user, false);
          this.setState({ list: list});
      });
  }

  renderTable() {
    return (
        <table className="table mt-4">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {this.renderRows()}
            </tbody>
        </table>
    )
}

renderRows() {
    return this.state.list.map(user => {
        return (
            <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className="btn btn-warning"
                        onClick={() => this.carregar(user)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger ml-2"
                        onClick={() => this.remover(user)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    })
}

  render() {
      return (
        <React.Fragment>
          <div className="app">
            <Logo />
            <Nav />
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
            <Footer />
          </div>
        </React.Fragment> 
      );
  }
}
