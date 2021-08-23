import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';


// Internal Use Function
function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
 
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      // thousandSeparator
      isNumericString
      // prefix="$ "
      format="+1 (###) ###-####" 
      // allowEmptyFormatting mask="_"
            
    />
    );
    
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Phone({Onchange, Phone}) {

  const [values, setValues] = useState({
 
    numberformat: Phone,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    // Onchange(values.numberformat);
    Onchange(event.target.value);
  };

  return (
    
    <div >
      <TextField fullWidth
        label="Telephone #"
        value={values.numberformat}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        variant="outlined"
        InputProps={{
          minLength:10,
          inputComponent: NumberFormatCustom, 
        }}
        required
      />
    </div>
  );
}