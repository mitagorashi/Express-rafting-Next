import React, { Fragment } from 'react'

import { useTranslations } from 'next-intl'

import Stats21111 from './stats21111'

const Features4111 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features4111-layout301 thq-section-padding">
        <Stats21111
          text4={
            <Fragment>
              <span className="features4111-text1">
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
              <span className="features4111-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GWb5cW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Stats21111>
      </div>
      <style jsx>
        {`
          .features4111-layout301 {
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
          .features4111-text1 {
            display: inline-block;
            font-size: 24px;
          }
          .features4111-text2 {
            display: inline-block;
            font-size: 50px;
            font-weight: 800;
          }
        `}
      </style>
    </>
  )
}

export default Features4111
