/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import SelectInput from './SelectInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/SelectInput',
  component: SelectInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'hint', 'placeholder', 'required', 'initialValues', 'debug', 'options', 'isMulti', 'isSearchable'] }
  },
  args: {
    name: 'selectField',
    label: 'Make a Selection',
    hint: '',
    placeholder: '',
    required: false,
    className: '',
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
    initialValues: {
      selectField: [{ value: 'strawberry', label: 'Strawberry' }]
    },
    debug: false
  }
}

function Template ({ name, label, hint, placeholder, required, className, isMulti, isSearchable, onChange, options, initialValues, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={SelectInput}
        name={name}
        label={label}
        hint={hint}
        placeholder={placeholder}
        required={required}
        className={className}
        isMulti={isMulti}
        isSearchable={isSearchable}
        onChange={onChange}
        options={options}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
