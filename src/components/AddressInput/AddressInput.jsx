import React, { useState } from 'react'
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
  innerRef: PropTypes.func,
  tooltip: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

AddressInput.defaultProps = {
  className: '',
  required: false,
  placeholder: ''
}

const statesArray = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY']

export default function AddressInput ({
  className,
  innerRef,
  tooltip,
  hint,
  label,
  placeholder,
  required,
  disabled,
  field,
  form: { errors, touched }
}) {
  const [showAddressField, setShowAddressField] = useState(true)
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  return (
    <div className={`ocufield ocu-addressinput form-group ${className} ${status} ${disabled && 'disabled'}`}>
      <Label label={label} tooltip={tooltip} htmlFor={field.name} required={required}/>

      <div className="toggle">
        <button
          type="button"
          className="btn btn-transparent text-primary p-0"
          onClick={() =>
            setShowAddressField(!showAddressField)
          }
        >
          {showAddressField
            ? (
            <small>Search location</small>
              )
            : (
            <small>Enter address details</small>
              )}
        </button>
      </div>

      {showAddressField
        ? (
          <div className="address-fields">
            <Field
              className='address'
              name="street_1"
              component={TextInput}
              placeholder="Street Address"
              label="Address"
            />
            <Field
              className='address2'
              name="street_2"
              component={TextInput}
              placeholder="Suite/Apartment #"
              label="&nbsp;"
            />
            <Field
              className='city'
              name="city"
              component={TextInput}
              placeholder="City"
              label="City"
            />
            <Field
              className='state'
              name="state"
              component={SelectInput}
              placeholder="State"
              label="State"
              options={
                statesArray.map(state => { return { value: state, label: state } })
              }

            />
            <Field
              className='zip'
              name="postalCode"
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
            <Field
              className='country'
              name="country"
              component={TextInput}
              placeholder="Country"
              label="Country"
            />
          </div>
          )
        : (
              <div className="p-8 border"> The Address Search Component will go here</div>
          )}

      {hint && <div className='helper'>{hint}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
