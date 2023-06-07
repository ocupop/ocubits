import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Fieldset.css'
// ----------------------------------------------------------------------

Fieldset.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  collapsible: PropTypes.bool,
  open: PropTypes.bool,
  children: PropTypes.node
}

Fieldset.defaultProps = {
  collapsible: false,
  open: true
}

export default function Fieldset ({
  name,
  className,
  collapsible,
  open,
  children
}) {
  const [isOpen, setIsOpen] = useState(open)
  return (
    <fieldset className={classNames('fieldset', className, collapsible && 'collapsible')}>
      <header>
        <legend>{name}</legend>
        {collapsible && (
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'close' : 'open'}
          </button>
        )}
      </header>
      {isOpen && children}
    </fieldset>
  )
}
