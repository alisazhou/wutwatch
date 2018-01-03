import React from 'react';
import moment from 'moment';

import { typographyBody1 } from '../cssConstants';


const style = {
    ...typographyBody1,
    display: 'inline-block',
    textAlign: 'center',
};

const imgStyle = {
    height: '250px',
    paddingTop: '15px',
    width: '150px',
};

const MoviesListItem = props =>
    <div style={style}>
        <img src={props.poster_url || '/static/no-image.jpg'} style={imgStyle} />
        <div>{props.name}</div>
        <div>{moment(props.release_date).year() || null}</div>
    </div>;

export default MoviesListItem;
