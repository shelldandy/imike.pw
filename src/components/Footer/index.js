import React from 'react'

import styles from './index.css'

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      <a
        href={process.env.PHENOMIC_HOMEPAGE}
        className={styles.phenomicReference}
      >
        { 'Website generated with ' }
        <span className={styles.phenomicReferenceName}>
          { `<${process.env.PHENOMIC_NAME} />` }
        </span>
      </a>
    </p>
  </footer>
)

export default Footer
