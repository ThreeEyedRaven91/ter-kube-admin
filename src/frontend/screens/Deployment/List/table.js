import React from 'react';
import {Table} from 'reactstrap';
import PropTypes from 'prop-types';
import LoadingOverlay from 'react-loading-overlay';
import API from '../../../apis';
import DeploymentListCell from './table.cell';
import {BaseComponent} from "../../../components";
import Config from "../../../configs";

export default class NamespaceListTable extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],
      loading: false,
      loaded: false,
    };

    this.addRemover(Config.ConfigFilter.addListener(() => this.fetchData()));
  }

  componentDidMount() {
    this.fetchData();
    this.polling(() => this.fetchData(), 10000);
  }

  fetchData() {
    const { namespace, dashboard } = Config.ConfigFilter.getFilters();
    this.setState({ loading: true });
    API.deployment.get({ namespace, dashboard })
      .then(({ data }) => {
        const { deployments } = data;
        this.setState({ data: deployments });
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ loading: false, loaded: true }));
  }

  render() {
    const { data, loading, loaded } = this.state;
    const { onSelect } = this.props;
    const { translate } = this;
    return (
      <LoadingOverlay active={loading && !loaded} spinner text={translate('general')('loading')}>
        <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
          <thead className="thead-light">
          <tr>
            <th className="text-center"><i className="icon-people"></i></th>
            <th>Pod</th>
            <th className="text-center">Namespace</th>
            <th>Usage</th>
            <th className="text-center">Payment Method</th>
            <th>Activity</th>
          </tr>
          </thead>
          <tbody>
          {data && data.map(deployment => (
            <DeploymentListCell
              deployment={deployment}
            />
          ))}
          </tbody>
        </Table>
      </LoadingOverlay>
    );
  }
}

NamespaceListTable.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

NamespaceListTable.defaultProps = {

};
