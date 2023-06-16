import React from 'react';
import { getIn } from 'formik';
import './TextInput.css';
import Label from '../Label/Label';

interface TextInputProps {
  className?: string;
  innerRef?: () => void;
  tooltip?: string;
  hint?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  field?: object | any;
  form?: object | any;
}

const TextInput: React.FC<TextInputProps> = ({
  className,
  innerRef,
  tooltip,
  hint,
  label,
  placeholder,
  required,
  disabled,
  field,
  form,
}) => {
  const status = getIn(form.touched, field.name) && getIn(form.errors, field.name) ? 'invalid' : '';

  return (
    <div className={`ocufield ocu-textinput form-group ${className} ${status} ${disabled && 'disabled'}`}>
      <Label label={label} tooltip={tooltip} htmlFor={field.name} required={required} />
      <input
        className="form-input"
        {...field}
        placeholder={placeholder}
        type="text"
        required={required}
        disabled={disabled}
        ref={innerRef}
      />
      {hint && <div className="hint">{hint}</div>}
      {getIn(form.touched, field.name) && getIn(form.errors, field.name) && (
        <small className="form-validation-error">{getIn(form.errors, field.name)}</small>
      )}
    </div>
  );
};

export default TextInput;