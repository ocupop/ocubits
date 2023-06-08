import React from 'react';
import { getIn, FieldProps, FormikProps } from 'formik';
import Select, { Props as SelectProps } from 'react-select';

import Label from '../Label/Label';
import './SelectInput.css';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps extends FieldProps {
  className?: string;
  tooltip?: string;
  hint?: string;
  placeholder?: string;
  defaultValue?: SelectOption;
  label?: string;
  isMulti?: boolean;
  isSearchable?: boolean;
  onChange?: (option: SelectOption | SelectOption[] | null) => void;
  options?: SelectOption[];
  required?: boolean;
  disabled?: boolean;
  form: FormikProps<any>;
}

const SelectInput: React.FC<SelectInputProps> = ({
  className,
  form,
  field,
  tooltip,
  hint,
  placeholder,
  defaultValue,
  label,
  isMulti,
  isSearchable,
  onChange,
  options,
  required,
  disabled,
}) => {
  const formatGroupLabel = (data: { label: string; options: SelectOption[] }) => (
    <div className="select-group">
      <span className="label">{data.label}</span>
      <span className="badges">{data.options.length}</span>
    </div>
  );

  const status = form.touched[field.name] && form.errors[field.name] ? 'invalid' : '';

  const handleOnChange = (option: SelectOption | SelectOption[] | null) => {
    if (onChange) onChange(option);
    form.setFieldValue(field.name, option);
  };

  return (
    <div className={`ocufield ocu-select form-group ${className} ${status} ${disabled && 'disabled'}`}>
      <Label label={label} tooltip={tooltip} htmlFor={field.name} required={required} />
      <Select
        {...field}
        required={required}
        defaultValue={defaultValue}
        formatGroupLabel={formatGroupLabel}
        onChange={handleOnChange}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
        isSearchable={isSearchable}
        isDisabled={disabled}
        isClearable
        classNamePrefix="select"
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#EBECF0',
            primary: '#3737F3',
          },
        })}
      />
      {hint && <div className="hint">{hint}</div>}
      {getIn(form.errors, field.name) && (
        <small className="form-validation-error">{getIn(form.errors, field.name)}</small>
      )}
    </div>
  );
};

export default SelectInput;
