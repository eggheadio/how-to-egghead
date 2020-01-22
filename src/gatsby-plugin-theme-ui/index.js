export default {
  colors: {
    primary: '#FF2D55',
    text: '#111',
    background: '#fff',
    'gray-50': '#fafafa',
    'gray-100': '#f5f5f5',
    'gray-300': '#e0e0e0',
  },
  layout: {
    container: {
      backgroundColor: 'background',
      maxWidth: '80ch',
      mx: 'auto',
      p: [3, 4],
      pt: [0, 0],
      borderTop: '4px solid',
      borderColor: 'primary',
      boxShadow:
        '0 12.5px 10px rgba(0, 0, 0, 0.035), 0 100px 80px rgba(0, 0, 0, 0.07)',
    },
  },
  styles: {
    root: {
      backgroundColor: 'gray-50',
      ul: {
        position: 'relative',
        listStyle: 'none',
        marginLeft: '0',
        paddingLeft: '1.2em',
      },
      'ul li:before': {
        content: '"○"', // ➽➼➩ ➮
        position: 'absolute',
        left: '0',
        color: 'primary',
      },
    },
    Header: {
      maxWidth: '80ch',
      mx: 'auto',
      px: [3, 3, 0],
      mb: [2, 4, 4],
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
