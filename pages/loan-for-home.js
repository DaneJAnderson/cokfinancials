import Head from 'next/head'
import CallBackForm from '../components/form/call-back-form'

export default function LoanForHome() {
  return (

<div className="">
{/* <div className="transPage"> */}
      <Head>
        <title>COK | Loan for Home</title>
        <meta name="COK Loan for Home" content="COK Loan for Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="d-flex justify-content-center bg-light">
<img 
      srcSet="/images/Loan-For-Home--Promotion-2021-Web-Banner.jpg"
      sizes=""
      src="/images/Loan-For-Home--Promotion-2021-Web-Banner.jpg"
      width="100%" height="100%" 
      
      className="imgHeight shadow "
          
      alt="COK Loan for Home promotion"/>
</div>

{/* ---------------------------- Form Field ----------------------- */}

<CallBackForm promo_name="Loan for Home" promo_id ="4" />

</div>
  )
}
