import * as React from 'react';

export const Button = ({ children, text, onClick, value }) => {
    
    return (
        <React.Fragment>
            <button value={value} onClick={onClick} type="button">{ text }</button>
            { children }
        </React.Fragment>
    )
}
