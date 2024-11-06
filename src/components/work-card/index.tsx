import { Link } from 'react-router-dom'

import FlagTag from '@components/flag-tag'
import { flagsKeys } from '@components/flag-tag/constants'
import TierTag, { TierTagProps } from '@components/tier-tag'

import styles from './styles.module.scss'
import classnames from 'classnames'

export type WorkCardProps = {
  country: (typeof flagsKeys)[number]
  company?: string
  duration: Array<string>
  title: string
  description: string
  tags: Array<TierTagProps>
  inverse?: boolean
  href: string
  imgSrc?: string
  imgAlt?: string
}

const WorkCard = ({
  country,
  company,
  duration,
  title,
  description,
  tags,
  inverse = false,
  href,
  imgSrc,
  imgAlt,
}: WorkCardProps) => {
  const durationStr = duration.join(' - ')

  return (
    <Link to={href}>
      <div className={classnames(styles.card, { [styles.inverse]: inverse })}>
        <div className={styles.imageWrapper}>{imgSrc && <img src={imgSrc} alt={imgAlt} />}</div>
        <div className={styles.contentWrapper}>
          <div className={styles.flagWrapper}>
            <FlagTag countryFlag={country} />
            <h3>{`${company} • ${durationStr}`}</h3>
          </div>
          <div className={styles.workWrapper}>
            <h2>{title}</h2>
            <h3>{description}</h3>
          </div>
          <div className={styles.tagsWrapper}>
            {tags.map((tag, id) => {
              const { tier, label } = tag

              return <TierTag key={`tiertag-${label}-${id}`} tier={tier} label={label} />
            })}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default WorkCard
