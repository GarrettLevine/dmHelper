import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Icon from '../Icon';

const propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  icon: PropTypes.string,
};

const defaultProps = {
  // Default props go here
};

export default function Header(props) {
  const { className, type, heading, subHeading, icon } = props;

  const headerClass = classNames('ui header', {
    sub: (type === 'sub-header'),
  }, className);

  const renderHeader = (headerType) => {
    switch (headerType) {
      case 'icon': {
        return (
          <h2 className={headerClass}>
            <Icon type={icon} />
            <div className="content">
              {heading}
              <div className="sub header">{subHeading}</div>
            </div>
          </h2>
        );
      }
      case 'sub-header': {
        <h2 className={headerClass}>
          {heading}
        </h2>
      }
      default: {
        return (
          <h2 className={headerClass}>
            {heading}
          </h2>
        );
      }
    }
  };
  
  return (
    <span>
      {renderHeader(type)}
    </span>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
