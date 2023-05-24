import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

describe('Label component', () => {
  it('renders label text correctly', () => {
    const labelText = 'Test Label';
    const { getByText } = render(<Label label={labelText} />);
    const labelElement = getByText(labelText);
    expect(labelElement).toBeInTheDocument();
  });

  it('renders tooltip correctly when provided', () => {
    const labelText = 'Test Label';
    const tooltipText = 'Tooltip Text';
    const { getByText } = render(
      <Label label={labelText} tooltip={tooltipText} />
    );
    const tooltipElement = getByText(tooltipText);
    expect(tooltipElement).toBeInTheDocument();
  });

  it('applies the "required" class when required prop is true', () => {
    const labelText = 'Test Label';
    const { container } = render(<Label label={labelText} required />);
    const labelWrapElement = container.querySelector('.label-wrap');
    expect(labelWrapElement).toHaveClass('required');
  });

  it('does not apply the "required" class when required prop is false', () => {
    const labelText = 'Test Label';
    const { container } = render(<Label label={labelText} />);
    const labelWrapElement = container.querySelector('.label-wrap');
    expect(labelWrapElement).not.toHaveClass('required');
  });

  // Add more test cases as needed
});
