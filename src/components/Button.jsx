import React from 'react';

import '../assets/styles/Button.css';

const Button = props => {

    const variant = props.variant ? `${props.variant} ` : '';
    const disableShadow = props.disableShadow ? `disableShadow ` : '';
    const disabled = props.disabled ? `disabled ` : '';
    const startIcon = props.startIcon ? <span class="material-icons">{props.startIcon}</span> : '';
    const endIcon = props.endIcon ? <span class="material-icons">{props.endIcon}</span> : '';
    const icon = props.endIcon || props.startIcon ? "icon" : '';
    const size = props.size ? `${props.size} ` : '';
    const color = props.color ? `${props.color}` : '';
    const hovered = props.hovered ? 'hovered ' : '';
    const text = disabled ? 'Disabled' : color === 'secondary' ? 'Secondary' : color === 'danger' ? 'Danger' : 'Default';

    return (
        <button className={`button ${hovered+variant+disableShadow+disabled+size+color+icon}`}>{startIcon}{text}{endIcon}</button>
    );
}

export default Button;