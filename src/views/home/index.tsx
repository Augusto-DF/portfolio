import Button from '@components/button'

import HeroImgSrc from '@assets/images/temporary/hero-intro-image.png'
import { ReactComponent as TurtleImage } from '@assets/images/turtle-image.svg'

import { HOME_WORKS_CARD_LIST } from './constants'
import styles from './styles.module.scss'
import WorkCard from '@components/work-card'

const Home = () => {
  return (
    <main>
      <section id="hero" className={styles.hero}>
        <div className={styles.presentationContainer}>
          <h1>Hi! I’m Augusto Oliveira,</h1>
          <h2>a React Front-end developer</h2>
          <h3>passionate about crafting high-quality, clean code software.</h3>

          {/* TODO: Create and add onClick action */}
          <Button label="Projects" onClick={() => {}} styleTheme="light" />
        </div>

        <img src={HeroImgSrc} alt="Pixel character walking and an action options menu" />
      </section>

      <section id="works" className={styles.works}>
        <h2 className={styles.sectionTitle}>Work</h2>
        <div className={styles.worksContainer}>
          {HOME_WORKS_CARD_LIST.map((card, index) => {
            const { title } = card
            const keyStr = title + index
            return <WorkCard key={keyStr} {...card} />
          })}
        </div>
        <TurtleImage />
      </section>
    </main>
  )
}

export default Home
