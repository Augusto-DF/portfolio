import classnames from 'classnames'
import styles from './styles.module.scss'

export type TierTagProps = {
  label: string
  tier?: 'ultimate' | 'mythic' | 'legend' | 'rare'
  className?: string
}

const TierTag = ({ label, tier = 'rare', className }: TierTagProps) => {
  return (
    <div className={classnames(styles.tagContainer, styles[tier], className)}>
      <h3 className={classnames(styles.tag)}>{label}</h3>
    </div>
  )
}

export default TierTag
