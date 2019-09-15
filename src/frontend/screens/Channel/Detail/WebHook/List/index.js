import React from 'react';
import { BaseComponent, Box } from '../../../../../components';
import API from '../../../../../apis';
import Config from '../../../../../configs';
import ChannelWebHookTableCell from "./table.cell";

export default class ChannelDetailWebHookList extends BaseComponent {
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
    API.channelWebHook.getAll({ token, channelId: this.id() })
      .then(({ data }) => {
        const { channelWebHooks } = data;
        this.setState({ data: channelWebHooks });
      });
  }

  render() {
    const { data } = this.state;
    return data && (
      <Box>
        {data.map(webHook => <ChannelWebHookTableCell webHook={webHook} />)}
      </Box>
    );
  }
}
