import React from 'react';

const Scroll = (props) => {
    console.log(props.children);
    return (
        <div style={{overflowY: 'scroll', border: '2px dot black', height: '700px' }}>
            {props.children}
        </div>
    )
};

export default Scroll;