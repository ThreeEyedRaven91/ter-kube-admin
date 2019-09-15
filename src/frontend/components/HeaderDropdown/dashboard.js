import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import API from "../../apis";
import Config from '../../configs';
import BaseComponent from "../BaseComponent";

const Item = ({ title, checked, onClick}) => (
  <DropdownItem onClick={onClick}>
    <i className={`fa ${checked ? 'fa-check' : ''}`} style={{ color: 'green' }} />
    {' '}
    {title}
  </DropdownItem>
);

class HeaderDropdownDashboard extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],
      loading: false,
      loaded: false,
    };

    this.addRemover(Config.ConfigFilter.addListener(() => this.forceUpdate()));
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ loading: true });
    API.dashboard.get()
      .then(({ data }) => {
        const { dashboards } = data;
        this.setState({ data: dashboards });
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ loading: false, loaded: true }));
  }

  render() {
    const { data, loading, loaded } = this.state;
    const { dashboard } = Config.ConfigFilter.getFilters();
    return loaded && (
      <UncontrolledDropdown nav direction="down">
        <DropdownToggle nav>
          {dashboard ? `Dashboard: ${dashboard}` : 'Dashboard: None'}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            header
            tag="div"
            className="text-center"
          >
            <strong>Dashboard ({data && data.length})</strong>
          </DropdownItem>
          {data && data.map(_dashboard => (
            <Item
              key={_dashboard.title}
              title={_dashboard.title}
              checked={_dashboard.title == dashboard}
              onClick={() => Config.ConfigFilter.setFilters('dashboard', _dashboard.title)}
            />
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

export default HeaderDropdownDashboard;