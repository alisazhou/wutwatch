import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { background800, textNormal } from '../cssConstants';


const style = {
    divStyle: {
        clear: 'both',
        marginBottom: '15px',
    },
    fieldStyle: {
        background: background800,
        borderWidth: '0px 0px 2px 0px',
        color: 'inherit',
        float: 'right',
        font: 'inherit',
        height: '12px',
    },
};

const FieldGroup = props =>
    <div style={style.divStyle}>
        {props.label}
        <Field
            component={props.fieldComponent}
            type={props.fieldType}
            name={props.fieldName}
            style={style.fieldStyle}
        />
    </div>;

export default FieldGroup;
