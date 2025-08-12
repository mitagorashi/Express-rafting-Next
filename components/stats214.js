import React, { Fragment } from 'react'

import { useTranslations } from 'next-intl'

import Stats253 from './stats253'

const Stats214 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats214-container thq-section-padding">
        <Stats253
          heading3={
            <Fragment>
              <span className="stats214-text1">
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
              <span className="stats214-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OhV-rA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Stats253>
      </div>
      <style jsx>
        {`
          .stats214-container {
            width: 1184px;
            height: 552px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .stats214-text1 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          .stats214-text2 {
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

export default Stats214
