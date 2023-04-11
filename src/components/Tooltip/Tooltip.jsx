import React, { useState, FC } from 'react'
import './Tooltip.css';

// ----------------------------------------------------------------------

const ToolTip = ({
  children,
  className = '',
  placement = 'top',
  triggerType: hover,
  unstyled = false,
  ...props
}) => {
  const [show, setShow] = useState(false)

  return (
    <div {...props} className={`ocutooltip ${className}`}  data-unstyled={unstyled ? true : null}>
      {show && (
        <div
          id="tooltip-default"
          role="tooltip"
          style={{ minWidth: '300px' }}
          className={`tooltip ${placement}  `}>
          {children}
          <div
            className="tooltip-arrow"
            data-popper-arrow
            style={{ width: '12px', height: '12px' }}></div>
        </div>
      )}
      <button
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
        data-tooltip-target="tooltip-default"
        style={{ lineHeight: 0 }}
        className="">
        ?<i className="fas fa-question-circle icon"></i>
      </button>
    </div>
  )
}

export default ToolTip