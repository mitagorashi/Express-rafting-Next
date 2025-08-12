import React, { Fragment } from 'react'

import { useTranslations } from 'next-intl'

import Stats251 from './stats251'

const Stats212 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats212-container thq-section-padding">
        <Stats251
          heading3={
            <Fragment>
              <span className="stats212-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-zyFhg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading31={
            <Fragment>
              <span className="stats212-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OhV-rA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Stats251>
      </div>
      <style jsx>
        {`
          .stats212-container {
            width: 1184px;
            height: 552px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .stats212-text1 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          .stats212-text2 {
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

export default Stats212
