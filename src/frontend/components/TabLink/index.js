import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

export default class TabLink extends Component {
  render() {
    const { tabs, history } = this.props;
    const { pathname } = history.location;

    return tabs && tabs.map((tab) => (
      <Button
        block
        color={pathname.indexOf(tab.path) !== -1 ? 'dark' : 'ghost-dark'}
        onClick={() => { history.push(tab.path); }}
        className="text-left"
      >
        {tab.title}
      </Button>
    ));
  }
}

TabLink.propTypes = {
  tabs: PropTypes.array,
  history: PropTypes.object,
};

TabLink.defaultProps = {
  tabs: [],
  history: null,
};
