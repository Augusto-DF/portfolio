import styles from './styles.module.scss'
import { flagsKeys, flagTagsData } from './constants'

type FlagTagProps = {
  countryFlag: (typeof flagsKeys)[number]
}

const FlagTag = ({ countryFlag }: FlagTagProps) => {
  const { label, Icon } = flagTagsData[countryFlag]
  return (
    <div className={styles.flagTagContainer}>
      <Icon />
      <span>{label}</span>
    </div>
  )
}

export default FlagTag
