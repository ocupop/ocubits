/* eslint-disable react/prop-types */
import React from 'react'
import { withCenteredStory } from '@lib'
import Fieldset from './Fieldset'
// ----------------------------------------------------------------------

export default {
  title: 'Molecules/Fieldset',
  component: Fieldset,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['className', 'label', 'tooltip', 'description', 'layout', 'expandable', 'defaultOpen'] }
  },
  argTypes: {
    layout: {
      options: ['default', 'two-col', 'dark'],
      control: { type: 'select' }
    }
  },
  args: {
    className: null,
    label: 'Security Mechanisms',
    tooltip: null,
    description: 'Security mechanisms implemented by the manufacturer',
    layout: null,
    children: <div>
      <p className="mb-4">This is a dynamic content area that can be passed any type of child. We will likley use this to contain a group of form fields all related within this fieldset.</p>
      <p>Id volutpat lacus laoreet non curabitur. Id ornare arcu odio ut. Nisi vitae suscipit tellus .</p>
      </div>,
    expandable: false,
    defaultOpen: true
  }
}

function Template ({ className, label, tooltip, description, layout, expandable, defaultOpen, children }) {
  return (
    <Fieldset
      className={className}
      label={label}
      tooltip={tooltip}
      description={description}
      layout={layout}
      expandable={expandable}
      defaultOpen={defaultOpen}
    >
      {children}
    </Fieldset>
  )
}

export const Basic = Template.bind({})
