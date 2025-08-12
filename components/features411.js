import React, { Fragment } from 'react'

import { useTranslations } from 'next-intl'

import Stats2111 from './stats2111'

const Features411 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features411-layout301 thq-section-padding">
        <Stats2111
          text4={
            <Fragment>
              <span className="features411-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cVipP1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="features411-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GWb5cW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Stats2111>
      </div>
      <style jsx>
        {`
          .features411-layout301 {
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
          .features411-text1 {
            display: inline-block;
            font-size: 24px;
          }
          .features411-text2 {
            display: inline-block;
            font-size: 50px;
            font-weight: 800;
          }
        `}
      </style>
    </>
  )
}

export default Features411
