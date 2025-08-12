import React, { Fragment } from 'react'

import { useTranslations } from 'next-intl'

import Stats27 from './stats27'

const Features11 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features11-layout251 thq-section-padding">
        <Stats27
          heading3={
            <Fragment>
              <span className="features11-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2fDIlo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading31={
            <Fragment>
              <span className="features11-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Umon-x'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Stats27>
      </div>
      <style jsx>
        {`
          .features11-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features11-text1 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          .features11-text2 {
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

export default Features11
