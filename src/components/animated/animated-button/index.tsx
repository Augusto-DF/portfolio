import { FC } from 'react'
import styles from './styles.module.scss'
import classnames from 'classnames'
import * as motion from 'motion/react-client'
import colors from '@styles/_colors.module.scss'

type CommonProps = {
  onClick: (value?: string | number) => void
  styleTheme?: 'light' | 'dark'
  className?: string
  type?: 'button' | 'submit'
  hoverColor?: string
}

export type PrimaryButton = CommonProps & {
  theme?: 'primary'
  label: string
}

export type IconButton = CommonProps & {
  theme: 'icon'
  label?: string
  Icon: FC
  iconPosition?: 'solo' | 'right' | 'left'
}

type ButtonType = PrimaryButton | IconButton

//if a property doens't exists on one of objects: use if ('prop' in unionObject )

const AnimatedButton = ({
  onClick,
  styleTheme = 'light',
  hoverColor,
  className,
  type = 'button',
  ...props
}: ButtonType) => {
  const { theme = 'primary', label } = props

  const shadowThickness = {
    right: 3,
    down: 3,
  }

  const hoverProps = {
    dark: {
      backgroundColor: hoverColor ?? colors.surfaceDark,
      borderColor: colors.white,
      boxShadow: `${shadowThickness.right}px ${shadowThickness.down}px 0px 0px ${colors.white}`,
    },
    light: {
      backgroundColor: hoverColor ?? colors.white,
      borderColor: colors.fenrirBrandDark,
      boxShadow: `${shadowThickness.right}px ${shadowThickness.down}px 0px 0px ${colors.white}`,
    },
  }

  const handleClick = () => {
    if (onClick) onClick()
  }

  if (theme === 'icon' && 'Icon' in props) {
    const { iconPosition = label ? 'left' : 'solo', Icon } = props

    return (
      <motion.button
        onClick={handleClick}
        type={type}
        transition={{ duration: 0.1 }}
        className={classnames(
          styles.iconButton,
          styles[iconPosition],
          styles.buttonWrapper,
          className,
          styles[styleTheme]
        )}
        whileHover={{
          x: shadowThickness.right * -1,
          y: shadowThickness.down * -1,
          ...hoverProps[styleTheme],
        }}
      >
        <Icon />
        {iconPosition !== 'solo' && label}
      </motion.button>
    )
  } else {
    return (
      <motion.button
        onClick={handleClick}
        type={type}
        whileHover={{
          x: shadowThickness.right * -1,
          y: shadowThickness.down * -1,
          ...hoverProps[styleTheme],
        }}
        transition={{ duration: 0.1 }}
        className={classnames(styles.buttonWrapper, className, styles[styleTheme])}
      >
        {label}
      </motion.button>
    )
  }
}

export default AnimatedButton
