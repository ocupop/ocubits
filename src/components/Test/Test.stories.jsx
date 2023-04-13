import React from 'react'
import Test from './Test'

// ----------------------------------------------------------------------

export default {
  title: 'Example/Test',
  component: Test,
  args: {
    title: 'Default Title'
  }
}

function Template (args) {
  return <Test {...args} />
}

export const Basic = Template.bind({})
Basic.args = {
  title: 'Hello World'
}
