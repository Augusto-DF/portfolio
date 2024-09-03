import Header from '@components/header'
import Button from '@components/button'

import HeroImgSrc from '@assets/images/temporary/hero-intro-image.png'

import styles from './styles.module.scss'

const Home = () => {
  return (
    <main>
      <Header />

      <section id="hero" className={styles.hero}>
        <div className={styles.presentationContainer}>
          <h1>Hi! I’m Augusto Oliveira,</h1>
          <h2>a React Front-end developer</h2>
          <h3>passionate about crafting high-quality, clean code software.</h3>

          <Button label="Projects" onClick={() => {}} styleTheme="light" />
        </div>

        <img src={HeroImgSrc} alt="Pixel character walking and an action options menu" />
      </section>
    </main>
  )
}

export default Home
