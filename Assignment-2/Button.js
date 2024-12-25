import React from 'react';

const Button = (props) => {
    const handleClick = (e) => {
        if (props.customClick) {
            props.customClick();
        } else {
            props.ClickHandle(e);
        }
    };

    return (
        <button className="ButtonStyle" value={props.label} onClick={handleClick}>
            {props.label}
        </button>
    );
};

export default Button;
