const backgroundNormal = '#212121';
const backgroundTitle = '#000000';
const background800 = '#424242';
const background600 = '#757575';

const buttonNormal = '#263238';
const buttonMedium = '#90A4AE';
const buttonLight = '#B0BEC5';
const buttonAccent = '#607D8B';

const textNormal = '#ffffff';
const textDim = '#9E9E9E';
const textOnLight = '#000000';
const textConfirm = '#009688';
const textWarning = '#BF360C';

const typographyBody1 = {
    color: textNormal,
    fontFamily: 'Raleway, sans-serif',
    fontSize: '1em',
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

const typographyBody2Confirm = {
    ...typographyBody2,
    color: textConfirm,
};

const typographyBody2Warning = {
    ...typographyBody2,
    color: textWarning,
};

const typographyTitle = {
    color: textNormal,
    fontFamily: 'Arvo, serif',
    fontSize: '1.5em',
};

const typographyTitleOnLight = {
    ...typographyTitle,
    color: textOnLight,
};

const typographySubtitle = {
    ...typographyTitle,
    fontSize: '1em',
};

export {
    backgroundNormal, backgroundTitle, background800, background600,
    buttonAccent, buttonNormal, buttonMedium, buttonLight,
    textNormal, textDim, textConfirm,
    typographyBody1, typographyBody1OnLight,
    typographyBody2, typographyBody2Dim, typographyBody2Confirm, typographyBody2Warning,
    typographyTitle, typographyTitleOnLight,
    typographySubtitle,
};
