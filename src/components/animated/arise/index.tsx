import React, { useId } from 'react'
import * as motion from 'motion/react-client'
import { ChildrenType } from '@components/utils'

type AriseType = {
  children: Array<ChildrenType> | ChildrenType
  delay?: number
  duration?: number
}

const Arise = ({ children, delay = 0.5, duration = 0.7 }: AriseType) => {
  const childrenList = Array.isArray(children) ? children : new Array(children)
  const rdmId = useId()

  const ariseChildren = () => {
    return childrenList.map((child, index) => {
      if (typeof child === 'number' || typeof child === 'string') return <></>

      return (
        <motion.div
          key={`arise-child-${rdmId}-${index}`}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: duration,
            scale: { type: 'spring', bounce: 0.5, delay: index * delay },
          }}
          // onAnimationStart={}
          // onAnimationComplete={}
        >
          {child}
        </motion.div>
      )
    })
  }

  return <>{ariseChildren()}</>
}

export default Arise
