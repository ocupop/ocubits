/* eslint-disable react/prop-types */
import React from 'react'

import { withCenteredStory } from '@lib'
import Label from './Label'
// ----------------------------------------------------------------------

export default {
  title: 'Molecules/Label',
  component: Label,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['tooltip', 'label', 'required'] }
  },
  args: {
    tooltip: null,
    label: 'Field Label',
    className: '',
    htmlFor: '',
    required: true
  }
}

function Template ({ tooltip, label, className, htmlFor, required }) {
  return (
    <Label
      tooltip={tooltip}
      label={label}
      className={className}
      htmlFor={htmlFor}
      required={required}
    />
  )
}

export const Basic = Template.bind({})
