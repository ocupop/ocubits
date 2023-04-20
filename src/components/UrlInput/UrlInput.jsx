import React from 'react'
import PropTypes from 'prop-types'

import MaskedInput from '../MaskedInput/MaskedInput'
// ----------------------------------------------------------------------

UrlInput.propTypes = {}
UrlInput.defaultProps = {}

export default function UrlInput (props) {
  const nonDigitsRegExp = /\D+/g
  const digitRegExp = /\d/

  const schemeMask = (rawValue) => {
    const output = rawValue.split('').map((char, i) => {
      if (i === 0 && char === 'h') return /h/
      if (i === 1 && char === 't') return /t/
      if (i === 2 && char === 't') return /t/
      if (i === 3 && char === 'p') return /p/
      if (i === 4) return /[:s]/

      const isSSL = (rawValue.charAt(4) === 's')
      if (isSSL) {
        console.log('isSSL')
        if (i === 5) return /:/
        if (i === 6) return /\//
        if (i === 7) return /\//
      } else {
        if (i === 5) return /\//
        if (i === 6) return /\//
      }
    })
    return output
  }
  const subdomainMask = []
  const domainMask = []
  const extMask = []

  const mask = function (rawValue) {
    const output = schemeMask(rawValue)

    const subdomain = rawValue.split('://')
    if (subdomain.length > 1) {
      console.log('subdomain', subdomain[1])
      output.push(/w/)
    }

    // output.push(...)
    console.log(output)

    return output
  }

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <MaskedInput {...props} type='url' maskOptions={mask} />
  )
}
