import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'

import Label from '../Label/Label'
import './Fieldset.css'
// ----------------------------------------------------------------------

Fieldset.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  tooltip: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

Fieldset.defaultProps = {}

export default function Fieldset ({
  className,
  label,
  tooltip,
  description,
  layout,
  children
}) {
  return (
    <fieldset className={`ocu-fieldset ${className} ${layout} `}>
      <div className="fieldset-description">
        <Label label={label} tooltip={tooltip} />
        <div className="desc">{description}</div>
      </div>
      <div className="fieldset-children">
        {children}
      </div>
    </fieldset>
  )
}
