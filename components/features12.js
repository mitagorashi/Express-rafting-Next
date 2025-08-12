import React from 'react'

import { useTranslations } from 'next-intl'

import Stats213 from './stats213'

const Features12 = (props) => {
  return (
    <>
      <div className="features12-layout251 thq-section-padding">
        <Stats213></Stats213>
      </div>
      <style jsx>
        {`
          .features12-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Features12
