import React from 'react'
import Tooltip from './Tooltip'

// ----------------------------------------------------------------------

export default {
  title: 'Molecules/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['placement', 'children', 'className'] }
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '4em', textAlign: 'center' }}>
        <Story />
      </div>
    )
  ],

  argTypes: {
    placement: {
      control: 'select',
      options: ['bottom', 'top', 'left', 'right'],
      description: 'Which direction the popup should appear relative to the icon'
    },
    children: {
      description: 'What appears in the tooltip. Can be a string or JSX'
    }
  }
}

function Template (args) {
  return <Tooltip {...args} />
}

export const Basic = {
  render: (args, { globals: { debug } }) => Template({
    ...args,
    debug,
    placement: 'top',
    children: 'This is the tooltip text'
  })
}
