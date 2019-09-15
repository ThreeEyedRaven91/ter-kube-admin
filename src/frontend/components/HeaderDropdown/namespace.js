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

class HeaderDropdownNamespace extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],
      loading: false,
      loaded: false,
    };

    this.didSelectNamespace = this.didSelectNamespace.bind(this);
    this.addRemover(Config.ConfigFilter.addListener(() => this.fetchData()));
  }

  componentDidMount() {
    this.fetchData();
    this.polling(() => this.fetchData(), 10000);
  }

  fetchData() {
    this.setState({ loading: true });
    const { dashboard } = Config.ConfigFilter.getFilters();
    API.namespace.get({ dashboard })
      .then(({ data }) => {
        const { namespaces } = data;
        this.setState({ data: namespaces });
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ loading: false, loaded: true }));
  }

  didSelectNamespace(namespace) {
    if (namespace) {
      Config.ConfigFilter.setFilters('namespace', namespace.metadata.name);
      Config.ConfigFilter.setFilters('allNamespaces', undefined);
    } else {
      Config.ConfigFilter.setFilters('namespace', undefined);
      Config.ConfigFilter.setFilters('allNamespaces', true);
    }
  }

  render() {
    const { data, loading, loaded } = this.state;
    const { namespace, allNamespaces } = Config.ConfigFilter.getFilters();
    return loaded && (
      <UncontrolledDropdown nav direction="down">
        <DropdownToggle nav>
          {namespace ? `Namespace: ${namespace}` : 'Namespace: All'}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            header
            tag="div"
            className="text-center"
          >
            <strong>Namespace ({data && data.length})</strong>
          </DropdownItem>
          <Item
            title="All namespace"
            checked={allNamespaces}
            onClick={() => this.didSelectNamespace()}
          />
          {data && data.map(n => (
            <Item
              key={n.id}
              title={n.metadata.name}
              checked={namespace === n.metadata.name}
              onClick={() => this.didSelectNamespace(n)}
            />
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

export default HeaderDropdownNamespace;