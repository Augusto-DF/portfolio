import styles from './styles.module.scss'
import * as motion from 'motion/react-client'

const AnimatedSandwichMenuButton = () => {
  return (
    <div className={styles.menuContainer}>
      <svg
        width="30"
        height="26"
        viewBox="0 0 30 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="sandwich">
          <path
            d="M14.7159 0.00511845C17.9734 -0.0548471 21.3307 0.410023 24.0861 1.50862C26.8349 2.60462 29.1961 4.42913 29.9499 7.1667C30.1731 7.97763 29.6299 8.7997 28.737 9.00247C27.844 9.20522 26.9388 8.71195 26.7156 7.901C26.3025 6.40116 24.9554 5.16116 22.7463 4.28031C20.5434 3.40199 17.6926 2.97809 14.7836 3.03163C11.8756 3.08516 9.05287 3.61316 6.91402 4.52094C4.73559 5.44554 3.56749 6.62054 3.30084 7.83124C3.12016 8.65071 2.24238 9.1823 1.33995 9.01843C0.43738 8.85448 -0.147832 8.05673 0.0326958 7.23705C0.599429 4.66432 2.88962 2.88787 5.5026 1.77881C8.15525 0.652935 11.4575 0.0651102 14.7159 0.00511845Z"
            fill="black"
          />
          <path
            d="M28.3327 14.4968C29.2531 14.4968 29.9992 15.1745 29.9993 16.0103C29.9993 16.8463 29.2532 17.5239 28.3327 17.5239H1.66677C0.746317 17.5239 0.000144951 16.8463 0.000144951 16.0103C0.000276877 15.1745 0.746398 14.4968 1.66677 14.4968H28.3327Z"
            fill="black"
          />
          <path
            d="M28.3327 22.9729C29.2532 22.9729 29.9993 23.6505 29.9993 24.4864C29.9993 25.3224 29.2532 26 28.3327 26H1.66677C0.746317 26 0.000144951 25.3224 0.000144951 24.4864C0.000144951 23.6505 0.746317 22.9729 1.66677 22.9729H28.3327Z"
            fill="black"
          />
          <path d="M26.9591 16.9187L24.1069 22.4231L20.898 16.9187H26.9591Z" fill="black" />
        </g>
      </svg>

      {/*  <div className={classnames(styles.bar, styles.first)}></div>
      <div className={classnames(styles.bar, styles.second)}></div>
      <div className={classnames(styles.cheese)}></div>
      <div className={classnames(styles.bar, styles.third)}></div> */}
    </div>
  )
}

export default AnimatedSandwichMenuButton
