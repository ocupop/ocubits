import type { Preview } from "@storybook/react";
import '../src/styles/index.css';
import './storybook.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  argTypes: {
    name: {
      table: { category: 'Global',type: { summary: 'string' }, },
      type: { name: 'string', required: true },
      description: 'Name of the variable.'
    },
    label: {
      table: { category: 'Global' },
      description: 'Text above the input field'
    },
    tooltip: {
      table: { category: 'Global' },
      description: 'Shows a hover icon (?) with additional text.'
    },
    hint: {
      table: { category: 'Global' },
      description: 'Help text that appears below the field.'
    },
    required: {
      table: { category: 'Global' },
      description: 'Adds an astericks next to the label.'
    },
    disabled: {
      table: { category: 'Global' },
      description: 'Applies a "disabled" css class and marks the input as read-only.'
    },
    className: {
      table: { category: 'Global' },
      description: 'Class name that is applied to the parent element that wraps this field, label and help text.'
    },
    placeholder: {
      table: { category: 'Global' },
      description: 'Text that appears in the input when no value is entered.'
    },
  },
  globalTypes: {
    debug: {
      name: 'Debug',
      description: 'Toggle Debug buttons on/off',
      defaultValue: false,
      toolbar: {
        icon: 'cpu',
        // Array of plain string values or MenuItem shape (see below)
        items: [
          { value: true, title: 'Debug On' },
          { value: false, title: 'Debug Off' }
        ],
        // Property that specifies if the name of the item will be displayed
        showName: true,
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
