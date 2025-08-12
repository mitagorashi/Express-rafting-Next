import React from 'react'

import { useTranslations } from 'next-intl'

import Stats214 from './stats214'

const Features6 = (props) => {
  return (
    <>
      <div className="features6-layout216 thq-section-padding">
        <Stats214></Stats214>
      </div>
      <style jsx>
        {`
          .features6-layout216 {
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
          @media (max-width: 991px) {
            .features6-layout216 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Features6
