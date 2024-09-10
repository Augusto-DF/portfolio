import { Link, useLocation } from 'react-router-dom'
import styles from './styles.module.scss'

import Button from '@components/button'

import { ReactComponent as Logo } from '@assets/logo/augusto-portfolio-logo.svg'
import { ReactComponent as GithubIcon } from '@assets/icons/github-icon.svg'
import { ReactComponent as LinkedinIcon } from '@assets/icons/linkedin-icon.svg'
import { HEADER_DATA } from './constants'
import classnames from 'classnames'
import { HOVER_COLORS } from 'src/libs/utils/hoverColors'

const Header = () => {
  const { pathname } = useLocation()

  const handleRedirect = (target: string) => {
    switch (target) {
      case 'github':
        window.open('https://github.com/Augusto-DF', '_blank')
        break
      case 'linkedin':
        window.open('https://www.linkedin.com/in/augustocode/', '_blank')
        break
    }
  }

  return (
    <header className={styles.headerComponent}>
      <Link to="/">
        <Logo />
      </Link>
      <ul className={styles.tabWrapper}>
        {HEADER_DATA.map(({ label, href }, id) => (
          <Link to={href} key={href + id}>
            <li className={classnames({ [styles.active]: href === pathname })}>{label}</li>
          </Link>
        ))}
      </ul>

      <ul className={styles.socialWrapper}>
        <Link to="">
          <li>
            <Button
              hoverColor={HOVER_COLORS.ferir_nut}
              theme="icon"
              Icon={GithubIcon}
              onClick={() => {
                handleRedirect('github')
              }}
              styleTheme="light"
            />
          </li>
        </Link>
        <Link to="">
          <li>
            <Button
              hoverColor={HOVER_COLORS.ferir_nut}
              theme="icon"
              Icon={LinkedinIcon}
              onClick={() => {
                handleRedirect('linkedin')
              }}
              styleTheme="light"
            />
          </li>
        </Link>
      </ul>
    </header>
  )
}

export default Header
