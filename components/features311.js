import React, { Fragment } from 'react'

import { useTranslations } from 'next-intl'

import Stats2311 from './stats2311'

const Features311 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features311-layout253 thq-section-padding">
        <Stats2311
          text4={
            <Fragment>
              <span className="features311-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-BiS5k'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="features311-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FUURBi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Stats2311>
      </div>
      <style jsx>
        {`
          .features311-layout253 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .features311-text1 {
            display: inline-block;
            font-size: 24px;
          }
          .features311-text2 {
            display: inline-block;
            font-size: 50px;
            font-weight: 800;
          }
          @media (max-width: 991px) {
            .features311-layout253 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Features311
