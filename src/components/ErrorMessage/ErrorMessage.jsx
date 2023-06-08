import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './ErrorMessage.css'

// ----------------------------------------------------------------------
ErrorMessage.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string
}

export default function ErrorMessage ({ className, error }) {
  return (
    <>
      {error && <small className={classNames('input-error', className)}>{error}</small>}
    </>
  )
}
