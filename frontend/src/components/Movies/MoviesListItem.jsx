import React from 'react';


const style = {
    display: 'inline-block',
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
        <div>{props.release_date}</div>
    </div>;

export default MoviesListItem;
