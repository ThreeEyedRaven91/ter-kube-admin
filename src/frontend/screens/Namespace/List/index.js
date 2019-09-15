import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { BaseComponent, Box } from '../../../components';
import ChannelListTable from './table';

export default class NamespaceList extends BaseComponent {
  translationGroup = 'namespace';

  baseUrl = '/namespace';

  render() {
    const { history } = this.props;
    const { t, translate } = this;
    return (
      <Box
        title={t('title')}
      >
        <ChannelListTable
          onRef={(ref) => this.table = ref}
          onSelect={(channelId) => history.push(`/namespace/${channelId}`)}
        />
      </Box>
    );
  }
}

NamespaceList.propTypes = {
  history: PropTypes.object,
};

NamespaceList.defaultProps = {
  history: null,
};
