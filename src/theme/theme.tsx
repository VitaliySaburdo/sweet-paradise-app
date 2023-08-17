export const theme = Object.freeze({
  fonts: {
    main: `'Montserrat', sans-serif`,
    second: `'Open Sans', sans-serif`,
    accent: `'Sail', cursive`,
  },
  fontSizes: {
    mainFontSize: '16px',
    linkFontSize: '12px',
    menuTitleSize: '28px',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  colors: {
    // My styles
    primaryColor: '#1976d2',
    secondaryColor: '#455a64',
    clearWhite: '#FFFFFF',
    // Buttons
    btnBorderColor: 'rgba(30, 30, 30, 0.2)',
    btnSuccessColor: 'green',
    btnEditColor: 'orange',
    btnSuccessHoverColor: '#13ba00',
    btnEditHoverColor: '#FF9966',
    btnDeleteColor: '#de0000',
    btnDeleteHoverColor: '#F44336',

    // Border color
    mainBorderColor: 'rgba(0, 0, 0, 0.1)',

    // Scroll bar style
    ScrollBarColor: '#888',
    ScrollBarHoverColor: '#888',
  },
  shadows: {
    mainShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
    secondShadow: '0px 10px 10px rgba(0, 0, 0, 0.07);',
  },
  media: {
    sm: '(min-width: 360px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1920px)',

  },
});
