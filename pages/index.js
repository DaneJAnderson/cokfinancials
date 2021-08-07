
import AutoLoan from './auto-loan'
// import React, { useEffect } from "react";
// import  { useRouter } from 'next/router';

export default function Home() {

 /*  const router = useRouter()

  useEffect(() => {
    const {pathname} = router
    if(pathname == '/' ){
       
        router.replace('/auto-loan'); 
    }
  });  */ 
  
  return (
      <AutoLoan /> 
    
  )
}

