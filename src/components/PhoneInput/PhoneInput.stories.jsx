import React from 'react'
import { Field } from 'formik'
import { FormikWrapper } from '@lib'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import PhoneInput from './PhoneInput'
import { withCenteredStory } from '@lib/withCenteredStory'
// ----------------------------------------------------------------------

export default {
  title: 'Components/PhoneInput',
  component: PhoneInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { exclude: ['className', 'validationSchema', 'type', 'form', 'field'] }
  },
  args: {
    // passed into <Field ...>
    name: 'phone',
    label: 'Phone Number',
    hint: null,
    placeholder: '(___) ___-____',
    className: '',
    required: false,

    // passed into <Formik ...>
    initialValues: { phone: '' },
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
      <Field {...field} component={PhoneInput} className={className} />
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
  validationSchema: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  required: PropTypes.bool,
  debug: PropTypes.bool
}

export const Basic = Template.bind({})

// export const WithOverrides = Template.bind({})
// WithOverrides.args = {
//   name: 'phone',
//   label: 'Your Phone Number',
//   hint: 'Hint: Must be between 5-12 characters.',
//   placeholder: '(###) ###-####',
//   className: 'shazam',
//   required: true,
//   initialValues: {
//     phone: '5555555555'
//   },
//   debug: true
// }
