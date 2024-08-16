import { FC } from 'react'
import styles from './styles.module.scss'
import classnames from 'classnames'

type CommonProps = {
  onClick: (value?: string | number) => void
  styleTheme?: 'light' | 'dark'
  className?: string
  type?: 'button' | 'submit'
  hoverColor?: string
}

type PrimaryButton = CommonProps & {
  theme?: 'primary'
  label: string
}

type IconButton = CommonProps & {
  theme: 'icon'
  label?: string
  Icon: FC
  iconPosition?: 'solo' | 'right' | 'left'
}

type ButtonType = PrimaryButton | IconButton

//if a property doens't exists on one of objects: use if ('prop' in unionObject )

const Button = ({
  onClick,
  styleTheme = 'light',
  hoverColor,
  className,
  type = 'button',
  ...props
}: ButtonType) => {
  const { theme = 'primary', label } = props
  const style = { '--hover-color': hoverColor } as React.CSSProperties

  const handleClick = () => {
    if (onClick) onClick()
  }

  if (theme === 'icon' && 'Icon' in props) {
    const { iconPosition = label ? 'left' : 'solo', Icon } = props

    return (
      <button
        onClick={handleClick}
        style={style}
        type={type}
        className={classnames(
          styles.iconButton,
          styles[iconPosition],
          styles.buttonWrapper,
          className,
          styles[styleTheme]
        )}
      >
        <Icon />
        {iconPosition !== 'solo' && label}
      </button>
    )
  } else {
    return (
      <button
        onClick={handleClick}
        style={style}
        type={type}
        className={classnames(styles.buttonWrapper, className, styles[styleTheme])}
      >
        {label}
      </button>
    )
  }
}

export default Button
