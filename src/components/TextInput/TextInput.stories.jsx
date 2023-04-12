import React from 'react'
import { Field } from 'formik'
import { FormikWrapper } from '@lib'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import TextInput from './TextInput'
import { withCenteredStory } from '@lib/withCenteredStory'
// ----------------------------------------------------------------------

export default {
  title: 'Components/TextInput',
  component: TextInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { exclude: ['className', 'validationSchema', 'innerRef', 'type', 'form', 'field'] }
  },
  args: {
    // passed into <Field ...>
    name: 'fieldName',
    label: 'Field Label',
    hint: null,
    placeholder: null,
    className: '',
    required: false,

    // passed into <Formik ...>
    initialValues: { fieldName: '' },
    validationSchema: false,

    // Passed into <FormikWrapper...>
    debug: false
  }
}

const Template = ({ name, label, hint, placeholder, className, initialValues, validationSchema, required, debug }) => {
  const formik = { initialValues, validationSchema, debug }
  const field = { name, label, hint, placeholder, className, required }
  return (
    <FormikWrapper {...formik}>
      <Field {...field} component={TextInput} className={className} />
    </FormikWrapper>
  )
}
Template.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  required: PropTypes.bool,
  debug: PropTypes.bool
}

export const Basic = Template.bind({})

// export const WithOverrides = Template.bind({})
// WithOverrides.args = {
//   name: 'yourName',
//   label: 'Your Name',
//   hint: 'Hint: Must be between 5-12 characters.',
//   placeholder: 'Enter Your name',
//   className: 'shazam',
//   required: true,
//   initialValues: {
//     yourName: 'John Doe'
//   },
//   validationSchema: Yup.object().shape({
//     yourName: Yup.string()
//       .min(5, 'Too Short!')
//       .max(12, 'Too Long!')
//       .required('Required')
//   }),
//   debug: true
// }
