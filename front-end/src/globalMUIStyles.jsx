import { createMuiTheme } from '@material-ui/core';

const montserrat = '"Montserrat", sans-serif';

const theme = createMuiTheme({
  typography: {
    caption: {
      fontFamily: montserrat,
      fontWeight: 300,
      fontSize: '0.75rem',
      lineHeight: '0.938rem',
      letterSpacing: .24,
    }
  },
  palette: {
    primary: {
      light: '#34343C',
      main: '#24292E',
      dark: '#1A1C21',
    },
    background: {
      paper: '#24292E',
    },
    text: {
      primary: '#fff',
    }
  },
  // OVERRIDE
  overrides: {
    MuiListItemIcon: {
      root: {
        minWidth: '2.2rem',
      },
    },
    MuiListItem: {
      root: {
        paddingTop: 13,
        paddingBottom: 13,
      },
      button: {
        transition: '200ms',
        '&:hover': {
          backgroundColor: '#FF3939',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      }
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: 'none',
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#1A1C21',
      }
    }
  }
});

export default theme;