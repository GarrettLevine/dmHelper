import React, { PropTypes } from 'react';

const propTypes = {
    children: PropTypes.element,
    header: PropTypes.string,
    subHeader: PropTypes.string,
};

const defaultProps = {
// Default props go here
};

export default function Card(props) {
    const { children, header, subHeader } = props;

    return (
        <div className="ui card">
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
