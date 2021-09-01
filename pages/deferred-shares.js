import Head from 'next/head'
import CallBackForm from '../components/form/call-back-form'

export default function DeferredShares() {
  return (
  
<div >
      <Head>
        <title>COK | Deferred Shares</title>
        <meta name="COK Deferred Shares" content="COK Deferred Shares" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="d-flex justify-content-center bg-light">
<img 
      srcSet="/images/COK-Deferred-Share-Offer-resized.jpg"
      sizes=""
      src="/images/COK-Deferred-Share-Offer-resized.jpg"
      width="100%" height="100%" 
   
      className="imgHeight shadow"
        
      alt="COK Deferred Shares promotion"/>
</div>

{/* ---------------------------- Form Field ----------------------- */}

<CallBackForm promo_name="Deferred Shares" promo_id ="1" invest="Investment Amount"/>

</div>
  )
}
