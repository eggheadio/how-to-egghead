/** @jsx jsx */
import React from 'react'
import {jsx} from 'theme-ui'
import Link from './link'
import {Card as StyledCard} from '@theme-ui/components'

export default function Card(props) {
  return (
    <StyledCard variant={props.variant}>
      <Link to={props.href}>{props.children}</Link>
    </StyledCard>
  )
}
