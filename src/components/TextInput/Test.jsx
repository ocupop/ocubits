import React from 'react'
import PropTypes from 'prop-types'

// ----------------------------------------------------------------------
Test.propTypes = {
  children: PropTypes.node
}

export default function Test({ children }) {
  return (
    <>
      <h1>Test</h1>
    </>
  )
}
