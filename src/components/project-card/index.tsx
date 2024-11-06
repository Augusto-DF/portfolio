import { flagsKeys } from '@components/flag-tag/constants'
import TierTag, { TierTagProps } from '@components/tier-tag'

import styles from './styles.module.scss'
import FlagTag from '@components/flag-tag'
import { Link } from 'react-router-dom'
import useWindowSize from '@hooks/use-window-size'

export type ProjectCardProps = {
  title: string
  country: (typeof flagsKeys)[number]
  tags: Array<TierTagProps>
  href: string
  thumbSrc?: {
    desktop: string
    mobile: string
  }
  thumbAlt?: string
}

const ProjectCard = ({ title, country, tags, href, thumbSrc, thumbAlt }: ProjectCardProps) => {
  const { width } = useWindowSize()
  const isMobile = width && width < 704

  return (
    <Link to={href}>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          {thumbSrc && <img src={isMobile ? thumbSrc.mobile : thumbSrc.desktop} alt={thumbAlt} />}
        </div>
        <h2>{title}</h2>
        <FlagTag countryFlag={country} />
        <div className={styles.tagsContainer}>
          {tags.map((tag, id) => {
            const { label } = tag
            return id < 5 && <TierTag key={`${label}-project-tag-${id}`} {...tag} />
          })}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
