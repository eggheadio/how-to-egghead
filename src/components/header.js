import React from 'react'
import {css} from '@emotion/core'
import Search from './search'
import Link from './link'
import {bpMaxSM} from '../utils/breakpoints'

const Header = () => (
  <div
    css={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      [bpMaxSM]: {
        gridTemplateColumns: '1.5fr 2fr',
      },
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
      maxWidth: '960px',
      padding: '1rem',
    }}
  >
    <Link
      to="/"
      css={{
        fontSize: '0.8rem',
        lineHeight: 1,
        width: '100%',

        paddingRight: 10,
      }}
    >
      how to egghead
    </Link>
    <Search />
  </div>
)

export default Header
