import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { BaseComponent, Box } from '../../../components';
import ChannelListTable from './table';

export default class ChannelList extends BaseComponent {
  translationGroup = 'channel';

  baseUrl = '/channel';

  render() {
    const { history } = this.props;
    const { t, translate } = this;
    return (
      <Box
        title={t('title')}
      >
        <Button
          color="primary"
          onClick={() => history.push('/channel/add')}
        >
          {translate('general')('add')}
        </Button>
        <hr />
        <ChannelListTable
          onRef={(ref) => this.table = ref}
          onSelect={(channelId) => history.push(`/channel/${channelId}`)}
        />
      </Box>
    );
  }
}

ChannelList.propTypes = {
  history: PropTypes.object,
};

ChannelList.defaultProps = {
  history: null,
};
