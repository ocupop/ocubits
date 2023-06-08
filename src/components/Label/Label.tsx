import React, { ReactNode } from 'react';

import Tooltip from '../Tooltip/Tooltip';
// import './Label.css';
// ----------------------------------------------------------------------

interface LabelProps {
  label?: string;
  tooltip?: string;
  className?: string;
  htmlFor?: string | null;
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({ tooltip, label, required = false, className = '', htmlFor }) => {
  if (!label) return null;

  return (
    <div className={`${className || ''} label-wrap ${required ? 'required' : ''}`}>
      <label htmlFor={htmlFor !== null ? htmlFor : undefined}>{label}</label>
      {tooltip && <Tooltip>{tooltip}</Tooltip>}
    </div>
  );
};

export default Label;
