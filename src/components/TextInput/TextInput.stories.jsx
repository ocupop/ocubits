import React from 'react'
import Test from './Test'
// ----------------------------------------------------------------------

export default {
  title: 'Test',
  component: Test
}

const Template = (args) => <Test {...args} />

export const Basic = Template.bind({})

Basic.args = {}
