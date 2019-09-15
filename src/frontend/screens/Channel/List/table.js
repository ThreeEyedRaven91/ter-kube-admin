import React from 'react';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import LoadingOverlay from 'react-loading-overlay';
import API from '../../../apis';
import Config from '../../../configs';
import ChannelListTableCell from './table.cell';
import {BaseComponent} from "../../../components";

export default class ChannelListTable extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],
      loading: false,
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { token } = Config.userService.getUser();
    this.setState({ loading: true });
    API.channel.getChannels({ token })
      .then(({ data }) => {
        const { channels } = data;
        this.setState({ data: channels });
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ loading: false, loaded: true }));
  }

  render() {
    const { data, loading, loaded } = this.state;
    const { onSelect } = this.props;
    const { translate } = this;
    return (
      <LoadingOverlay active={loading} spinner text={translate('general')('loading')}>
        <Row>
          {data && data.map((channel) => (
            <Col sm={6} md={4} lg={3} key={channel.id}>
              <a onClick={() => onSelect(channel.id)}>
                <ChannelListTableCell
                  channel={channel}
                />
              </a>
            </Col>
          ))}
        </Row>
      </LoadingOverlay>
    );
  }
}

ChannelListTable.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

ChannelListTable.defaultProps = {

};
