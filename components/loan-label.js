// REQUEST A CALL BACK | APPLY FOR LOAN

import Button from '@material-ui/core/Button';

const LoanLabel = ({forms})=>{

return (
    <div className="p-5 bg-light d-flex justify-content-center ">

<div className="col-xs-12 col-md-5 d-flex justify-content-center">
<Button 
onClick={()=>forms()} // Call-back-form | Toggle form fields 
className="text-white p-3"
 style={{backgroundImage:  "linear-gradient(to right top, #FF9900, #EB6123, #F9A602)"}} >Request a call back</Button>
</div>

<h2 style={{paddingLeft:'20px', paddingRight:'20px'}}>OR</h2>

<div className="col-xs-12 col-md-5 d-flex justify-content-center">
<Button 
className="text-white p-3"
 style={{backgroundImage:  "linear-gradient(to right top, #FF9900, #EB6123, #F9A602)"}}
 href="https://cokcu.com"
  >APPLY FOR LOAN</Button>
</div>

    
    </div>
)


}

export default LoanLabel