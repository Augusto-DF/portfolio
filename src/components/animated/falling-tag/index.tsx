// TODO: Add a way to get the target size to no need change de positionX every time it changes
import * as motion from 'motion/react-client'
import { useAnimate, useInView, type AnimationSequence } from 'motion/react'
import TierTag, { TierTagProps } from '@components/tier-tag'
import { useEffect, useRef } from 'react'

type FallingTagType = {
  target: React.ReactNode
  positionX?: number
  heightDrop?: number
  positionHeight?: number
  tagProps: TierTagProps
}

const fallingTagStyles = {
  display: 'flex',
}

const FallingTag = ({
  target,
  heightDrop = -300,
  positionX = 50,
  positionHeight = 8,
  tagProps,
}: FallingTagType) => {
  const [animatedTagRef, animateTag] = useAnimate()
  const targetRef = useRef(null)
  const isInView = useInView(targetRef, { once: true, amount: 1, margin: '-200px' })

  useEffect(() => {
    if (!animatedTagRef.current) return
    if (!isInView) return

    const animatedTagSequence: AnimationSequence = [
      [animatedTagRef.current, { opacity: 1, y: -5, rotate: -10 }, { duration: 0.2 }],
      [
        animatedTagRef.current,
        { rotate: [0, 22, -27, 3, -12, -1, -7, -5] },
        { duration: 1.2, ease: 'easeInOut', bounce: 0.8 },
      ],
    ]

    animateTag(animatedTagSequence)
  }, [isInView, animatedTagRef, animateTag])

  return (
    <div style={{ ...fallingTagStyles, position: 'relative' }}>
      <div style={{ position: 'relative', zIndex: 2 }} ref={targetRef}>
        {target}
      </div>

      <motion.div
        ref={animatedTagRef}
        style={{ position: 'absolute', zIndex: 1 }}
        viewport={{ once: true }}
        initial={{
          opacity: 0,
          y: heightDrop,
          x: positionX,
          transformOrigin: 'left center',
          marginTop: positionHeight,
          rotate: -10,
        }}
      >
        <TierTag {...tagProps} />
      </motion.div>
    </div>
  )
}

export default FallingTag
