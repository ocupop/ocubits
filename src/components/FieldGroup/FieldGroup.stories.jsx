/* eslint-disable react/prop-types */
import React from 'react'
import FieldGroup from './FieldGroup'
// ----------------------------------------------------------------------

export default {
  title: 'Molecules/FieldGroup',
  component: FieldGroup,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['className', 'children', 'required', 'disabled', 'error'] }
  },
  argTypes: {
    error: {
      control: { type: 'boolean' }
    }
  },
  args: {
    className: null,
    children:
    <div>
      <label className='field-label'>The Field Label</label>
      <div className="field-input">
        <input
          value='Text Input Value'
          type='text'
          placeholder='Enter Your Text'
          // required={required}
          // disabled={disabled}
        />
        {/* <Hint hint={hint} />
        <ErrorMessage error={error} /> */}
      </div>
    </div>,
    required: false,
    disabled: false,
    error: false
  }
}

function Template ({ className, children, required, disabled, error }) {
  return (
    <FieldGroup
      className={className}
      required={required}
      disabled={disabled}
      error={error}
    >
      {children}
    </FieldGroup>
  )
}

export const Basic = {
  render: (args, { globals: { debug } }) => Template({
    ...args,
    debug
  })
}
