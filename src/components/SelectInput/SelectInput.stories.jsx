import React from 'react'
import { Field } from 'formik'
import { FormikWrapper } from '@lib'
import PropTypes from 'prop-types'

import SelectInput from './SelectInput'
import { withCenteredStory } from '@lib/withCenteredStory'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/SelectInput',
  component: SelectInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { exclude: ['className', 'validationSchema', 'innerRef', 'form', 'field'] }
  },
  args: {
    // passed into <Field ...>
    name: 'selectField',
    className: '',
    hint: '',
    placeholder: '',
    // defaultValue: { value: 'strawberry', label: 'Strawberry' },
    label: 'Make a Selection',
    isMulti: false,
    isSearchable: false,
    options: [
      {
        label: 'Colours',
        options: [
          { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
          { value: 'blue', label: 'Blue', color: '#0052CC' },
          { value: 'purple', label: 'Purple', color: '#5243AA' },
          { value: 'red', label: 'Red', color: '#FF5630' },
          { value: 'orange', label: 'Orange', color: '#FF8B00' },
          { value: 'yellow', label: 'Yellow', color: '#FFC400' },
          { value: 'green', label: 'Green', color: '#36B37E' },
          { value: 'forest', label: 'Forest', color: '#00875A' },
          { value: 'slate', label: 'Slate', color: '#253858' },
          { value: 'silver', label: 'Silver', color: '#666666' }
        ]
      },
      {
        label: 'Flavours',
        options: [
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }
        ]
      }

    ],

    // passed into <Formik ...>
    initialValues: {
      selectField: [{ value: 'strawberry', label: 'Strawberry' }]
    },
    validationSchema: false,

    // Passed into <FormikWrapper...>
    debug: false

  }
}

const Template = ({ name, label, hint, placeholder, className, initialValues, defaultValue, isMulti, isSearchable, onChange, options, validationSchema, required, type, debug }) => {
  const formik = { initialValues, validationSchema, debug }
  const field = { name, className, hint, placeholder, defaultValue, label, isMulti, isSearchable, onChange, options, type, required }
  return (
    <FormikWrapper {...formik}>
      <Field {...field} component={SelectInput} />
    </FormikWrapper>
  )
}
Template.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  // field: PropTypes.instanceOf(Object),
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.instanceOf(Object),
  label: PropTypes.string,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Object),
  // form: PropTypes.instanceOf(Object),
  type: PropTypes.string,

  initialValues: PropTypes.object,
  validationSchema: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  required: PropTypes.bool,
  debug: PropTypes.bool
}

export const Basic = Template.bind({})
