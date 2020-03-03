import React from 'react';

const Text = (props) => {
    return (
        <div className="text">
            <h2>{props.title}</h2>
            {props.content}
            <blockquote>{props.citationJap} <br/> "{props.citationTrad}"</blockquote>
        </div>
    )
};

export default Text;