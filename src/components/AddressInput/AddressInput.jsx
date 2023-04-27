import React from 'react'
import PropTypes from 'prop-types'
import { getIn, Field } from 'formik'

import TextInput from '../TextInput/TextInput'
import NumberInput from '../NumberInput/NumberInput'
import SelectInput from '../SelectInput/SelectInput'
import Label from '../Label/Label'
import './AddressInput.css'
// ----------------------------------------------------------------------

AddressInput.propTypes = {
  className: PropTypes.string,
  tooltip: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

AddressInput.defaultProps = {
  required: false,
  disabled: false
}

const statesArray = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY']

export default function AddressInput ({
  className,
  tooltip,
  hint,
  label,
  required,
  disabled,
  field,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  return (
    <div className={`ocufield ocu-addressinput form-group ${className} ${status} ${disabled && 'disabled'}`}>

      <Label label={label} tooltip={tooltip} htmlFor={field.name} required={required}/>

      <div className="address-fields">
        <Field
          className='address'
          name={`${field.name}.address`}
          component={TextInput}
          placeholder="Street Address"
          label="Address"
        />
        <Field
          className='address2'
          name={`${field.name}.address2`}
          component={TextInput}
          placeholder="Suite/Apartment #"
          label="&nbsp;"
        />
        <Field
          className='city'
          name={`${field.name}.city`}
          component={TextInput}
          placeholder="City"
          label="City"
        />
        <Field
          className='state'
          name={`${field.name}.state`}
          component={SelectInput}
          placeholder="State"
          label="State"
          options={
            statesArray.map(state => { return { value: state, label: state } })
          }
        />
        <Field
          className='zip'
          name={`${field.name}.postalcode`}
          component={NumberInput}
          placeholder="Postal Code"
          label="Zip"
          maskOptions={{
            includeThousandsSeparator: false,
            allowDecimal: false,
            integerLimit: 5,
            allowNegative: false
          }}
        />
        {/* <Field
          className='country'
          name={`${field.name}.country`}
          component={TextInput}
          placeholder="Country"
          label="Country"
        /> */}
      </div>

      {hint && <div className='helper'>{hint}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
