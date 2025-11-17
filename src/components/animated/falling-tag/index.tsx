// TODO: Add a way to get the target size to no need change de positionX every time it changes
import * as motion from 'motion/react-client'
import { useAnimate, useInView, type AnimationSequence } from 'motion/react'
import TierTag, { TierTagProps } from '@components/tier-tag'
import { useEffect } from 'react'

type FallingTagType = {
  target: React.ReactNode
  positionX?: number
  tagProps: TierTagProps
  //tagLabel: string
  //tier?: 'legend' | 'ultimate' | 'mythic' | 'rare' | undefined
}

const fallingTagStyles = {
  display: 'flex',
}

const FallingTag = ({ target, positionX = 50, tagProps }: FallingTagType) => {
  const [animatedTagRef, animateTag] = useAnimate()
  const isInView = useInView(animatedTagRef, { once: true })

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
      <div>{target}</div>

      <motion.div
        ref={animatedTagRef}
        style={{ position: 'absolute' }}
        viewport={{ once: true }}
        initial={{
          opacity: 0,
          y: -200,
          x: positionX,
          transformOrigin: 'left center',
          rotate: -10,
        }}
      >
        <TierTag {...tagProps} />
      </motion.div>
    </div>
  )
}

export default FallingTag
