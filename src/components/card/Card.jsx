import React from 'react';
import './Card.scss';
import classNames from 'classnames';

const Card = ({ children }) => {
    const className = classNames('card', 'flex-center');
    return <div className={className}>{children}</div>;
};

export default Card;
