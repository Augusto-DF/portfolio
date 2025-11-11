import AnimatedButton from '@components/animated/animated-button'
import { ReactComponent as Github } from '@assets/icons/github-icon.svg'

import * as motion from 'motion/react-client'
import { useAnimate, type AnimationSequence } from 'motion/react'
import TierTag from '@components/tier-tag'
import { useElementRect } from 'src/hooks/useElementSettings'
import { useEffect } from 'react'

type FallingTagType = {
  target: React.ReactNode
}

const fallingTagStyles = {
  display: 'flex',
}

const FallingTag = ({ target }: FallingTagType) => {
  const [ref, targetAttr] = useElementRect<HTMLDivElement>()
  const [animatedTagRef, animateTag] = useAnimate()

  useEffect(() => {
    if (!animatedTagRef.current) return

    const animatedTagSequence: AnimationSequence = [
      [animatedTagRef.current, { opacity: 1, y: -7 }, { duration: 0.4 }],
      [animatedTagRef.current, { rotate: 360 }, { duration: 0.5 }],
    ]

    animateTag(animatedTagSequence)
  }, [animateTag, targetAttr])

  //console.log('targetAttr', targetAttr?.width)
  return (
    <div style={{ ...fallingTagStyles, position: 'relative' }}>
      <div ref={ref}>{target}</div>
      {targetAttr?.offsetWidth && (
        <motion.div
          ref={animatedTagRef}
          style={{ position: 'absolute' }}
          //visible={!!targetAttr?.width}
          initial={{
            opacity: 0,
            y: -100,
            x: targetAttr?.offsetWidth - 5,
            transformOrigin: 'left center',
          }}
          animate={
            {
              /*   opacity: 1,
            rotate: 360,
            animationDuration: 0.5, */
              //y: -7,
              //x: targetAttr?.offsetWidth - 5,
            }
          }
        >
          <TierTag label="testtttttt" />
        </motion.div>
      )}
    </div>
  )
}

const TestArea = () => {
  return (
    <>
      <div style={style}>
        <FallingTag target={<h1 style={{ fontSize: 20, color: '#fff' }}>Target</h1>} />
      </div>
      {/* <div style={{ width: '100%', height: '100vh', backgroundColor: '#000' }}></div> */}
      <div style={style}>
        {/* <motion.div
          style={squireTarget()}
          animate={{
            scale: [null, 0.2, 4, 1],
            transition: {
              duration: 3,
              times: [0, 0.3, 0.4, 1],
              //repeat: Infinity,
              //repeatDelay: 1,
              ease: ['easeInOut', 'easeOut'],
            },
          }}
        /> */}

        <AnimatedButton styleTheme="dark" onClick={() => {}} label="Test" hoverColor="#5EC2EB" />
        <AnimatedButton
          onClick={() => {}}
          styleTheme="dark"
          theme="icon"
          Icon={Github}
          hoverColor="#F0A471"
        />

        <motion.button
          whileHover={{ boxShadow: '3px 3px 0px 0px #fff', borderColor: '#fff', x: -3, y: -3 }}
          transition={{ duration: 0.1 }}
          style={buttonStyle}
        >
          test
        </motion.button>

        <motion.div
          style={squireTarget('#6f85c1ff')}
          //initial={}
          animate={{
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'easeInOut',
              //times: [0.5, 0.5],
            },
          }}
        />
      </div>
    </>
  )
}

const squireTarget = (color = '#d089dcff') => ({
  width: '65px',
  height: '65px',
  backgroundColor: color,
  borderRadius: '8px',
})

// #d4476ff

const style = {
  width: '100vw',
  height: '80vh',
  backgroundColor: '#282930' /* '#e0e0e0', */,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
}

const buttonStyle = {
  padding: '0.6rem 1.8rem',
  fontFamily: 'Montserrat',
  fontSize: '1.4rem',
  cursor: 'pointer',
  fontWeight: 600,
  border: '0.1rem solid transparent',
  borderRadius: '0.8rem',
  color: '#fff',
  backgroundColor: '#282930',
}

export default TestArea
