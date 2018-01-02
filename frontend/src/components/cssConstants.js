const backgroundNormal = '#212121';
const backgroundTitle = '#000000';
const background800 = '#424242';
const background600 = '#757575';

const buttonNormal = '#263238';
const buttonMedium = '#90A4AE';
const buttonLight = '#B0BEC5';

const textNormal = '#ffffff';
const textDim = '#757575';
const textOnLight = '#000000';

const typographyBody1 = {
    color: textNormal,
    fontFamily: 'Raleway, sans-serif',
};

const typographyBody1OnLight = {
    ...typographyBody1,
    color: textOnLight,
};

const typographyBody2 = {
    ...typographyBody1,
    fontSize: '0.875em',
};

const typographyBody2Dim = {
    ...typographyBody2,
    color: textDim,
};

const typographyTitle = {
    color: textNormal,
    fontFamily: 'Arvo, serif',
    fontSize: '1.5em',
};

const typographySubtitle = {
    ...typographyTitle,
    fontSize: '1em',
};

export {
    backgroundNormal, backgroundTitle, background800, background600,
    buttonNormal, buttonMedium, buttonLight,
    textNormal,
    typographyBody1, typographyBody1OnLight,
    typographyBody2, typographyBody2Dim,
    typographyTitle, typographySubtitle,
};
