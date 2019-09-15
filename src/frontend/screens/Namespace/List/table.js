import React from 'react';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import LoadingOverlay from 'react-loading-overlay';
import API from '../../../apis';
import NamespaceListCell from './table.cell';
import {BaseComponent} from "../../../components";

export default class NamespaceListTable extends BaseComponent {
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
    this.setState({ loading: true });
    API.namespace.get()
      .then(({ data }) => {
        const { namespaces } = data;
        this.setState({ data: namespaces });
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
          {data && data.map((namespace) => (
            <Col sm={6} md={4} lg={3} key={namespace.id}>
              <a onClick={() => onSelect(namespace.id)}>
                <NamespaceListCell
                  namespace={namespace}
                />
              </a>
            </Col>
          ))}
        </Row>
      </LoadingOverlay>
    );
  }
}

NamespaceListTable.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

NamespaceListTable.defaultProps = {

};
