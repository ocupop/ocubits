import React from 'react'
import { Field } from 'formik'
import TextInput from './TextInput'
import { FormikWrapper } from '@lib'
import * as Yup from 'yup';
// ----------------------------------------------------------------------

export default {
  title: 'Components/TextInput',
  component: TextInput,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        {/* Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  args: {
    formArgs: {
      initialValues: {},
      validationSchema: Yup.object().shape({
        yourName: Yup.string()
          .min(5, 'Too Short!')
          .max(12, 'Too Long!')
          .required('Required')
      }),
      onSubmit: {}
    },
    fieldArgs: {}
  },
}

const Template = ({formArgs, fieldArgs}) => (
  <FormikWrapper {...formArgs}>
    <Field {...fieldArgs} component={TextInput} />
  </FormikWrapper>
)

export const Basic = Template.bind({})

Basic.args = {
  fieldArgs: {
    name: 'yourName',
    label: 'Your Name',
    hint: 'Hint: Must be between 5-12 characters.',
    placeholder: 'Enter Your name'
  },
  formArgs: {
    initialValues: {
      yourName: "John Doe"
    }
  }
}
