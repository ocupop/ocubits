/* eslint-disable react/prop-types */
import React from 'react'
import Label from './Label'
// ----------------------------------------------------------------------

export default {
  title: 'Molecules/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['label', 'className', 'fieldName'] },
    docs: {
      description: {
        component: 'Simple &lt;label&gt; element'
      }
    }
  },
  args: {
    label: 'Field Label'
  },
  argTypes: {
    fieldName: {
      description: 'The field name of the input that this label describes'
    }
  }
}

function Template ({ label, className, fieldName }) {
  return (
    <Label
      label={label}
      className={className}
      fieldName={fieldName}
    />
  )
}

export const Basic = {
  render: (args, { globals: { debug } }) => Template({
    ...args,
    debug
  })
}
