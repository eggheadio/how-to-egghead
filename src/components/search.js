import React, {useState} from 'react'
import {css} from '@emotion/core'
import styled from '@emotion/styled'
import Link from './link'
import SearchIcon from '../images/icons/magnifier.svg'
import SearchIconActive from '../images/icons/magnifier-active.svg'
import algoliasearch from 'algoliasearch/lite'
import {bpMaxSM, bpMinSM} from '../utils/breakpoints'
import {
  InstantSearch,
  Configure,
  Highlight,
  connectHits,
  connectSearchBox,
  connectStateResults,
} from 'react-instantsearch-dom'

const client = algoliasearch('NLOD4N9T1X', '9ec0b0075d0a1d1faf3e3dbd129aaad0')

const Hits = connectHits(({hits}) => (
  <div
    css={css({
      position: 'relative',
      maxWidth: 960,
      height: '500',
      margin: '0 auto',
      zIndex: 999,
    })}>
    <ul
      css={css({
        position: 'absolute',
        width: '100%',
        backgroundColor: 'white',
        overflow: 'auto',
        padding: 20,
        [bpMaxSM]: {
          padding: 10,
        },
      })}>
      {hits.map(hit => (
        <li
          key={hit.objectID}
          css={css({
            display: 'flex',
            width: '100%',
            padding: 10,
            margin: 0,
            borderBottom: '1px solid #f1f1f1',
          })}>
          <div
            css={css({
              width: '100%',
              flexBasis: '80%',
              [bpMaxSM]: {flexBasis: '70%'},
            })}>
            <Link
              to={hit.slug}
              id={hit.slug}
              css={css({width: '100%', height: '100%'})}
              activeClassName="active">
              <Highlight attribute="title" hit={hit} tagName="mark" />
              <Highlight
                css={css({display: 'block', fontSize: 14, opacity: 0.8})}
                attribute="text"
                hit={hit}
                tagName="mark"
              />
            </Link>
          </div>
          <div
            css={css({
              display: 'flex',
              alignItems: 'center',
              flexBasis: '20%',
              fontFamily: 'system-ui, sans-serif',
              textTransform: 'capitalize',
              fontSize: 16,
              [bpMaxSM]: {
                fontSize: 12,
                flexBasis: '30%',
              },
            })}>
            <div css={css({alignItems: 'flex-end'})}>
              <Highlight attribute="guide" hit={hit} tagName="mark" />{' '}
              <span>{hit.guide && 'Guide'}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
))

const Label = styled('label')`
  display: block;
  margin: 0 15px;
`

const Input = styled('input')({
  fontFamily: 'system-ui, sans-serif',
  fontWeight: 'normal',
  borderRadius: '5px',
  background: `url(${SearchIcon}) no-repeat`,
  backgroundSize: '16px',
  backgroundPositionX: '12px',
  backgroundPositionY: '50%',
  ':focus': {
    background: `url(${SearchIconActive}) no-repeat`,
    backgroundSize: '16px',
    backgroundPositionX: '12px',
    backgroundPositionY: '50%',
  },
  backgroundColor: '#fafafa',
  border: '1px solid #f1f1f1',
  display: 'block',
  fontSize: '16px',
  padding: '0.5rem 0.75rem 0.5rem 35px',
  width: '100%',
  marginTop: '1rem',
  boxShadow: 'none',
})

const Search = connectSearchBox(({currentRefinement, refine, setIsActive}) => (
  <form noValidate action="" role="search" css={css({margin: 0})}>
    <Label htmlFor="search">
      <Input
        placeholder="Search the guide"
        type="search"
        id="search"
        value={currentRefinement}
        onBlur={() => {
          if (currentRefinement === '') {
            setIsActive(false)
          }
        }}
        onChange={event => {
          setIsActive(true)
          refine(event.currentTarget.value)
        }}
      />
    </Label>
  </form>
))

const SearchContainer = styled('div')`
  margin-top: 0;
  color: black;
`

// Show search results after user starts typing
const Results = connectStateResults(({searchState}) =>
  searchState && searchState.query ? <Hits /> : null
)

export default () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <InstantSearch
      searchClient={client}
      indexName={process.env.ALGOLIA_INDEX_NAME}
      root={{Root: SearchContainer}}>
      <Configure distinct={1} hitsPerPage={30} />
      <div>
        <Search setIsActive={setIsActive} />
        <Results />
      </div>
    </InstantSearch>
  )
}
