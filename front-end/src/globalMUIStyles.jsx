import { createMuiTheme } from '@material-ui/core';

const montserrat = '"Montserrat", sans-serif';

const theme = createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: '65px',
    },
    footer: {
      minHeight: '40px',
    },
    drawer: {
      width: '140px',
    }
  },
  typography: {
    h1: {
      color: '#fff',
    },
    h2: {
      color: '#fff',
    },
    h3: {
      color: '#fff',
    },
    h4: {
      color: '#fff',
    },
    h5: {
      color: '#fff',
    },
    h6: {
      color: '#fff',
    },
    caption: {
      fontFamily: montserrat,
      fontWeight: 300,
      fontSize: '0.75rem',
      lineHeight: '0.938rem',
      letterSpacing: .24,
      color: '#fff'
    },
    button: {
      textTransform: 'none',
    }
  },
  palette: {
    primary: {
      light: '#34343C',
      main: '#24292E',
      dark: '#1A1C21',
    },
    text: {
      primary: '#FFF',
    },
    red: {
      light: '#FF6060',
      main: '#FF3939',
      dark: '#FF1212',
    }
  },
  custom: {
    paper: {
      select: {
        backgroundColor: '#2B313B',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        height: '40px',
      },
    },
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
    MuiToolbar: {
      root: {
        backgroundColor: '#20232B',
      }
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: 'none',
      }
    },
    MuiSelect: {
      root: {
        width: '120px',
        fontSize: '16px',
        lineHeight: '21px',
        fontWeight: '300',
        letterSpacing: '0.32px',
        backgroundColor: 'rgba(0,0,0,0.001)',
        '&:focus': {
          backgroundColor: 'rgba(0,0,0,0.001)',
        }
      },
      iconOpen: {
        transform: 'rotate(180deg)',
      },
    },
    MuiMenu: {
      paper: {
        marginTop: '1%',
      },
      list: {
        paddingTop: 0,
        paddingBottom: 0,
        background: '',
        "& li": {
          fontWeight: 200,
          paddingTop: 12,
          paddingBottom: 12,
        },
        "& li:hover": {
          backgroundColor: '#FF6060',
        },
        "& li.Mui-selected": {
          color: 'white',
          background: '#FF3939',
        },
        "& li.Mui-selected:hover": {
          backgroundColor: '#FF1212',
        }
      }
    },
    MuiButton: {
      contained: {
        backgroundColor: '#4056F4',
        borderRadius: '2px',
        border: '#4056F4 1px solid',
        color: '#FFF',
        padding: '7px 11px',
        transition: '300ms',
        '&:hover': {
          backgroundColor: '#6577f6',
        }
      },
      label: {
        display: 'flex',
        justifyContent: 'space-around',
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: '#7B868D',
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