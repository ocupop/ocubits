import React from 'react'
import { Field } from 'formik'
import TextInput from './TextInput'
import { FormikWrapper } from '@lib'
import * as Yup from 'yup';
import { withCenteredStory } from '@lib/withCenteredStory';
// ----------------------------------------------------------------------

const args = {
  // "formArgs" are passed into <Formik ...>
  formArgs: {
    initialValues: { fieldName: "Field Value" },
    validationSchema: {},
    onSubmit: () => null,
    includeSubmitButton: false
  },
  // "fieldArgs" are passed into <Field ...>
  fieldArgs: {
    name: 'fieldName',
    label: 'Field Label',
    hint: null,
    placeholder: null,
    className: null
  }
}

export default {
  title: 'Components/TextInput',
  component: TextInput,
  decorators: [withCenteredStory],
  args,
}

const Template = ({formArgs, fieldArgs}) => (
  <FormikWrapper {...formArgs}>
    <Field {...fieldArgs} component={TextInput} />
  </FormikWrapper>
)

export const Basic = Template.bind({})

export const WithOverrides = Template.bind({})
WithOverrides.args = {
  fieldArgs: {
    ...args.fieldArgs,
    name: 'yourName',
    label: 'Your Name',
    hint: 'Hint: Must be between 5-12 characters.',
    placeholder: 'Enter Your name',
    className: 'border border-solid border-primary mt-8'
  },
  formArgs: {
    ...args.formArgs,
    initialValues: {
      yourName: "John Doe"
    },
    validationSchema: Yup.object().shape({
      yourName: Yup.string()
        .min(5, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Required')
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
    includeSubmitButton: true
  }
}
