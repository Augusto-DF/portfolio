import { ChildrenType } from '@components/utils'
import * as motion from 'motion/react-client'

type MoveInType = {
  children: Array<ChildrenType> | ChildrenType
  delay?: number
}

const MoveIn = ({ children, delay }: MoveInType) => {
  const childrenList = Array.isArray(children) ? children : new Array(children)
  return (
    <motion.div
      initial={{
        x: -80,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default MoveIn
