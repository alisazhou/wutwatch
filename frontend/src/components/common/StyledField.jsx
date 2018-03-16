import React from 'react';
import { Field } from 'redux-form';

import { backgroundTitle, background800, typographyBody2 } from '../cssConstants';


const defaultStyle = {
    ...typographyBody2,
    background: 'rgba(0, 0, 0, 0)',
    border: 'none',
    borderBottom: '1px dotted',
    borderBottomColor: background800,
    fontStyle: 'italic',
    outline: 'none',
    width: 'fit-content',
};

const StyledField = props =>
    <Field component="input" type="text"
        name={props.name}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        style={{...defaultStyle, ...props.additionalStyle}}
    />;


export default StyledField;
