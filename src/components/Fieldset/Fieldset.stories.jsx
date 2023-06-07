/* eslint-disable react/prop-types */
import React from 'react'
import Fieldset from './Fieldset'
// ----------------------------------------------------------------------

export default {
  title: 'Molecules/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['className', 'name', 'collapsible', 'open', 'children'] }
  },
  // argTypes: {
  //   layout: {
  //     options: ['default', 'two-col', 'dark'],
  //     control: { type: 'select' }
  //   }
  // },
  args: {
    className: null,
    name: 'Security Mechanisms',
    children: <div>JSX Output Here</div>
  }
}

function Template ({ className, name, collapsible, open, children }) {
  return (
    <Fieldset
      className={className}
      name={name}
      collapsible={collapsible}
      open={open}
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
