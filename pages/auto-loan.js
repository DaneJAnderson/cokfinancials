import Head from 'next/head'
import Image from 'next/image'
import homecss from '../styles/Home.module.css'
import CallBackForm from '../components/form/call-back-form'

export default function AutoLoan() {
  return (
    // <div className={homecss.container}>
<div >
      <Head>
        <title>Auto Loan</title>
        <meta name="description" content="COK Auto Loan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="d-flex justify-content-center bg-light">
<img 
      srcSet="/images/Auto-Loan-Promotion-2021-Web-Banner.jpg"
      sizes=""
      src="/images/Auto-Loan-Promotion-2021-Web-Banner.jpg"
      width="100%" height="100%" 
      // style={{height:'90vh'}} 
      className="imgHeight shadow"
      //  srcSet={`${imageSmall} 320w, ${imageMedium} 680w, ${imageLarge}   960w, ${imageXLarge} 1980w`} 
      // sizes="(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"
      // sizes="(min-width: 36em) calc(.333 * (100vw - 12em)), 100vw"
      // layout="fill"      
      alt="COK Auto Loan promotion"/>
</div>

{/* ---------------------------- Form Field ----------------------- */}

<CallBackForm promo_name="auto-loan" />

</div>
  )
}
