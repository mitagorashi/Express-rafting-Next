import React, { Fragment } from 'react'

import { useTranslations } from 'next-intl'

import Stats254 from './stats254'

const Stats215 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats215-container thq-section-padding">
        <Stats254
          heading3={
            <Fragment>
              <span className="stats215-text1">
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
              <span className="stats215-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OhV-rA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Stats254>
      </div>
      <style jsx>
        {`
          .stats215-container {
            width: 1184px;
            height: 552px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .stats215-text1 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          .stats215-text2 {
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

export default Stats215
