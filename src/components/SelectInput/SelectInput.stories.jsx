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
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'options', 'isMulti', 'isSearchable', 'required', 'disabled', 'debug'] }
  },
  args: {
    name: 'selectField',
    label: 'Make a Selection',
    tooltip: null,
    hint: null,
    placeholder: null,
    className: null,
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
    disabled: false,
    required: false,
    debug: false
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, isMulti, isSearchable, onChange, options, initialValues, required, disabled, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={SelectInput}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        placeholder={placeholder}
        className={className}
        isMulti={isMulti}
        isSearchable={isSearchable}
        onChange={onChange}
        options={options}
        disabled={disabled}
        required={required}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
