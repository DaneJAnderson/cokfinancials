import { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import InputAdornment from '@material-ui/core/InputAdornment';
import Snackbar from '../snackbar';
import {Forms,SelectWidth, btnColor} from './form.module.css';
import MenuItem from '@material-ui/core/MenuItem';
import Phone from './phone-field';
import LoanAmount from './loan-field';
import LoanLabel from '../loan-label';


class CallBackForm extends Component {
  
    state = {     
      counter:'',
      fname:'',
      lname:'',
      loan_amount:'',
      email:'',
      phone:'',
      parish:'',
      auth:0,
      empl_status: '',
      place_of_empl:'',
      snacker:false,
      snackbarShow:'',
      showForm:false,      
      promo_name: this.props.promo_name,
    }     

componentDidMount() { 
   this.handleSubmit = this.handleSubmit.bind(this);      
}   

handleSubmit(event) {

  console.log(this.state.phone);    
  event.preventDefault();
  this.postData();
  
  this.setState({     
      counter:'',
      fname:'',
      lname:'',
      loan_amount:'',
      email:'',
      phone:'',
      parish:'',
      auth:0,
      empl_status: '',
      place_of_empl:'',
      snacker:false,
      snackbarShow:'',
      showForm:false,  
    } );    
  }

//  ------------------ Post Data ------------------- //
postData = ()=>{  

    axios.post('http://'+host+'/member-referral/public/api/post-referrer', data)                               
    .then(response => {         
     
        if(response.data.status === 1)
        {           
          // console.log(response.data);

          this.setState({snacker:true});

          let snackbarshow = <Snackbar text={'Member Successfully Added !'} openSnacker={this.state.snacker} />;

          this.setState({snackbarShow:snackbarshow});

      console.log(this.state.snacker)
        }
                              
    }).catch(error => {                
                   console.log('Post data Error', error)
     })
  }
  scrolling() {
    if(!this.state.showForm){

    window.scrollTo(0,0);
    setTimeout( () => {

      if(screen.width <= 768){

        window.scrollBy({
          top: 320, 
          left: 0, 
          behavior: 'smooth' 
         });  

      }else

    window.scrollBy({
      top: 770, 
      left: 0, 
      behavior: 'smooth' 
     });

    },100);

  }
  }
  
    render() {      
      
      const {classes} = this.props;
      let helperLoan_amount = '';
      let helperPhone = '';

     if( isNaN(this.state.loan_amount)){ helperLoan_amount = 'Incorrect entry, number required'}
     if( isNaN(this.state.phone)){ helperPhone = 'Incorrect entry, number required'}

      return (  
      <>        
        <LoanLabel forms={()=>{this.setState({showForm: !this.state.showForm});this.scrolling()}} /> 

        { this.state.showForm &&

      <div style={{flexGrow:1}} className="bg-light" >   
        
      <Grid container  alignItems="center" justifyContent="center" > 

      <Grid item xs={12} md={10}  className="mt-4 pb-5">

        <Card className="pt-2">
          <CardContent className={Forms} >

          <div className="text-center">
            <b className="fs-6 text-uppercase" style={{color: 'black', fontFamily: '"Times New Roman", Times, serif'}}>
              Complete the form below to be contacted <br/>
              </b>

          <h2 className="pt-3 pb-3 fw-bolder font">Sign up</h2>               
          </div><br/>

      <Grid container alignItems="center" justifyContent="center" > 
      <Grid container item xs={12} md={8} lg={7} className="" justifyContent="center">

          <form style={{flexGrow:'1',maxWidth:'800px'}}  onSubmit={this.handleSubmit}  autoComplete="off"> 
       {/* --------------------------- Referrer's Name ------------------- */}       
        
       <TextField fullWidth 
          error={false}
          id=""
          label="First Name"    
          variant="outlined"  
          onChange={(e) => this.setState({fname: e.target.value})}          
          value={this.state.fname}
          required
        />
        <br/><br/>
        
      {/* -------------------------------- Last Name -------------------------- */}

      <TextField fullWidth 
          error={false}
          // id=""
          id="outlined-basic"
          label="Last Name"
          onChange={(e) => this.setState({lname: e.target.value})}          
          value={this.state.lname}
          required
          variant="outlined"    
        /><br/><br/>
      
        {/* --------------------------- Email ------------------- */}
       
        <TextField fullWidth 
          error={false}
          id=""
          label="Email"
          variant="outlined" 
          onChange={(e) => this.setState({email: e.target.value})}          
          value={this.state.email}
          type="email"
          inputProps={{ pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"}}
          required
        />
        <br/><br/>                
       
         {/* ---------------- Phone # -----------------*/}

        <Phone Phone={this.state.phone} Onchange={ (num)=>this.setState({phone: num}) } />

        <br/>

           {/* -------------------------------- Place of Employment -------------------------- */}

      <TextField fullWidth 
          error={false}
          // id=""
          id="placeOfEmpl"
          label="Place of Employment"
          onChange={(e) => this.setState({place_of_empl: e.target.value})}          
          value={this.state.place_of_empl}
          required
          variant="outlined"    
        /><br/><br/>          

        {/* ----------------- Parish/Location ---------------------- */}
        <TextField
          // id="location"
          select
          label="Select Parish"
          value={this.state.parish}
          onChange={(e)=>this.setState({parish: e.target.value})}
          helperText="Please select your location/Parish"
          required
          variant="outlined"
          className={SelectWidth}
        >
          {Parishes.map((option) => (
          
            <MenuItem  key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField> <br/><br/>

        {/* ----------------- Employment Status ---------------------- */}
        <TextField
          // id="employment"
          select
          label="Employment Status"
          value={this.state.empl_status}
          onChange={(e)=>this.setState({empl_status: e.target.value})}
          helperText="Please Select your Employment Status"
          variant="outlined"
          required
          className={SelectWidth}
        >
          {Employment_Status.map((option) => (
          
            <MenuItem  key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField><br/><br/>

         {/* -------------------- Loan Amount being Barrowed ------------ */}
        
        <LoanAmount Loan={this.state.loan_amount} Onchange={(amt)=>this.setState({loan_amount:amt})}/>        
        

        {/* ----------------------------------------------- */}

        <br/><br/><br/>
     <div className="d-flex justify-content-center">
     <Button size="large" type="submit" className={"p-2 text-white "+btnColor}>Submit</Button> {/*onClick={this.postData} */}
     </div>
    </form>
    </Grid></Grid>

    <h1>{this.state.customer_name}</h1>
  
          </CardContent>
    </Card>
        </Grid>

      </Grid>

{this.state.snackbarShow}
          
        </div>}
       </>
      );
    }
  }  

  const Parishes = [
    {
      value: 'Kingston',
      label: 'Kingston',
    },
    {
      value: 'St. Andrew',
      label: 'St. Andrew',
    },
    {
      value: 'Portland',
      label: 'Portland',
    },
    {
      value: 'St. Thomas',
      label: 'St. Thomas',
    },
    {
      value: 'St. Catherine',
      label: 'St. Catherine',
    },
    {
      value: 'St. Mary',
      label: 'St. Mary',
    },
    {
      value: 'St. Ann',
      label: 'St. Ann',
    },
    {
      value: 'Manchester',
      label: 'Manchester',
    },
    {
      value: 'Clarendon',
      label: 'Clarendon',
    },
    {
      value: 'Hanover',
      label: 'Hanover',
    },
    {
      value: 'Westmoreland',
      label: 'Westmoreland',
    },
    {
      value: 'St. James',
      label: 'St. James',
    },
    {
      value: 'Trelawny',
      label: 'Trelawny',
    },
    {
      value: 'St. Elizabeth',
      label: 'St. Elizabeth',
    },
    
  ];
  const Employment_Status = [
    {
      value: 'Employed',
      label: 'Employed',
    },
    {
      value: 'Self-Employed',
      label: 'Self-Employed',
    },
    {
      value: 'Unemployed',
      label: 'Unemployed',
    },
   
  ];

 export default CallBackForm;
