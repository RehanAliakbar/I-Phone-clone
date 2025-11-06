import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo , smallHeroVideo } from '../utils'
import { useEffect, useState } from 'react'

const Hero = () => {

  const [videoSrc ,setVideoSrc] = useState(window.innerWidth <= 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(()=>{
     window.addEventListener('resize', handleVideoSrcSet);
     return ()=>{
      window.removeEventListener('resize', handleVideoSrcSet)
     }
  },[])

  useGSAP(() => {
    gsap.to('.hero-title', { opacity: 1, y: -50, duration: 2, ease: 'power3.out', delay: 0.5 })

    gsap.to('#cta', { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 2 })
  },[])
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col ">
      <p className="hero-title">iphone 15 pro</p>
      <div className='md:w-10/12 w-9/12 '>
      <video key={videoSrc} autoPlay muted playsInline>
        <source src={videoSrc} type='video/mp4'/>
      </video>
      </div>
      </div>

      <div id="cta" className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href="#highlights" className='btn'>buy </a>
        <p className='font-normal text-xl '>from $199 /month or $999</p>
      </div>
    </section >
  )
}
export default Hero