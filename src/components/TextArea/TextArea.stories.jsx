import React from 'react'
import { Field } from 'formik'
import { FormikWrapper } from '@lib'
import PropTypes from 'prop-types'
import * as Yup from 'yup'

import TextArea from './TextArea'
import { withCenteredStory } from '@lib/withCenteredStory'
// ----------------------------------------------------------------------

export default {
  title: 'Components/TextArea',
  component: TextArea,
  decorators: [withCenteredStory],
  parameters: {
    controls: { exclude: ['className', 'validationSchema', 'innerRef', 'form', 'field'] }
  },
  args: {
    // passed into <Field ...>
    name: 'fieldName',
    label: 'Field Label',
    hint: null,
    placeholder: null,
    className: '',
    rows: 4,
    required: false,

    // passed into <Formik ...>
    initialValues: { fieldName: '' },
    validationSchema: false,

    // Passed into <FormikWrapper...>
    debug: false
  }
}

const Template = ({ name, label, hint, placeholder, className, rows, required, initialValues, validationSchema, debug }) => {
  const formik = { initialValues, validationSchema, debug }
  const field = { name, label, hint, placeholder, className, rows, required }
  return (
    <FormikWrapper {...formik}>
      <Field {...field} component={TextArea} className={className} />
    </FormikWrapper>
  )
}
Template.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  rows: PropTypes.number,
  required: PropTypes.bool,
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  debug: PropTypes.bool
}

export const Basic = Template.bind({})
