import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
import { QRCode } from 'react-qr-svg';

export default class ChannelWebHookTableCell extends Component {
  render() {
    const {
      className, cssModule, header, mainText, smallText, color, value, children, variant, invitation, ...attributes
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
      <Card className={classes} {...attributes}>
        <CardBody>
          <div className="h4 m-0">{invitation.title}</div>
          <p>
            <QRCode
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="Q"
              value={invitation.code}
            />
          </p>
        </CardBody>
      </Card>
    );
  }
}

ChannelWebHookTableCell.propTypes = {
  invitation: PropTypes.object.isRequired,
  header: PropTypes.string,
  mainText: PropTypes.string,
  smallText: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  variant: PropTypes.string,
};

ChannelWebHookTableCell.defaultProps = {
  header: '89.9%',
  mainText: 'Lorem ipsum...',
  smallText: 'Lorem ipsum dolor sit amet enim.',
  // color: '',
  value: '25',
  variant: '',
};
