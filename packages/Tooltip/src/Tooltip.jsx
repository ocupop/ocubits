import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip as ReactToolTip } from 'react-tooltip'
import { v4 as uuid } from 'uuid'
// import 'react-tooltip/dist/react-tooltip.css'
// import './Tooltip.css'

// ----------------------------------------------------------------------
Tooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Tooltip.defaultProps = {
  children: PropTypes.node
}

export default function Tooltip ({
  children,
  className,
  ...props
}) {
  const id = `tip-${uuid()}`
  return (
    <div
      {...props}
      className={`ocu-tooltip ${className || ''}`}
    >
      <button
        data-tooltip-id="my-tooltip"
        data-tooltip-place="top"
        className='icon'
        style={{ lineHeight: 0 }}
        id={id}
      >
        ?
      </button>
      <ReactToolTip anchorSelect={`#${id}`} className={'tooltip-content'}>
        <span dangerouslySetInnerHTML={{ __html: children }}/>
      </ReactToolTip>

    </div>
  )
}