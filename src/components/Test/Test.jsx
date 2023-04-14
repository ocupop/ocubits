import React from 'react'
import PropTypes from 'prop-types'

// ----------------------------------------------------------------------
Test.propTypes = {
  title: PropTypes.string
}

export default function Test({ title }) {
  return (
    <>
      <h1>Title: {title}</h1>
    </>
  )
}
