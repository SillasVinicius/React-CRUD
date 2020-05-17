import React from 'react';
import {Jumbotron,Button,Container,Row, Col } from 'react-bootstrap';
import {NavigationBar} from "./../layouts/navigationBar/NavigationBar";
import {FooterBar} from './../layouts/footerBar/FooterBar';
import sign from './../../../assets/imgs/signs.svg';
import { ContainerPrincipal } from './styles';

export default (props) => {
    return (
        <div className="colors">
            <NavigationBar></NavigationBar>
            <ContainerPrincipal>
                <Container>
                    <Jumbotron>
                        <img src={sign} alt=""/>
                        <h1>Página Não Encontrada!</h1>
                        <Row className="justify-content-md-center">
                            <Col md={{ span: 6, offset: -7 }}>
                            <Button variant="dark" href="/"  >Voltar para pagina inicial</Button>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Container>
            </ContainerPrincipal>
            <FooterBar></FooterBar>
        </div>
    );
};