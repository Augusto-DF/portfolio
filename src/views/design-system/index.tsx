import FlagTag from '@components/flag-tag'
import React from 'react'

const DesignSystem = () => {
  const styles = {
    width: '100%',
    padding: '48px 74px',
    display: 'flex',
    gap: '12px',
    alignItens: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#eaeaea',
  } as React.CSSProperties
  const title = {
    backgroundColor: '#eaeaea',
    fontSize: '20px',
    padding: '50px',
  }
  return (
    <div>
      <h1 style={title}>Flag tags:</h1>
      <div style={styles}>
        <FlagTag countryFlag="brazil" />
        <FlagTag countryFlag="usa" />
      </div>
    </div>
  )
}

export default DesignSystem
