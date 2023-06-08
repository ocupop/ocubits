/* eslint-disable react/prop-types */
import { Description } from '@storybook/blocks'

import React from 'react'
import Fieldset from './Fieldset'
// ----------------------------------------------------------------------

export default {
  title: 'Molecules/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['className', 'name', 'collapsible', 'open'] },
    docs: {
      description: {
        component: 'This is a container element, with a header and children. The header is the title of the group, and the children will typically be a group of related fields.'
      }
    }
  },
  // argTypes: {
  //   layout: {
  //     options: ['default', 'two-col', 'dark'],
  //     control: { type: 'select' }
  //   }
  // },
  args: {
    name: 'Personal Info',
    children: <div className='flex flex-col gap-2'>
      <label>First Name:<input type='text' className='border ml-3 '/></label>
      <label>Your Address:<input type='text' className='border ml-3 '/></label>
      </div>
  }
}

function Template ({ className, name, collapsible, open, children }) {
  return (
    <Fieldset
      className={className}
      name={name}
      collapsible={collapsible}
      open={open}
    >
      {children}
    </Fieldset>
  )
}

export const Basic = {
  render: (args, { globals: { debug } }) => Template({
    ...args,
    debug
  })
}
