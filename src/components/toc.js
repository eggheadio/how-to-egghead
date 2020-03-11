/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react'
import {Button} from '@theme-ui/components'
import slugify from '@sindresorhus/slugify'
import Scrollspy from 'react-scrollspy'
import {transparentize} from '@theme-ui/color'
import {FiMenu, FiX} from 'react-icons/fi'
import {Link} from 'react-scroll'

export default ({data, slug, ...props}) => {
  return (
    <nav
      sx={{pl: 4, opacity: 1, ':hover': {opacity: 1}, fontSize: 2}}
      {...props}
    >
      {!props.hideTitle ? (
        <div
          sx={{
            fontFamily: 'heading',
            fontWeight: 'bold',
            letterSpacing: 1,
            mb: 3,
            mt: 0,
            textTransform: 'uppercase',
          }}
        >
          Table of contents
        </div>
      ) : (
        <div
          sx={{
            fontFamily: 'heading',
            fontWeight: 'bold',
            letterSpacing: 1,
            mb: 3,
            mt: 0,
            textTransform: 'uppercase',
          }}
        >
          {props.pageTitle}
        </div>
      )}
      <Scrollspy
        items={data.items.map(item => slugify(item.title))}
        currentClassName="is-current"
        sx={{
          listStyleType: 'none',
          fontFamily: 'heading',
          color: transparentize('text', 0.2),
          pl: [3, 3, 0],
          '.is-current': {
            color: 'primary',
            '::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              left: 0,
              width: '2px',
              height: '21px',
              backgroundColor: 'primary',
            },
          },
          '.is-current-depth': {
            color: 'primary',
          },
        }}
      >
        {data.items.map((item, i) => {
          return (
            <li
              key={item.title}
              sx={{
                listStyleType: 'none',
                a: {color: 'inherit'},
                lineHeight: 1.3,
                display: 'flex',
                flexDirection: 'column',
                my: 2,
              }}
            >
              <Link
                to={slugify(item.title)}
                smooth={'easeInOutQuint'}
                offset={-70}
                duration={250}
                onClick={() => props.setState && props.setState(false)}
                sx={{
                  ':hover': {
                    color: 'text',
                    textDecoration: 'none',
                  },
                  width: '100%',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {item.title}
              </Link>
              {item.items && (
                <Scrollspy
                  items={item.items.map(item2 => slugify(item2.title))}
                  currentClassName="is-current-depth"
                  sx={{m: 0, pb: 2}}
                >
                  {item.items.map(item2 => (
                    <li
                      key={item2.title}
                      sx={{listStyleType: 'none', pl: 3, my: 2}}
                    >
                      <Link
                        as="a"
                        to={slugify(item2.title)}
                        smooth={'easeInOutQuint'}
                        offset={-70}
                        duration={250}
                        onClick={() => props.setState && props.setState(false)}
                        sx={{
                          fontSize: '15px',
                          cursor: 'pointer',
                          ':hover': {
                            color: 'text',
                            textDecoration: 'none',
                          },
                        }}
                      >
                        {item2.title}{' '}
                      </Link>
                    </li>
                  ))}
                </Scrollspy>
              )}
            </li>
          )
        })}
      </Scrollspy>
    </nav>
  )
}

export const TocToggle = ({isVisibleToc, setIsVisibleToc}) => (
  <Button
    onClick={() => setIsVisibleToc(!isVisibleToc)}
    sx={{
      position: 'fixed',
      zIndex: 10,
      right: 3,
      bottom: 3,
      width: 60,
      height: 60,
      borderRadius: 30,
      p: 1,
      boxShadow: 'small',
      justifyContent: 'center',
      display: ['flex', 'flex', 'none'],
      color: 'white',
      border: 'none',
      background: 'rgb(32, 35, 42)',
      fontFamily: 'heading',
      textTransform: 'uppercase',
      alignItems: 'center',
    }}
    aria-expanded={isVisibleToc ? true : false}
  >
    {isVisibleToc ? <FiX /> : <FiMenu />}
  </Button>
)
