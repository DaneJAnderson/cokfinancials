import Head from 'next/head'
import CallBackForm from '../components/form/call-back-form'

export default function MortgageRefinance() {
  return (
  
<div >
      <Head>
        <title>COK | Mortgage Refinance Loan</title>
        <meta name="COK Mortgage Refinance Loan" content="COK Mortgage Refinance Loan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="d-flex justify-content-center bg-light">
<img 
      srcSet="/images/Mortgage-Refinance-2021-Web-Banner.jpg"
      sizes=""
      src="/images/Mortgage-Refinance-2021-Web-Banner.jpg"
      width="100%" height="100%" 
      
      className="imgHeight shadow "
     
      alt="COK Mortgage Refinance Loan"/>
</div>


{/* ---------------------- Mortgage Refinance Loan Table ------------------- */}

<div className="container pt-5 pb-5">
<h2>Mortgage Refinance Loan</h2><hr />
<div className="tableScroll">
<table className="table table-striped">
<thead>
<tr>
<td width="141">Value of Property</td>
<td width="110">Equity Financed</td>
<td width="141">Loan Amount</td>
<td width="110">Duration</td>
<td width="117">Monthly Payment</td>
</tr>
</thead>
<tbody>
<tr>
<td width="141">$3,000,000.00</td>
<td width="110">90%</td>
<td width="141">$2,700,000.00</td>
<td width="110">480 months</td>
<td width="117">$15,711.26</td>
</tr>
<tr>
<td width="141">$5,000,000.00</td>
<td width="110">90%</td>
<td width="141">$4,500,000.00</td>
<td width="110">480 months</td>
<td width="117">$26,185.43</td>
</tr>
<tr>
<td width="141">$10,000,000.00</td>
<td width="110">90%</td>
<td width="141">$9,000,000.00</td>
<td width="110">480 months</td>
<td width="117">$52,370.86</td>
</tr>
<tr>
<td width="141">$15,000,000.00</td>
<td width="110">90%</td>
<td width="141">$13,500,000.00</td>
<td width="110">480 months</td>
<td width="117">$78,556.29</td>
</tr>
<tr>
<td width="141">$20,000,000.00</td>
<td width="110">90%</td>
<td width="141">$18,000,000.00</td>
<td width="110">480 months</td>
<td width="117">$104.741.72</td>
</tr>
</tbody>
</table>
</div>
</div>




{/* ---------------------------- Form Field ----------------------- */}

<CallBackForm promo_name="Mortgage Refinance" promo_id ="9" />

</div>
  )
}
