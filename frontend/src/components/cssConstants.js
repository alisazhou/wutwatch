const backgroundNormal = '#212121';
const backgroundTitle = '#000000';
const backgroundLight = '#424242';
const backgroundFaint = '#757575';

const buttonNormal = '#263238';

const textNormal = '#ffffff';

const typographyBody1 = {
    color: textNormal,
    fontFamily: 'Raleway, sans-serif',
};

const typographyBody2 = {
    ...typographyBody1,
    fontSize: '0.875em',
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
    backgroundNormal, backgroundTitle, backgroundLight, backgroundFaint,
    buttonNormal,
    textNormal,
    typographyBody1, typographyBody2,
    typographyTitle, typographySubtitle,
};
