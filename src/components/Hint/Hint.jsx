import React from 'react'
import PropTypes from 'prop-types'
import './Hint.css'

// ----------------------------------------------------------------------
Hint.propTypes = {
  hint: PropTypes.string
}

export default function Hint ({ hint }) {
  return (
    <>
      {hint && <div className='input-hint'>{hint}</div>}
    </>
  )
}
