import Head from 'next/head'
import CallBackForm from '../components/form/call-back-form'
// import Image from 'next/image'

export default function homeEquityLoan() {
  return (
  
<div >
      <Head>
        <title>COK | Home Equity Loan</title>
        <meta name="COK Home Equity Loan" content="COK Home Equity Loan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="d-flex justify-content-center bg-light imgHeight">
{/* <Image */}
<img 
      srcSet="/Promotions/images/Home-Equity-Loan-2021-Web-Banner.jpg"
      // sizes=""
      src="/Promotions/images/Home-Equity-Loan-2021-Web-Banner.jpg"      

      className="imgHeight shadow "
            
      // width="1600" height="1200" 
      width="100%" height="100%" 
      layout="intrinsic"      
       
      alt="COK Home Equity Loan"/>
</div>


{/* ---------------------- Home Equity Loan Table ------------------- */}

<div className="container pt-5 pb-5">
<h2>Home Equity Loan</h2><hr />
<div className="tableScroll">
<table className="table table-striped">
<thead>
<tr>
<th>Value of Property</th>
<th>Equity Financed</th>
<th>Loan Amount</th>
<th>Duration</th>
<th>Monthly Payment</th>
</tr>
</thead>
<tbody>
<tr>
<td>$3,000,000.00</td>
<td>80%</td>
<td>$2,400,000.00</td>
<td>120 months</td>
<td>$28,425.83</td>
</tr>
<tr>
<td>$5,000,000.00</td>
<td>80%</td>
<td>$4,000,000.00</td>
<td>120 months</td>
<td>$47,376.39</td>
</tr>
<tr>
<td>$10,000,000.00</td>
<td>80%</td>
<td>$8,000,000.00</td>
<td>120 months</td>
<td>$94,752.78</td>
</tr>
<tr>
<td>$15,000,000.00</td>
<td>80%</td>
<td>$12,000,000.00</td>
<td>120 months</td>
<td>$142,129.17</td>
</tr>
<tr>
<td>$20,000,000.00</td>
<td>80%</td>
<td>$16,000,000.00</td>
<td>120 months</td>
<td>$189,505.55</td>
</tr>
</tbody>
</table>
</div>
</div>


<div className="container">
<p className="text-uppercase fw-bold">Use the Equity in your home to:</p>
<ul>
<li>Cover medical emergencies</li>
<li>Cover educational expenses</li>
<li>Debt Consolidation</li>
<li>Spruce up or repair your home</li>
<li>Take care of other unexpected expenses</li>
</ul>
</div>

{/* ---------------------------- Form Field ----------------------- */}

<CallBackForm promo_name="Home Equity Loan" promo_id ="7" />

</div>
  )
}
