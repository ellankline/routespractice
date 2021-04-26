import React from 'react';

const Input = (props) => {
    if (!props.word) {
        return (
            <h1>Welcome</h1>
        )} else {
        if (isNaN(props.word)) {
        return (
            <h1 style=
                {props.textcolor ? {
                    color: props.textcolor,
                    backgroundColor: props.background
                } : null}>The word is: {props.word}</h1>
        )
    } else {
        return (
            <h1>The number is: {props.word}</h1>
        )
    }}
};

export default Input;