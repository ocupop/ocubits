import React from 'react'
import PropTypes from 'prop-types'

// ----------------------------------------------------------------------
Hint.propTypes = {
  message: PropTypes.string
}

export default function Hint({ message }) {
  return (
    <>
      <small>{message}</small>
    </>
  )
}
