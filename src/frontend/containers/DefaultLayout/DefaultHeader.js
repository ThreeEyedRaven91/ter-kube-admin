import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Badge, Nav, NavItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg';
import sygnet from '../../assets/img/brand/sygnet.svg';
import Config from '../../configs';
import { HeaderDropdownNamespace, HeaderDropdownDashboard} from "../../components";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props, context) {
    super(props, context);
    this.logout = this.logout.bind(this);
  }

  logout() {
    Config.userService.logout();
  }

  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{
            src: logo, width: 89, height: 25, alt: 'CoreUI Logo',
          }}
          minimized={{
            src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo',
          }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="d-md-down-none" navbar>
          <HeaderDropdownNamespace />
        </Nav>
        <Nav className="ml-auto" navbar>
          <HeaderDropdownDashboard />
        {/*  <NavItem className="d-md-down-none">*/}
        {/*    <NavLink to="#" className="nav-link">*/}
        {/*      <i className="icon-bell" />*/}
        {/*      <Badge pill color="danger">5</Badge>*/}
        {/*    </NavLink>*/}
        {/*  </NavItem>*/}
        {/*  <NavItem className="d-md-down-none">*/}
        {/*    <NavLink to="#" className="nav-link"><i className="icon-list" /></NavLink>*/}
        {/*  </NavItem>*/}
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-location-pin" /></NavLink>
          </NavItem>
        </Nav>
         <AppAsideToggler className="d-lg-none" mobile />
      </>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
