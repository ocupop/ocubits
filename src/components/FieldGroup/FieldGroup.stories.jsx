/* eslint-disable react/prop-types */
import React from 'react'
import FieldGroup from './FieldGroup'

import { Label, TextInput } from '@components'
// ----------------------------------------------------------------------

export default {
  title: 'Molecules/FieldGroup',
  component: FieldGroup,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['className', 'required', 'disabled', 'error'] },
    docs: {
      description: {
        component: 'This element wraps each group of field input elements. Typically this might inlcude the label, input, hint and validation errors.'
      }
    }
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
          type='text'
          placeholder='Enter Your Text'
        />
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
