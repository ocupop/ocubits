import React from 'react'
import Tooltip from './Tooltip'
import { withCenteredStory } from '@lib/withCenteredStory'

// ----------------------------------------------------------------------

export default {
  title: 'Molecules/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <div style={{ padding: '4em', backgroundColor: '#e2e2e2', textAlign: 'center' }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    placement: { control: 'select', options: ['bottom', 'top', 'left', 'right'] }
  }
}

const Template = (args) => <Tooltip {...args} />

export const Basic = Template.bind({})
Basic.args = {
  placement: 'top',
  children: 'This is the tooltip text'
}
