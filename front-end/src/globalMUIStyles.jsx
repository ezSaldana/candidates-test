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
      color: '#FFF',
    },
    h2: {
      color: '#FFF',
    },
    h3: {
      color: '#FFF',
    },
    h4: {
      color: '#FFF',
    },
    h5: {
      color: '#FFF',
    },
    h6: {
      color: '#FFF',
    },
    subtitle: {
      color: '#FFF'
    },
    subtitle2: {
      color: '#FFF',
      fontSize: '18px',
      lineHeight: '24px',
      letterSpacing: '0.36px',
      fontWeight: 700,
      fontFamily: 'Roboto',
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
        '&$selected': {
          backgroundColor: '#464651',
        },
        '&$selected:hover': {
          backgroundColor: '#34343C'
        },
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
      },
      divider: {
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      },
    },
    MuiListItemText: {
      primary: {
        color: '#FFF',
      },
      secondary: {
        color: '#FFF',
      },
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
        },
      },
      containedSecondary: {
        border: '1px solid #C51162'
      },
      outlined: {
        border: '1px solid #5C5C5C',
        transitionDuration: '300ms',
        transitionDelay: '150ms',
        borderRadius: 0,
        '&:hover': {
          backgroundColor: '#5C5C5C',
          border: '1px solid #FFF',
          color: '#FFF',
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
    },
    MuiTable: {
      root: {
        borderCollapse: 'separate',
        borderSpacing: '0 8px !important',
        '& tbody tr': {
          backgroundColor: '#34343C',
        }
      }
    },
    MuiTableRow: {
      root: {
        cursor: 'pointer',
        transition: '300ms',
        '&$hover:hover': {
          backgroundColor: '#222227',
        },
      }
    },
    MuiTableCell: {
      root: {
        fontSize: '14px',
        fontFamily: 'Roboto',
        letterSpacing: '0.56px',
        borderBottom: 'none',
      },
      head: {
        fontWeight: 300,
        lineHeight: '19px',
        color: '#CECECE',
        padding: '0 0'
      },
      stickyHeader: {
        backgroundColor: 'none'
      },
      body: {
        lineHeight: '19px',
        fontWeight: 300,
        letterSpacing: '0.28px',
        color: '#CECECE',
        '& h6': {
          color: '#CECECE',
        },
        padding: '3px 0',
      }
    }
  }
});

export default theme;