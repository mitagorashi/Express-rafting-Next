import React, { Fragment } from 'react'

import { useTranslations } from 'next-intl'

import Stats28 from './stats28'

const Features42 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features42-layout301 thq-section-padding">
        <Stats28
          heading3={
            <Fragment>
              <span className="features42-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IwiB5c'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading31={
            <Fragment>
              <span className="features42-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2BIucf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Stats28>
      </div>
      <style jsx>
        {`
          .features42-layout301 {
            gap: var(--dl-layout-space-fiveunits);
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
          .features42-text1 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          .features42-text2 {
            display: inline-block;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
          }
        `}
      </style>
    </>
  )
}

export default Features42
