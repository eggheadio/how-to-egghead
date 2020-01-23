export default {
  colors: {
    primary: '#048465',
    blue: '#11609E',
    violet: '#58119E',
    text: '#111',
    background: '#fff',
    'gray-50': '#fafafa',
    'gray-100': '#f5f5f5',
    'gray-300': '#e0e0e0',
  },
  fonts: {
    body: "'Merriweather', serif",
    heading: "'Open Sans', sans-serif",
  },
  layout: {
    container: {
      backgroundColor: 'background',
      maxWidth: '70ch',
      mx: 'auto',
      p: [3, 5],
      pt: [1, 1],
      boxShadow:
        '0 12.5px 10px rgba(0, 0, 0, 0.035), 0 100px 80px rgba(0, 0, 0, 0.07)',
    },
  },

  cards: {
    primary: {
      padding: [3, 4],
      color: 'background',
      display: 'grid',
      gridTemplateColumns: '2fr 14fr',
      alignItems: 'center',

      borderRadius: 5,
      fontFamily: 'heading',
      lineHeight: 1.2,
      p: {
        mb: 0,
        mt: 2,
        opacity: 0.75,
        fontSize: 3,
      },
      h1: {
        mt: 0,
        mb: 3,
        mr: 3,
        textAlign: 'center',
      },
      h2: {
        fontSize: 5,
        m: 0,
      },
    },
    instructor: {
      variant: 'cards.primary',
      bg: 'primary',
    },
    advocate: {
      variant: 'cards.primary',
      bg: 'blue',
    },
    learner: {
      variant: 'cards.primary',
      bg: 'violet',
    },
  },
  styles: {
    root: {
      backgroundColor: 'gray-50',
      a: {
        color: 'primary',
      },
      ul: {
        position: 'relative',
        listStyle: 'none',
        marginLeft: '0',
        paddingLeft: '1.2em',
      },
      'ul li:before': {
        content: '"-"', // ➽➼➩ ➮
        position: 'absolute',
        left: '0',
        color: 'primary',
      },
      hr: {
        mt: [3, 5],
        border: '0',
        height: '0',
        borderTop: '2px solid',
        borderTopColor: 'gray-100',
        mx: [-3, -5],
      },
    },
    Header: {
      maxHeight: [78, 119],
      maxWidth: '70ch',
      mx: 'auto',
      px: [3, 3, 4, 0],
      py: [3, 3, 4],
      ul: {
        listStyle: 'inherit',
        marginLeft: '0',
      },
      li: {
        pl: 0,
      },
      'ul li:before': {
        content: '""',
      },
    },
    Footer: {
      maxWidth: '80ch',
      mx: 'auto',
      py: 6,
    },
  },
}
