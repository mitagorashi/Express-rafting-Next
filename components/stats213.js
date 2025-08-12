import React, { Fragment } from 'react'

import { useTranslations } from 'next-intl'

import Stats252 from './stats252'

const Stats213 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats213-container thq-section-padding">
        <Stats252
          heading3={
            <Fragment>
              <span className="stats213-text1">
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
              <span className="stats213-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OhV-rA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Stats252>
      </div>
      <style jsx>
        {`
          .stats213-container {
            width: 1184px;
            height: 552px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .stats213-text1 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          .stats213-text2 {
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

export default Stats213
