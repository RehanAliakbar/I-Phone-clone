import { Timeline } from "gsap/gsap-core"


export const animateWithGsapTimeline =(tl , rotationRef , rotationState , firstTarget , secondTarget, animationProps)=>{
  tl.to(rotationRef.current.rotation,{
    y:rotationState,
    duration:1,
    ease:'Power2.out'
  })

  tl.to(
    firstTarget,
    {
    ...animationProps,
    ease: 'Power2.out'
    },
    '<'
  )
  tl.to(
    secondTarget,
    {
    ...animationProps,
    ease: 'Power2.out'
    },
    '<'
  )
}