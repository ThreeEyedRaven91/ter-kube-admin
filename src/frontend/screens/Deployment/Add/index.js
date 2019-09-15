import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Form } from '@ter-form/form';
import { Box } from '../../../components';
import Config from '../../../configs';
import API from '../../../apis';
import template from './template';

export default class ChannelList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: {
        name: '',
      },
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
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

  submit() {
    const { token } = Config.userService.getUser();
    const { data: { name } } = this.state;
    API.channel.addChannel({
      token,
      name,
    }).then(() => {
      const { history } = this.props;
      history.push('/channel');
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Box
        title="Add Channel"
      >
        <Form
          template={template}
          value={data}
          onChange={this.onChange}
        />
        <Button color="primary" onClick={this.submit}>
          Save
        </Button>
      </Box>
    );
  }
}
