import React from 'react';
import {Nav ,Navbar, Button}from 'react-bootstrap';
import Logo from './../../../../assets/imgs/logo.svg';
import { Container } from './styles';

export const NavigationBar = ()=>(
    <Container>
        <Navbar id="navbar" fixed="top" expand= "lg ">
            <Navbar.Brand id="logo" href="/">
            <img
                alt=""
                src={Logo}
                width="70"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            RoadMap</Navbar.Brand>
            <Navbar.Toggle aria-controls= "basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item >
                        <Nav.Link href="/">FAQ</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link href="/">Possui Cadastro ?</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Button variant="outline-light" href="/login">Login</Button>&nbsp;&nbsp;
                    </Nav.Item>
                    <Nav.Item >
                        <Button variant="outline-danger" href="/admin">Admin</Button>
                    </Nav.Item>           
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        <div>
            <hr/>
        </div>
    </Container>
)