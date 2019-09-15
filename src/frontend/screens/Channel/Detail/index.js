import React from 'react';
import { Col, Row } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import { BaseComponent, Box, TabLink } from '../../../components';
import API from '../../../apis';
import Config from '../../../configs';
import moment from "moment";
import ChannelDetailWebHookList from "./WebHook/List";
import ChannelDetailInvitationList from "./Invitation/List";

export default class ChannelDetail extends BaseComponent {
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
    API.channel.getChannel({ token, id: this.id() })
      .then(({ data }) => {
        const { channel } = data;
        this.setState({ data: channel });
      });
  }

  render() {
    const { data } = this.state;
    const { history } = this.props;
    return data && (
      <Row>
        <Col xs={4} lg={3}>
          <Box>
            <Row>
              <Col xs={2} />
              <Col xs={10}>
                <h3>{data.name}</h3>
                <p>Owner: {data.owner && data.owner.username}</p>
                <p>Created at: {data.owner && moment(data.owner.created_at).format('ll')}</p>
              </Col>
            </Row>
            <hr />
            <TabLink
              tabs={[
                { title: 'DASHBOARD', path: this.base(`${this.id()}/dashboard`) },
                { title: 'INVITATION', path: this.base(`${this.id()}/invitation`) },
                { title: 'WEBHOOK', path: this.base(`${this.id()}/web_hook`) },
              ]}
              history={history}
            />
          </Box>
        </Col>
        <Col xs={8} lg={9}>
          <Switch>
            <Route path={this.route(':id/web_hook')} name="WebHook" component={ChannelDetailWebHookList} />
            <Route path={this.route(':id/invitation')} name="Invitation" component={ChannelDetailInvitationList} />
            {/*<Route path={this.route(':userId/edit')} name={translate('general')('edit')} component={UserEdit} />*/}
            {/*<Route path={this.route(':userId/delete')} name={translate('general')('delete')} component={UserDelete} />*/}
          </Switch>
        </Col>
      </Row>
    );
  }
}
