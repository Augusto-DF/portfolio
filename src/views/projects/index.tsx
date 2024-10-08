import ProjectCard from '@components/project-card'

import styles from './styles.module.scss'
import { PROJECT_CARD_LIST } from './constants'

const Projects = () => {
  return (
    <section className={styles.projectSection}>
      <div className={styles.projectWrpper}>
        <h1>Checkout my projects</h1>
        <div className={styles.projectsContainer}>
          {PROJECT_CARD_LIST.map((card, id) => {
            const { title } = card
            return <ProjectCard key={`${title}-project-card-${id}`} {...card} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
