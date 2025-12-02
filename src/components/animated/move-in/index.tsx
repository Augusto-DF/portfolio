import { ChildrenType } from '@components/utils'
import * as motion from 'motion/react-client'
import { useId } from 'react'

type DirectionType = 'right' | 'left' | 'up' | 'down'

type MoveInType<T extends readonly ChildrenType[] = readonly ChildrenType[]> = {
  children: T | ChildrenType
  direction?: DirectionType | { [K in keyof T]: DirectionType }
  className?: string
}

const MoveIn = ({ children, direction = 'left', className }: MoveInType) => {
  const id = useId()
  const childrenList = Array.isArray(children) ? children : new Array(children)

  const renderChildren = () => {
    const getOffset = (dir: DirectionType | readonly DirectionType[]) => {
      switch (dir) {
        case 'left':
          return { x: -80, y: 0 }
        case 'right':
          return { x: 80, y: 0 }
        case 'up':
          return { x: 0, y: 80 }
        case 'down':
          return { x: 0, y: -80 }
        default:
          return { x: 0, y: 0 }
      }
    }

    return childrenList.map((child, index) => {
      const dir = Array.isArray(direction) ? direction[index] : direction
      const offset = getOffset(dir)
      return (
        <motion.div
          className={className}
          key={`moveIn-${id}-${index}`}
          initial={{
            ...offset,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.7,
            },
          }}
          viewport={{ margin: '-300px', once: true }}
        >
          {child}
        </motion.div>
      )
    })
  }

  return <>{renderChildren()}</>
}

export default MoveIn
