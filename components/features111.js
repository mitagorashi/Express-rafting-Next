import React from 'react'

import { useTranslations } from 'next-intl'

import Features311 from './features311'

const Features111 = (props) => {
  return (
    <>
      <div className="features111-layout251 thq-section-padding">
        <Features311></Features311>
      </div>
      <style jsx>
        {`
          .features111-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Features111
