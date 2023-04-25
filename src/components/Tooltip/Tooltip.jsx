import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Tooltip.css'

// ----------------------------------------------------------------------

export default function ToolTip ({
  children,
  className,
  placement,
  triggerType,
  unstyled,
  ...props
}) {
  // const [show, setShow] = useState(false)
  const show = false

  return (
    <div
      {...props}
      className={`ocu-tooltip ${className}`}
      data-unstyled={unstyled ? true : null}
    >
      {show && (
        <div
          id='tooltip-default'
          role='tooltip'
          style={{ minWidth: '200px', textAlign: 'center' }}
          className={`tooltip ${placement}  `}
        >
          {children}
          <div className='tooltip-arrow' data-popper-arrow></div>
        </div>
      )}
      <button
        // onMouseOver={() => setShow(true)}
        // onMouseOut={() => setShow(false)}
        data-tooltip-target='tooltip-default'
        style={{ lineHeight: 0 }}
        className=''
      >
        ?<i className='fas fa-question-circle icon'></i>
      </button>
    </div>
  )
}
ToolTip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  placement: PropTypes.string,
  triggerType: PropTypes.string,
  unstyled: PropTypes.bool
}

ToolTip.defaultProps = {
  children: PropTypes.node,
  className: '',
  placement: 'top',
  unstyled: false
}
