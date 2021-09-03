import Head from 'next/head'
// import Image from 'next/image'
import CallBackForm from '../components/form/call-back-form'

export default function AutoLoan() {
  return (
    
<div className="">
{/* <div className="transPage"> */}
      <Head>
        <title>COK | Auto Loan</title>
        <meta name="COK Auto Loan" content="COK Auto Loan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<div className="d-flex justify-content-center bg-light imgHeight">

  {/* <Image */}
<img 

      srcSet="/Promotions/images/Auto-Loan-Promotion-2021-Web-Banner.jpg"
      // sizes=""
      src="/Promotions/images/Auto-Loan-Promotion-2021-Web-Banner.jpg"
      
      // width="1600" height="1200" 
      width="100%" height="100%" 
      layout="intrinsic"      
      // layout="responsive"      
      className="imgHeight shadow"
     
      alt="COK Auto Loan promotion"/>
</div>

{/* ---------------------------- Form Field ----------------------- */}

<CallBackForm promo_name="Auto Loan" promo_id ="2" />

</div>
  )
}
