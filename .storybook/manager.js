// .storybook/manager.js

import { addons } from '@storybook/manager-api'
import OcuTheme from './OcuTheme'

addons.setConfig({
  theme: OcuTheme
})