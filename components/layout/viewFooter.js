
import { useState,useEffect } from "react"

export default function useOnScreen(footerRef) {

    const [isIntersecting, setIntersecting] = useState(false)  

    useEffect(() => {

        const observer = new window.IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
          );

      observer.observe(footerRef.current)
      // Remove the observer as soon as the component is unmounted
      return () => { observer.disconnect() }
    }, [footerRef])
  
    return isIntersecting
  }