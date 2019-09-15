import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';

export default class PodListCell extends Component {
  render() {
    const {
      className, cssModule, header, mainText, smallText,
      color, value, children, variant, pod, ...attributes
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
          <div>{pod.metadata && pod.metadata.name}</div>
          <div className="small text-muted">
            <span>{pod.status}</span> | Created At: {pod.createdAt}
          </div>
        </td>
        <td className="text-center">
          {pod.metadata && pod.metadata.namespace}
        </td>
        <td className="text-center">
          {pod.spec && pod.spec.nodeName}
        </td>
        <td>
          <div className="clearfix">
            <div className="float-left">
              <strong>50%</strong>
            </div>
            <div className="float-right">
              <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
            </div>
          </div>
          <Progress className="progress-xs" color="success" value="50" />
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

PodListCell.propTypes = {
  pod: PropTypes.object.isRequired,
};

PodListCell.defaultProps = {
};