import React from 'react'
import Tooltip from './Tooltip'

// ----------------------------------------------------------------------

export default {
  title: 'Experimental/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['placement', 'children', 'className'] }
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '4em', textAlign: 'center' }}>
        <Story />
      </div>
    )
  ],

  argTypes: {
    placement: {
      control: 'select',
      options: ['bottom', 'top', 'left', 'right'],
      description: 'Which direction the popup should appear relative to the icon'
    },
    children: {
      description: 'What appears in the tooltip. Can be a string or JSX'
    }
  }
}

function Template (args) {
  return <Tooltip {...args} />
}

export const Basic = {
  render: (args, { globals: { debug } }) => Template({
    ...args,
    debug,
    placement: 'top',
    children: 'This is the tooltip text'
  })
}

export const LongText = {
  render: (args, { globals: { debug } }) => Template({
    ...args,
    debug,
    placement: 'bottom',
    children: '<ol><li>If one type of access control is password, whether the password is used to protect settings or data</li><li>If one type of access control is password, whether the password is used on the device or for an associated cloud account</li><li>If one type of access control is password, whether the device can be accessed locally without the password</li><li>Tips on how to make strong passwords </li><li>How users can reset their passwords </li><li>What the password expiration policy is</li><li>If the type of access control is multi-factor authentication, what types of factors/pieces of evidence are required</li><li>If the type of access control is biometric data, what characteristics of the user are required</li><li>Justification as to why no authentication method is being used   </li><li>Justification as to why credentials have default values, if any</li><li>Justification as to why users cannot set or change the credentials</li><li>At which stage users can/should set or change the credentials</li><li>Justification as to why users need to have an account to access the mobile application/device</li><li>If it is allowed to create more than one account, what levels of access and privilege each account can have</li><li>If it is allowed to create more than one account, how many accounts can be created to access the device/mobile application</li><li>Justification as to why no user account is needed to access the device/mobile application</li></ol>'
  })
}
