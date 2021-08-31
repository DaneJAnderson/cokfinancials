// import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from 'next/Link';
import { useState, useEffect, useRef } from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Fab } from '@material-ui/core';
import useOnScreen from './viewFooter';


const Footer = () => {

  const [screen, setWidth]   = useState(); 
  const footerRef = useRef()
  const isVisible = useOnScreen(footerRef) 

  useEffect(()=>{

  // setWidth(window.screen.width); 
  setWidth(window.innerWidth); 

  },[])


    return (
<>
<div >{isVisible && `Yep, I'm on screen`}</div>
<footer className="bg-dark text-white" style={{marginBottom: '-50px !important' }}>

<Grid container justifyContent="center" item xs={12} >
<Grid container justifyContent="flex-end" item xs={12} className="p-5 " spacing={10}>

<div ref={footerRef}></div>{/*------- Observed Intersection ------------  */}

        <Grid item xs={12} md={4} sm={6} container  justifyContent="center">
          <div className="">
              <h4 className="pb-3 fw-bold">Address</h4>
              <h6>Address : 66 Slipe Road, Kingston 5, Jamaica</h6>
              <h6>Phone : +1 876-960-4226</h6>
              <h6>Email :<a href="mailto:contact@cokcu.com"> contactus@cokcu.com</a></h6>
              <h6>Fax : +1 876- 926-0222</h6>
          </div>
        </Grid>
        <Grid item xs={12} md={4} sm={6} container justifyContent={screen<=640?"flex-start":"center"}>
          <div className="">
              <h4 className="pb-3 fw-bold">Promotions </h4>
              <h6><Link href={"/auto-loan"}><a>Auto Loan</a></Link></h6>
              <h6><Link href="/loan-for-home"><a>Loan for Home</a></Link></h6>
              <h6><Link href="/home-equity-loan"><a>Home Equity Loan</a></Link></h6>
              <h6><Link href="/mortgage"><a>Mortgage</a></Link></h6>
              <h6><Link href="/mortgage-refinance"><a>Mortgage Refinance</a></Link></h6>
              <h6><Link href="/unsecure-loan"><a>Unsecured Loan</a></Link></h6>
              <h6><Link href="/deferred-shares"><a>Deferred Shares</a></Link></h6>
              {/* <h6><Link></Link></h6> */}
              {/* <h6><Link></Link></h6> */}
              </div>
        </Grid>
        <Grid item xs={12} md={4} sm={12} container justifyContent="center">
          <div className="">
          <h4 className="pb-3 fw-bold">Newsletter</h4>
          <h6>Be the first to get updates on other COK Sodality promotions and products.</h6>
          <h6 className="pt-3 pb-3">Get live feeds and updates on the go by following us on our social network pages</h6>
          <h6>
         
          {/*--------------------------- FaceBook Link ------------------------------*/}

              <a style={{marginRight:'20px !important'}} href="https://www.facebook.com/coksodality/" target="_blank">
                <Fab style={{background:"#f1f9ff"}}  size="small"><FacebookIcon fontSize="large" style={{color: '#3030ff'}}/></Fab></a>
     
          {/* ------------------------- Twitter Link ------------------------------ */}
              <a style={{marginRight:'20px !important'}} href="https://twitter.com/cok_sodality" target="_blank">
                <Fab style={{background:"#4184ff"}}  size="small"><TwitterIcon style={{color: 'white'}} fontSize="large"/></Fab></a>

          {/* ------------------------- Instagram Link ---------------------------- */}

              <a  href="https://www.instagram.com/cok_sodality/" target="_blank">
                <Fab  style={{background: '#dc3545'}}  size="small"><InstagramIcon style={{color: 'white'}} fontSize="large"/></Fab></a>
              </h6>
          <h6></h6>
              </div>
        </Grid>

        {/* ------------------------------------------------------------------- */}


</Grid>    
</Grid>    

 <h1 ><a className="text-center nav-link text-white " href="http://cokcu.com" >COK Sodality</a> </h1>

<hr className="" />
 <div className="cpy-right text-center ">
<p className="p-5 pt-2 pb-3">COK Sodality Credit Union © 1967, All rights reserved | Designed & Developed by
<a style={{textDecoration:'none'}} href="mailto:contact@danejanderson.com"> Dane J. Anderson ®</a>
</p>
</div>

</footer>

</>
    );
}

export default Footer;