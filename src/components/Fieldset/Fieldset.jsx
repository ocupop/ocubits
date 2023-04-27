import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Label from '../Label/Label'
import './Fieldset.css'
// ----------------------------------------------------------------------

Fieldset.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  tooltip: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  layout: PropTypes.string,
  expandable: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

Fieldset.defaultProps = {
  layout: 'default',
  expandable: false,
  defaultOpen: true
}

export default function Fieldset ({
  className,
  label,
  tooltip,
  description,
  layout,
  expandable = false,
  defaultOpen = true,
  children
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  return (
    <fieldset className={`ocu-fieldset ${className || ''} ${layout} ${isOpen ? 'open' : 'closed'} ${expandable ? 'expandable' : ''}`}>
      <div className="fieldset-description" onClick={() => setIsOpen(!isOpen)}>
        <Label label={label} tooltip={tooltip} />
        <div className="desc">{description}</div>
      </div>
      <div className="fieldset-children">
        {children}
      </div>
    </fieldset>
  )
}
