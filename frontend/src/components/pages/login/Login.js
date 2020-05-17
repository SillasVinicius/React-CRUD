import React, {Component} from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import Logo from "./../../../assets/imgs/logo.svg";
import { ContainerPrincipal, GlobalStyle  } from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      validate: {
        emailState: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const {validate} = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    this.setState({validate});
  }

  handleChange = async (event) => {
    const {target} = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const {name} = target;
    await this.setState({
      [name]: value,
    });
  };

  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`);
  }

  render() {
    const {email, password} = this.state;
    return (
      <React.Fragment>
        <GlobalStyle />
          <ContainerPrincipal>
            <Container fluid className="App">
              <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                <Col>
                  <img className="logo" src={Logo} alt="" />
                  <FormGroup>
                    <Label>
                      <strong>Email</strong>
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="myemail@email.com"
                      value={email}
                      valid={this.state.validate.emailState === "has-success"}
                      invalid={this.state.validate.emailState === "has-danger"}
                      onChange={(e) => {
                        this.validateEmail(e);
                        this.handleChange(e);
                      }}
                    />
                    <FormFeedback valid></FormFeedback>
                    <FormFeedback>
                      Digite um endereço de email valido.
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">
                      <strong>Senha</strong>
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="********"
                      value={password}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </FormGroup>
                </Col>
                <Button>Login</Button>
              </Form>
            </Container>
          </ContainerPrincipal>            
      </React.Fragment>
    );
  }
}


export default Login;
