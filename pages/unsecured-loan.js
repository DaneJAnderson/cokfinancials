import Head from 'next/head'
import CallBackForm from '../components/form/call-back-form'

export default function UnsecuredLoan() {
  return (
 
<div >
      <Head>
        <title>COK | Unsecured Loan</title>
        <meta name="COK Unsecured Loan" content="COK Unsecured Loan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="d-flex justify-content-center bg-light">
<img 
      srcSet="/images/COK_Unsecure_Loan_Adv.png"
      sizes=""
      src="/images/COK_Unsecure_Loan_Adv.png"
      width="100%" height="100%" 
     
      className="imgHeight shadow "
      
      alt="COK Unsecured promotion"/>
</div>

{/* ------------- Borrow 1,000,000 --------- */}
<div className="d-flex justify-content-center pt-5 pb-5 text-uppercase">
    <div className="col-lg-7 d-flex justify-content-center container-fluid row gx-md-0">
<span className="col text-center text-md-end " style={{color: "red", fontWeight: "bold", fontSize: "20px", padding:'30px 10px 0px 0px'}}>Borrow up to</span>
<span className="col text-center" style={{color: "red", fontWeight: "bold", fontSize: "48px"}}>$1,000,000</span>
<span className="col text-center text-md-start" style={{color: "red", fontWeight: "bold", fontSize: "18px", padding:'30px 0px 0px 10px'}}>Unsecured</span>
    </div>
</div>

{/* ---------------------------- Form Field ----------------------- */}

<CallBackForm promo_name="Unsecured Loan" promo_id ="3" />

</div>
  )
}
