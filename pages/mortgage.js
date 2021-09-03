import Head from 'next/head'
import CallBackForm from '../components/form/call-back-form'
// import Image from 'next/image'

export default function Mortgage() {
  return (

<div >
      <Head>
        <title>COK | Mortgage</title>
        <meta name="COK Home Mortgage" content="COK Home Mortgage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="d-flex justify-content-center bg-light imgHeight">
{/* <Image */}
<img 
      srcSet="/Promotions/images/Mortgage-16-99-Percent-2021-Web-Banner.jpg"
      // sizes=""
      src="/Promotions/images/Mortgage-16-99-Percent-2021-Web-Banner.jpg"

      // width="1600" height="1200" 
      width="100%" height="100%" 
      layout="intrinsic"      
  
      className="imgHeight shadow "
    
      alt="COK Home Mortgage"/>
</div>


{/* ---------------------- Home Mortgage Table ------------------- */}

<div className="container pt-5 pb-5">
<h2>Mortgage</h2><hr />
<div className="tableScroll">
<table className="table table-striped">
<thead>
<tr>
<th width="141">Value of Property</th>
<th width="110">Equity Financed</th>
<th width="141">Loan Amount</th>
<th width="110">Duration</th>
<th width="117">Monthly Payment</th>
</tr>
</thead>
<tbody>
<tr>
<td width="141">$3,000,000.00</td>
<td width="110">90%</td>
<td width="141">$2,700,000.00</td>
<td width="110">480 months</td>
<td width="117">$16,759.04</td>
</tr>
<tr>
<td width="141">$5,000,000.00</td>
<td width="110">90%</td>
<td width="141">$4,500,000.00</td>
<td width="110">480 months</td>
<td width="117">$27,931.73</td>
</tr>
<tr>
<td width="141">$10,000,000.00</td>
<td width="110">90%</td>
<td width="141">$9,000,000.00</td>
<td width="110">480 months</td>
<td width="117">$55,863.46</td>
</tr>
<tr>
<td width="141">$15,000,000.00</td>
<td width="110">90%</td>
<td width="141">$13,500,000.00</td>
<td width="110">480 months</td>
<td width="117">$83,795.18</td>
</tr>
<tr>
<td width="141">$20,000,000.00</td>
<td width="110">90%</td>
<td width="141">$18,000,000.00</td>
<td width="110">480 months</td>
<td width="117">$111,726.91</td>
</tr>
</tbody>
</table>
</div>
</div>



{/* ---------------------------- Form Field ----------------------- */}

<CallBackForm promo_name="Mortgage" promo_id ="8" />

</div>
  )
}
