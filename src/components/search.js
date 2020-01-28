/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, {useState} from 'react'
import styled from '@emotion/styled'
import Link from './link'
import SearchIcon from '../images/icons/magnifier.svg'
import SearchIconActive from '../images/icons/magnifier-active.svg'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Configure,
  Highlight,
  connectHits,
  connectSearchBox,
  connectStateResults,
} from 'react-instantsearch-dom'

const client = algoliasearch('NLOD4N9T1X', '27ac39ffd2f1ec6477d7772f42ec3bb0')

const Hits = connectHits(({hits}) => (
  <div
    sx={{
      width: ['90vw', '100%', '100%'],
      position: 'absolute',
      zIndex: 999,
      backgroundColor: 'white',
      overflow: 'auto',
      borderRadius: 8,
      marginTop: '5px',
      maxHeight: 500,
      border: '1px solid rgba(0,0,0,0.08)',
      boxShadow: 'small',
    }}
  >
    <ul sx={{margin: 0, padding: '10px 0', width: '100%'}}>
      {hits.map(hit => (
        <li
          key={hit.objectID}
          sx={{
            display: 'flex',
            width: '100%',
            marginBottom: 1,
            borderBottom: '1px solid',
            borderColor: '#f1f1f1',
            pt: 2,
            pb: 3,
          }}
        >
          <Link
            to={hit.slug}
            id={hit.slug}
            sx={{
              width: '100%',
              height: '100%',
              lineHeight: 1.2,
              color: 'text',
              px: 3,
              pb: 2,
              textDecoration: 'none !important',
              minHeight: 80,
            }}
            activeClassName="active"
          >
            <Highlight
              attribute="title"
              hit={hit}
              tagName="mark"
              sx={{
                fontSize: [2, 3],
                color: 'text',
              }}
            />
            <Highlight
              sx={{
                display: 'block',
                color: 'text',
                fontSize: 14,
                opacity: 0.8,
                mt: 2,
                lineHeight: 1.6,
              }}
              attribute="text"
              hit={hit}
              tagName="mark"
            />
            {hit.chapterTitle}
          </Link>
        </li>
      ))}
    </ul>
  </div>
))

const Label = styled('label')`
  display: block;
`

const Search = connectSearchBox(
  ({currentRefinement, refine, setIsActive, ...props}) => {
    const {isToggled} = props
    const inputRef = React.useRef(null)
    React.useEffect(() => {
      isToggled && inputRef.current.focus()
    }, [isToggled])
    return (
      <form noValidate action="" role="search" sx={{mb: 0}} {...props}>
        <Label htmlFor="search">
          <input
            ref={inputRef}
            sx={{
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 'normal',
              background: `url(${SearchIcon}) no-repeat`,
              backgroundSize: '18px',
              backgroundPositionX: '12px',
              backgroundPositionY: '50%',
              ':focus': {
                background: `url(${SearchIconActive}) no-repeat`,
                backgroundSize: '18px',
                backgroundColor: 'background',
                backgroundPositionX: '12px',
                backgroundPositionY: '50%',
                outline: 'none',
                '::placeholder': {opacity: 0.15},
              },
              '::placeholder': {opacity: 0.3, color: 'text'},
              backgroundColor: 'background',
              border: 'none',
              borderRadius: 8,
              display: 'block',
              fontSize: '18px',
              padding: '0.5rem 0.75rem 0.5rem 38px',
              width: '100%',
              boxShadow: 'small',
            }}
            placeholder="Search the guide"
            type="search"
            autoComplete="off"
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
    )
  }
)

const SearchContainer = styled('div')`
  width: 100%;
`

// Show search results after user starts typing
const Results = connectStateResults(({searchState, searchResults}) =>
  searchState && searchState.query ? (
    <div sx={{position: 'relative'}}>
      <Hits />
    </div>
  ) : null
)

export default props => {
  const [isActive, setIsActive] = useState(false)

  return (
    <InstantSearch
      searchClient={client}
      indexName={process.env.ALGOLIA_INDEX_NAME}
      root={{Root: SearchContainer}}
    >
      <Configure distinct={1} hitsPerPage={30} />
      <div sx={{width: ['90%', '100%']}}>
        <Search {...props} setIsActive={setIsActive} />
        <Results />
      </div>
    </InstantSearch>
  )
}
