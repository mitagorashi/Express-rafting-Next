import React from 'react'

import { useTranslations } from 'next-intl'

import Features4111 from './features4111'

const Features121 = (props) => {
  return (
    <>
      <div className="features121-layout251 thq-section-padding">
        <Features4111></Features4111>
      </div>
      <style jsx>
        {`
          .features121-layout251 {
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

export default Features121
