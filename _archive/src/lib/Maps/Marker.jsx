import React from 'react'
import PropTypes from 'prop-types'
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import Popover from 'react-bootstrap/Popover'

const Marker = ({ text }) => {
  const markerStyles = {
    width: '20px',
    height: '20px',
    backgroundColor: '#5fb35f',
    border: '2px solid #fff',
    borderRadius: '50% 50% 50% 0',
    transform: 'rotate(-45deg)'
  }

  return (
    <div style={markerStyles} className="map-marker"></div>
    // <OverlayTrigger
    //   trigger="click"
    //   placement="top"
    //   overlay={
    //     <Popover>
    //       <Popover.Title as="h3">
    //         <strong>{text}</strong>
    //       </Popover.Title>
    //       <Popover.Content></Popover.Content>
    //     </Popover>
    //   }>
    //   <div style={markerStyles} className="map-marker"></div>
    // </OverlayTrigger>
  )
}

Marker.propTypes = {
  text: PropTypes.string
}

export default Marker
