import React from "react";
import {
  Jumbotron,
  Container,
  Card,
  CardDeck,
  Row,
  Col,
  CardImg
} from "react-bootstrap";
import Database from "./../../../../assets/imgs/database.svg";
import Code from "./../../../../assets/imgs/code.svg";
import Html from "./../../../../assets/imgs/html.svg";
import fundo from "./../../../../assets/imgs/fundo.jpg"
import { ContainerPrincipal, ButtonVejaMais, HoverButtonVejaMais } from './styles';

export const Header = () => (
  <ContainerPrincipal background={fundo}>
    <Jumbotron fluid>
      <div className="overlay">
        <Container>
          <Row className="text-content">
            <h1 className="title">
            Conquiste o emprego <br></br>
            dos seus sonhos
          </h1>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            inventore doloremque magni fugit corporis optio modi soluta. Cum
            eaque id, corporis ratione incidunt accusantium, perspiciatis
            nesciunt dignissimos sapiente distinctio alias?
          </p>
          
          </Row>
          <CardDeck>
            <Card>
              <CardImg
                top
                width="100%"
                src={Code}
                alt="Card image cap"
                className="logo"
              />
              <Card.Body>
                <Card.Title><strong>Back-end</strong></Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src={Html}
                alt="Card image cap"
                className="logo"
              />
              <Card.Body>
                <Card.Title><strong>Front-end</strong></Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src={Database}
                alt="Card image cap"
                className="logo"
              />
              <Card.Body>
                <Card.Title><strong>Banco de Dados</strong></Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. 
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <br></br>
          <Row className="justify-content">
            <Col md={{ span: 3, offset: 5 }}>
              <HoverButtonVejaMais>
                <ButtonVejaMais>
                  Veja mais
                </ButtonVejaMais>
              </HoverButtonVejaMais>   
            </Col>
          </Row>
        </Container>
      </div>
    </Jumbotron>
  </ContainerPrincipal>
);
