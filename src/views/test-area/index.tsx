import AnimatedButton from '@components/animated/animated-button'
import { ReactComponent as Github } from '@assets/icons/github-icon.svg'

import * as motion from 'motion/react-client'
import FallingTag from '@components/animated/falling-tag'
import MoveIn from '@components/animated/move-in'

const TestArea = () => {
  return (
    <>
      <div style={{ ...style, flexWrap: 'wrap' }}>
        <MoveIn direction="up">
          <div style={{ width: 600, height: 380, backgroundColor: '#4a7ea9ff' }}></div>
          <div style={{ width: 600, height: 380, backgroundColor: '#4aa994ff' }}></div>
          <div style={{ width: 600, height: 380, backgroundColor: '#bbbf80ff' }}></div>
          <div style={{ width: 600, height: 380, backgroundColor: '#e1bdd1ff' }}></div>
        </MoveIn>
      </div>
      <div style={style}>
        <FallingTag
          tagProps={{ label: 'nina', tier: 'mythic' }}
          positionX={68}
          target={<h1 style={{ fontSize: 20, color: '#fff' }}>Fenrir</h1>}
        />
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
  width: '100%',
  minHeight: '80vh',
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
