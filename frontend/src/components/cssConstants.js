const backgroundNormal = '#212121';
const backgroundTitle = '#000000';
const background800 = '#424242';
const background600 = '#757575';

const buttonNormal = '#263238';

const textNormal = '#ffffff';
const textDim = '#757575';

const typographyBody1 = {
    color: textNormal,
    fontFamily: 'Raleway, sans-serif',
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
    buttonNormal,
    textNormal,
    typographyBody1, typographyBody2, typographyBody2Dim,
    typographyTitle, typographySubtitle,
};
