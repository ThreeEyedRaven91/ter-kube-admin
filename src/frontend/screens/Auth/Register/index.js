import React, { Component } from 'react';
import {
  Button, Card, CardBody, CardFooter, Col, Container, Row,
} from 'reactstrap';
import { Form } from '@ter-form/form';
import { toast } from 'react-toastify';
import template from './template';
import API from '../../../apis';

class Register extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: {
        username: '',
        password: '',
        confirmPassword: '',
      },
    };

    this.onChange = this.onChange.bind(this);
    this.register = this.register.bind(this);
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

  register() {
    const { data: { username, password, confirmPassword } } = this.state;
    if (confirmPassword !== password) {
      toast.error('Password and Confirm password must be matched');
      return;
    }
    const { history } = this.props;
    API.user.register({
      username,
      password,
      type: 'username',
    }).then(() => {
      toast.success('Register success');
      history.push('/login');
    })
      .catch((error) => toast.error(error.message));
  }

  render() {
    const { data } = this.state;

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <Form
                    template={template}
                    value={data}
                    onChange={this.onChange}
                  />
                  <Button color="success" block onClick={this.register}>Create Account</Button>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
