import React from 'react'
import { Field } from 'formik'

import TextInput from './TextInput'
import { FormikWrapper } from '@lib'
// ----------------------------------------------------------------------

export default {
  title: 'TextInput',
  component: TextInput
}

const Template = (args) => (
  <FormikWrapper>
    <Field {...args} component={TextInput} />
  </FormikWrapper>
)

export const Basic = Template.bind({})

Basic.args = {
  name: 'textInput',
  label: 'Text Input',
  hint: 'This is a hint',
  placeholder: 'Placeholder',
}
