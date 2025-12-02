import { Link, useLocation } from 'react-router-dom'
import styles from './styles.module.scss'

import { ReactComponent as Logo } from '@assets/logo/augusto-portfolio-logo.svg'
import { ReactComponent as GithubIcon } from '@assets/icons/github-icon.svg'
import { ReactComponent as LinkedinIcon } from '@assets/icons/linkedin-icon.svg'
import { HEADER_DATA } from './constants'
import classnames from 'classnames'
import { HOVER_COLORS } from 'src/libs/utils/hoverColors'
import useWindowSize from '@hooks/use-window-size'
import { useMemo, useState } from 'react'
import Arise from '@components/animated/arise'
import AnimatedButton from '@components/animated/animated-button'

const Header = () => {
  const { pathname } = useLocation()
  const { width } = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = width && width < 704

  const mobileMenuStyle = useMemo(() => {
    if (isMobile) return isOpen ? [styles.openedMenu] : [styles.closedMenu]

    return undefined
  }, [isMobile, isOpen])

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  const onSelectALink = (onClick?: () => void) => {
    if (isMobile) toggleMenu()
    onClick && onClick()
  }

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
      {isMobile && (
        <button
          type="button"
          onClick={() => {
            setIsOpen(prev => !prev)
          }}
          className={classnames(styles.sandwichMenu, {
            [styles.openedMenuIcon]: isOpen,
            [styles.closedMenuIcon]: !isOpen,
          })}
        >
          <div className={classnames(styles.bar, styles.bar1)}></div>
          <div className={classnames(styles.bar, styles.bar2)}></div>
          <div className={classnames(styles.bar, styles.bar3)}></div>
        </button>
      )}
      {/* <nav> */}
      <ul className={classnames(styles.tabWrapper, mobileMenuStyle)}>
        {HEADER_DATA.map(({ label, href, onClick }, id) => (
          <Link to={href} key={href + id}>
            <li>
              <AnimatedButton
                label={label}
                styleTheme="dark"
                onClick={() => {
                  onSelectALink(onClick)
                }}
                isActive={href === pathname}
              />
            </li>
          </Link>
        ))}
      </ul>
      {/* </nav> */}

      <ul className={classnames(styles.socialWrapper, mobileMenuStyle)}>
        <Arise delay={0.2}>
          <li>
            <AnimatedButton
              hoverColor={HOVER_COLORS.ferir_nut}
              theme="icon"
              Icon={GithubIcon}
              onClick={() => {
                handleRedirect('github')
              }}
              styleTheme="light"
            />
          </li>
          <li>
            <AnimatedButton
              hoverColor={HOVER_COLORS.ferir_nut}
              theme="icon"
              Icon={LinkedinIcon}
              onClick={() => {
                handleRedirect('linkedin')
              }}
              styleTheme="light"
            />
          </li>
        </Arise>
      </ul>
    </header>
  )
}

export default Header
