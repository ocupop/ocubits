/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import Fieldset from './Fieldset'
// ----------------------------------------------------------------------

export default {
  title: 'Molecules/Fieldset',
  component: Fieldset,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['className', 'label', 'tooltip', 'description', 'layout'] }
  },
  argTypes: {
    layout: {
      options: ['default', 'two-col', 'dark'],
      control: { type: 'select' }
    }
  },
  args: {
    className: '',
    label: 'Security Mechanisms',
    tooltip: null,
    description: 'Security mechanisms implemented by the manufacturer',
    layout: null,
    children: <div>Children</div>
  }
}

function Template ({ className, label, tooltip, description, layout }) {
  return (
    <Fieldset
      className={className}
      label={label}
      tooltip={tooltip}
      description={description}
      layout={layout}
    >
      <div className="w-full h-56">This is the area where the form fields will go</div>
    </Fieldset>
  )
}

export const Basic = Template.bind({})
