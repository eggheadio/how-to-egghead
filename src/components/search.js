import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import algoliasearch from 'algoliasearch/lite'
import Link from './link'
import SearchIcon from '../images/icons/magnifier.svg'
import SearchIconActive from '../images/icons/magnifier-blue.svg'
import {
  Configure,
  connectHits,
  connectSearchBox,
  InstantSearch,
  Highlight,
} from 'react-instantsearch-dom'

const client = algoliasearch('NLOD4N9T1X', '9ec0b0075d0a1d1faf3e3dbd129aaad0')

const SearchArea = styled('div')`
  margin-top: 0;
  width: 100%;
`

const List = styled('ul')`
  list-style: none;
  margin: 0 auto;
  max-width: 650px;
  padding-bottom: 30px;
  color: black;
`

const Result = styled('li')`
  color: #a5b3ff;
  margin: 2px 0;
`

const TitleLink = styled(Link)`
  .active {
    h5 {
      background: #283644;
    }
  }
`

const Heading = styled('h5')`
  font-size: 18px;
  padding: 5px 0;
  font-weight: 400;
  line-height: 1.2;
  color: #d3d7da;
  :hover {
    transition: all 200ms ease;
    background: #283644;
  }
  border-radius: 3px;
  margin: 0 15px 0 15px;
  padding: 13px 15px;

  .active,
  .hover {
    color: #f5f7fa;
  }
  a {
    text-decoration: none;
  }
`
const ChapterTitle = styled('h4')`
  color: #a5b3ff;
`

const Hits = connectHits(({ hits }) => (
  <List>
    {hits.map(hit => (
      <Result key={hit.objectID}>
        {hit.chapterTitle && (
          <Link to={`/${hit.slug}`}>
            <ChapterTitle>{hit.chapterTitle}</ChapterTitle>
          </Link>
        )}
        <TitleLink to={`/${hit.slug}`} id={hit.slug} activeClassName="active">
          <Heading>
            <Highlight attribute="title" hit={hit} tagName="mark" />
          </Heading>
        </TitleLink>
        <p>
          <Highlight attribute="description" hit={hit} tagName="mark" />
        </p>
      </Result>
    ))}
  </List>
))

const Label = styled('label')`
  display: block;
  margin: 0 15px;
`

const Input = styled('input')`
  border: none;
  font-weight: 300;
  border-radius: 3px;
  color: #e8ecf3;
  background: url(${SearchIcon}) no-repeat;
  background-size: 20px;
  background-position-x: 12px;
  background-position-y: 13px;
  :focus {
    background: url(${SearchIconActive}) no-repeat;
    background-size: 20px;
    background-position-x: 12px;
    background-position-y: 13px;
  }
  background-color: #17212b;
  display: block;
  font-size: 18px;
  margin-top: 0;
  padding: 0.5rem 0.75rem 0.5rem 2rem;
  width: 100%;
  margin: 0.5em 0 1em 0;
`

const Search = connectSearchBox(({ currentRefinement, refine, setActive }) => (
  <form noValidate action="" role="search">
    <Label htmlFor="search">
      <Input
        placeholder="Search the guide"
        type="search"
        id="search"
        value={currentRefinement}
        onBlur={() => {
          if (currentRefinement === '') {
            setActive(false)
          }
        }}
        onChange={event => {
          setActive(true)
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

export default () => {
  const [active, setActive] = useState(false)

  return (
    <InstantSearch
      searchClient={client}
      indexName="guides"
      root={{ Root: SearchContainer }}>
      <Configure distinct={1} hitsPerPage={30} />
      <SearchArea>
        <Search setActive={setActive} />
        <Hits />
      </SearchArea>
    </InstantSearch>
  )
}
