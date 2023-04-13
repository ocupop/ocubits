import React from 'react'
import Test from './Test'

// ----------------------------------------------------------------------

export default {
  title: 'Fields/Test',
  component: Test,
  args: {
    title: 'Default Title'
  },
}

const Template = (args) => <Test {...args} />

export const Basic = Template.bind({})
Basic.args = {
  title: 'Hello World',
}