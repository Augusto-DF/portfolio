import React, { useState } from 'react'
import * as motion from 'motion/react-client'

type ChildrenType =
  | string
  | number
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | React.ReactPortal

type AriseType = {
  children: Array<ChildrenType> | ChildrenType
}

const Arise = ({ children }: AriseType) => {
  const childrenList = Array.isArray(children) ? children : new Array(children)
  const ariseChildren = () => {
    return childrenList.map((child, index) => {
      if (typeof child === 'number' || typeof child === 'string') return <></>

      return (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            scale: { type: 'spring', bounce: 0.5, delay: index * 0.7 },
            delay: index * 0.7,
          }}
          /* onAnimationStart={}
          onAnimationComplete={} */
        >
          {child}
        </motion.div>
      )
    })
  }

  return <>{ariseChildren()}</>
}

export default Arise
