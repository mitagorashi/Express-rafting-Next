import React, { Fragment } from 'react'

import { useTranslations } from 'next-intl'

import Stats210 from './stats210'

const Features43 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features43-layout301 thq-section-padding">
        <Stats210
          heading3={
            <Fragment>
              <span className="features43-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wC1w2h'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading31={
            <Fragment>
              <span className="features43-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Yif5ed'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Stats210>
      </div>
      <style jsx>
        {`
          .features43-layout301 {
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
          .features43-text1 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          .features43-text2 {
            display: inline-block;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
          }
        `}
      </style>
    </>
  )
}

export default Features43
