/* eslint-disable react/prop-types */

import Fieldset from './Fieldset'
// ----------------------------------------------------------------------

export default {
  title: 'Molecules/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['className', 'label', 'tooltip', 'description', 'layout', 'expandable', 'defaultOpen', 'className'] }
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
    description: 'Place description Here',
    children: <div>JSX Output Here</div>
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

export const Basic = {
  render: (args, { globals: { debug } }) => Template({
    ...args,
    debug
  })
}
