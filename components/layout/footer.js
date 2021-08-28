// import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from 'next/Link';

const Footer = () => {

    return (
<>
<footer>

<Grid container justifyContent="flex-end" item xs={11} >
<Grid container justifyContent="flex-end" item xs={12} className="p-5 " spacing={10}>

        <Grid item xs={12} md={4} container>
          <div className="pr-5">
              <h4 className="pb-3">Address</h4>
              <h6>Address : 66 Slipe Road, Kingston 5, Jamaica</h6>
              <h6>Phone : +1 876-960-4226</h6>
              <h6>Email :<a href="mailto:contact@cokcu.com"> contactus@cokcu.com</a></h6>
              <h6>Fax : +1 876- 926-0222</h6>
          </div>
        </Grid>
        <Grid item xs={12} md={4} container justifyContent="flex-end">
          <div className="pl-5 pr-5">
              <h4 className="pb-3">Promotions</h4>
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
        <Grid item xs={12} md={4} container justifyContent="flex-end">
          <div className="pl-5 ">
          <h4 className="pb-3">Newsletter</h4>
          <h6>Be the first to get updates on other COK Sodality promotions and products.</h6>
          <h6></h6>
          <h6></h6>
          <h6></h6>
              </div>
        </Grid>
</Grid>    
</Grid>    

</footer>
</>
    );
}

export default Footer;