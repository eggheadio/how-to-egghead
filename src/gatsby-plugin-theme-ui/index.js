import {lighten} from '@theme-ui/color'

export default {
  colors: {
    primary: '#1b6ac9',
    text: '#111',
    'code-text': '#444',
    background: '#fff',
    'gray-50': '#fafafa',
    'gray-100': '#f5f5f5',
    'gray-300': '#e0e0e0',
  },
  fonts: {
    body: "'Merriweather', serif",
    heading: "'Open Sans', sans-serif",
  },
  shadows: {
    large:
      '0 1.1px 2.2px rgba(0, 0, 0, 0.006), 0 2.5px 5.3px rgba(0, 0, 0, 0.008), 0 4.8px 10px rgba(0, 0, 0, 0.01), 0 8.5px 17.9px rgba(0, 0, 0, 0.012), 0 15.9px 33.4px rgba(0, 0, 0, 0.014), 0 38px 80px rgba(0, 0, 0, 0.02)',
    medium: '0 5px 10px rgba(0, 0, 0, 0.035), 0 5px 60px rgba(0, 0, 0, 0.05)',
    small: '0 3px 6px 0 rgba(0,0,0,0.025), 0 7px 32px 0 rgba(62,61,68,0.025)',
  },
  layout: {
    container: {
      backgroundColor: 'background',
      width: '100%',
      borderRadius: [0, 5, 8],
      mx: 'auto',
      p: [3, 5],
      pt: [1, 1],
      boxShadow: 'large',
    },
  },

  cards: {
    primary: {
      a: {
        px: [2, 3, 3],
        py: [3, 3, 4],
        color: 'text',
        display: 'grid',
        gridGap: '1rem',
        gridTemplateColumns: ['50px 6fr', '80px 6fr'],
        alignItems: 'center',
        fontFamily: 'heading',
        lineHeight: 1.2,
        borderBottom: '1px solid',
        borderBottomColor: 'gray-100',
        ':hover': {
          borderRadius: 8,
          boxShadow: 'medium',
          borderBottomColor: 'transparent',
        },
        p: {
          mb: 0,
          mt: 2,
          opacity: 0.75,
          fontSize: [2, 3],
        },
        h1: {
          my: '0 !important',
          textAlign: 'center',
        },
        h2: {
          fontSize: [3, 4],
          m: 0,
        },
        textDecoration: 'none',
      },

      img: {
        mb: 0,
        borderRadius: 5,
      },
    },
    secondary: {
      a: {
        variant: 'cards.primary',
        display: 'flex',
        py: [3, 3, 3],
        px: [3, 3, 3],
        color: 'primary',
        textDecoration: 'none',
        borderBottom: '1px solid',
        borderBottomColor: 'gray-100',
        ':hover': {
          borderRadius: 8,
          boxShadow: 'medium',
          borderBottomColor: 'transparent',
        },
      },
    },
    planningSessionHeader: {
      mb: [3, 4],
      img: {m: 0, mr: [3, 4], maxWidth: [80, 100, 140], borderRadius: 0},
      'h2, h3': {my: 0},
      alignItems: 'center',
      a: {color: 'text', display: 'grid', gridTemplateColumns: '1fr 4fr'},
    },
  },
  planningSession: {
    padding: [3, 4, 4, 5],
    mb: [3, 4],
    bg: 'gray-100',
    borderRadius: 10,
    fontSize: '90%',
    li: {mb: 1},
    p: {mb: 3},
    'h1, h2, h3, h4': {
      lineHeight: 1.4,
    },
    h4: {
      mt: 4,
      mb: 3,
    },
    img: {borderRadius: 3},
    code: {
      bg: 'white',
      border: '1px solid',
      borderColor: 'gray-300',
      color: 'text',
    },
  },
  styles: {
    root: {
      mark: {backgroundColor: lighten('primary', 0.5), color: 'primary'},
      backgroundColor: 'gray-50',
      a: {
        color: 'primary',
      },
      ul: {
        marginLeft: '0',
      },
      hr: {
        mt: [3, 5],
        border: '0',
        height: '0',
        borderTop: '2px solid',
        borderTopColor: 'gray-100',
        mx: [-3, -5],
      },
      code: {
        backgroundColor: 'gray-100',
        color: 'code-text',
        padding: '3px 6px',
        borderRadius: '3px',
      },
      pre: {
        backgroundColor: 'gray-100',
        padding: '10px',
        borderRadius: '6px',
      },
    },
  },
}
