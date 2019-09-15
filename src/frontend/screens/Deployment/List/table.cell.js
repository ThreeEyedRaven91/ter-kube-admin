import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';

export default class DeploymentListCell extends Component {
  render() {
    const {
      className, cssModule, header, mainText, smallText,
      color, value, children, variant, deployment, ...attributes
    } = this.props;

    // demo purposes only
    const progress = { style: '', color, value };
    const card = { style: '', bgColor: '' };

    if (variant === 'inverse') {
      progress.style = 'progress-white';
      progress.color = '';
      card.style = 'text-white';
      card.bgColor = `bg-${color}`;
    }

    const classes = mapToCssModules(classNames(className, card.style, card.bgColor), cssModule);
    progress.style = classNames('progress-xs my-3', progress.style);

    return (

      <tr>
        <td className="text-center">
          <div className="avatar">
            {/*<img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />*/}
            <span className="avatar-status badge-success"></span>
          </div>
        </td>
        <td>
          <div>{deployment.metadata && deployment.metadata.name}</div>
          <div className="small text-muted">
            Created At: {deployment.metadata && deployment.metadata.creationTimestamp}
          </div>
        </td>
        <td className="text-center">
          {deployment.metadata && deployment.metadata.namespace}
        </td>
        <td>
          <div className="clearfix">
            <div className="float-left">
              <strong>Replica</strong>
            </div>
            <div className="float-right">
              <small className="text-muted">{deployment.spec.replicas} / {deployment.status.readyReplicas}</small>
            </div>
          </div>
          <Progress className="progress-xs" color="success" value={deployment.status.readyReplicas * 100 / deployment.spec.replicas} />
        </td>
        <td className="text-center">
          <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i>
        </td>
        <td>
          <div className="small text-muted">Last login</div>
          <strong>10 sec ago</strong>
        </td>
      </tr>
    );
  }
}

DeploymentListCell.propTypes = {
  deployment: PropTypes.object.isRequired,
};

DeploymentListCell.defaultProps = {
};