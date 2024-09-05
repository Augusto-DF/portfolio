import Button, { IconButton } from '@components/button'

import { FOOTER_BUTTON_LIST } from './constants'
import styles from './styles.module.scss'

const Footer = () => {
  const handleClick = (name: string) => {
    switch (name) {
      case 'github':
        window.open('https://github.com/Augusto-DF', '_blank')
        break
      case 'linkedin':
        window.open('https://www.linkedin.com/in/augustocode/', '_blank')
        break
      case 'download':
        // TODO: Trigger CV download.
        break
    }
  }

  return (
    <footer>
      <div className={styles.footerContainer}>
        <h2>Let’s build together</h2>
        <div>
          <span>Email:</span>
          <h3>neoaugustocode@gmail.com</h3>
        </div>
        <div className={styles.buttonContainer}>
          {FOOTER_BUTTON_LIST.map((buttonData, id) => {
            const { value, theme, Icon, iconPosition, label, hoverColor } = buttonData
            const button = { theme, Icon, iconPosition, label, hoverColor } as IconButton

            return (
              <Button
                key={`footer-${value}-${id}`}
                {...button}
                onClick={() => {
                  handleClick(value)
                }}
              />
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
