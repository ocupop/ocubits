import React from 'react'
import { Field } from 'formik'
import { FormikWrapper } from '@lib'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import emailMask from 'text-mask-addons/dist/emailMask'

import TextInput from './TextInput'
import { withCenteredStory } from '@lib/withCenteredStory'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/TextInput',
  component: TextInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { exclude: ['className', 'validationSchema', 'innerRef', 'form', 'field'] }
  },
  argTypes: {
    type: {
      options: ['text', 'number', 'phone', 'email', 'password', 'hidden', 'date', 'time', 'url', 'tel'],
      control: { type: 'select' }
    }
  },
  args: {
    // passed into <Field ...>
    name: 'fieldName',
    label: 'Field Label',
    hint: null,
    placeholder: null,
    className: '',
    required: false,
    maskOptions: false,
    type: 'text',

    // passed into <Formik ...>
    initialValues: { fieldName: '' },
    validationSchema: false,

    // Passed into <FormikWrapper...>
    debug: false
  }
}

const Template = ({ name, label, hint, placeholder, className, initialValues, validationSchema, required, maskOptions, type, debug }) => {
  const formik = { initialValues, validationSchema, debug }
  const field = { name, label, hint, placeholder, className, required, maskOptions, type }
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
  type: PropTypes.string,
  initialValues: PropTypes.object,
  validationSchema: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  required: PropTypes.bool,
  maskOptions: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  debug: PropTypes.bool
}

export const Basic = Template.bind({})
