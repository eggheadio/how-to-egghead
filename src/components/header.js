import React from 'react'
import {css} from '@emotion/core'
import Search from './search'

const Header = () => (
  <div
    css={css({
      margin: '0 auto',
      maxWidth: '960px',
    })}>
    <Search />
  </div>
)

export default Header
