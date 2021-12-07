import React from "react";
import "./Card.scss";
import classNames from "classnames";

const Card = (props) => {
	const className = classNames("card", "flex-center");
	return <div className={className}>{props.children}</div>;
};

export default Card;
