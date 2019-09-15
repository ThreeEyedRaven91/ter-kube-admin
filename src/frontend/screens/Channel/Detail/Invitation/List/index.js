import React from 'react';
import { Col, Row } from 'reactstrap';
import { BaseComponent, Box } from '../../../../../components';
import API from '../../../../../apis';
import Config from '../../../../../configs';
import ChannelWebHookTableCell from "./table.cell";

export default class ChannelDetailInvitationList extends BaseComponent {
  baseUrl = '/channel';
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: false,
      loading: false,
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }


  fetchData() {
    const { token } = Config.userService.getUser();
    API.channelInvitation.getAll({ token, channelId: this.id() })
      .then(({ data }) => {
        const { channelInvitations } = data;
        this.setState({ data: channelInvitations });
      });
  }

  render() {
    const { data } = this.state;
    return data && (
      <Box>
        <Row>
          {data.map(invitation => (
            <Col md={12} lg={6} xl={4}>
              <ChannelWebHookTableCell invitation={invitation} />
            </Col>
          ))}
        </Row>
      </Box>
    );
  }
}
