import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import Icon from '../Icon';

const propTypes = {
  className: PropTypes.string,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

const defaultProps = {
  // Default props go here
};

export default function NavLink(props) {
  const { disabled, icon, path, text, className } = props;

  const linkClass = classNames('item', className, {
    disabled,
  });

  return (
    <Link
      className={linkClass}
      to={path}
    >
      <Icon type={icon} />
      {text}
    </Link>
  );
}

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;
