import React from 'react';

import "./Button.css"

const Button = ({ onButtonClick, content, type, classprop }) => {
    return <div className={`Button ${content === '0' ? 'zero' : ''} ${type || ''} ${classprop}`} onClick={onButtonClick(content)}>{content}</div>
}

export default Button;