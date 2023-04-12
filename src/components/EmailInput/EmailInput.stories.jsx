import React from 'react'
import { Field } from 'formik'
import { FormikWrapper } from '@lib'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import EmailInput from './EmailInput'
import { withCenteredStory } from '@lib/withCenteredStory'
// ----------------------------------------------------------------------

export default {
  title: 'Components/EmailInput',
  component: EmailInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { exclude: ['className', 'validationSchema', 'type', 'form', 'field'] }
  },
  args: {
    // passed into <Field ...>
    name: 'email',
    label: 'Email Address',
    hint: null,
    placeholder: '',
    className: '',
    required: false,

    // passed into <Formik ...>
    initialValues: { email: '' },
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
      <Field {...field} component={EmailInput} className={className} />
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
