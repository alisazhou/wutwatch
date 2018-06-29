import React from 'react';
import _ from 'lodash';
import moment from 'moment';

import { buttonLight, typographyBody1, typographyTitleOnLight } from '../cssConstants';


const style = {
    ...typographyBody1,
    display: 'inline-block',
    position: 'relative',
    textAlign: 'center',
    width: '160px',
};

const divStyle = {
    ...typographyTitleOnLight,
    background: buttonLight,
    position: 'absolute',
    top: '15px',
    width: '100%',
    zIndex: 1,
};

const imgStyle = {
    paddingTop: '15px',
    width: '100%',
};

const MoviesListItem = props => {
    const finalImgStyle = _.clone(imgStyle);
    if (props.watched) {
        // gray out movie if it's been watched already
        finalImgStyle.WebkitFilter = 'grayscale(100%)';
        finalImgStyle.filter = 'grayscale(100%)';
    }

    return (
        <div style={style}>
            {props.watched && <div style={divStyle}>watched!</div>}
            <img src={props.posterUrl || '/static/no-image.jpg'} style={finalImgStyle} />
            <div>{props.name}</div>
            <div>{moment(props.releaseDate).year() || null}</div>
        </div>
    );
}

export default MoviesListItem;
