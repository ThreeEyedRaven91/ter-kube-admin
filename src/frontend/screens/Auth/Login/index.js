import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Card, CardBody, CardGroup, Col, Container, Row,
} from 'reactstrap';
import { Form } from '@ter-form/form';
import { toast } from 'react-toastify';
import Config from '../../../configs';
import API from '../../../apis';
import template from './template';

class Index extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: {
        username: '',
        password: '',
      },
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange({ key, value }) {
    this.setState((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        [key]: value,
      },
    }));
  }

  login() {
    const { data: { username, password } } = this.state;
    API.user.login({
      username,
      password,
      type: 'username',
    }).then(({ data }) => {
      const { login: { token } } = data;
      Config.userService.setUser({ token });
      Config.userService.saveUser();
      toast.success('Login Success');
    })
      .catch((error) => toast.error(error.message));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>NoticeeMe</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <Form
                      template={template}
                      value={data}
                      onChange={this.onChange}
                    />
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4" onClick={this.login}>Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Start with endless free trial.
                      </p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Index;
