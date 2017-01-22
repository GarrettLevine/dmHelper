import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    header: PropTypes.string,
    subHeader: PropTypes.string,
};

const defaultProps = {
// Default props go here
};

export default function Card(props) {
    const { className, children, header, subHeader } = props;

    return (
        <div className={classNames('ui card', className)}>
            <div className="content">
                <div className="header">{header}</div>
                <div className="meta">
                    <span>{subHeader}</span>
                </div>
                <p></p>
            </div>
            <div className="extra content">
                {children}
            </div>
        </div>
    );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
