import { useState } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';


// Internal Function 
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
      thousandSeparator
      isNumericString
      prefix="$ "
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function LoanAmount({Onchange, Loan, forwardLoanRef, invest}) {

  const [values, setValues] = useState({  
    numberformat: Loan,
  });

  forwardLoanRef((v)=>setValues({...values,numberformat:v}));

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    Onchange(event.target.value);
  };

  return (    
    <div >
      <TextField fullWidth
        label={invest?invest:"Loan Amount $"}
        value={values.numberformat}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        variant="outlined"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
        required
      />
    </div>
  );
}