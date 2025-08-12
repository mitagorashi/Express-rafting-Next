import React, { Fragment } from 'react'

import { useTranslations } from 'next-intl'

import Stats29 from './stats29'

const Features1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features1-layout251 thq-section-padding">
        <Stats29
          heading3={
            <Fragment>
              <span className="features1-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hGX-ur'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading31={
            <Fragment>
              <span className="features1-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_v9v1_V'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Stats29>
      </div>
      <style jsx>
        {`
          .features1-layout251 {
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
          .features1-text1 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          .features1-text2 {
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

export default Features1
