import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Stats26 from './stats26'

const Features3 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.features3Id}
        className="features3-layout253 thq-section-padding"
      >
        <Stats26
          heading3={
            <Fragment>
              <span className="features3-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0UJX9s'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading31={
            <Fragment>
              <span className="features3-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_p99kpZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Stats26>
      </div>
      <style jsx>
        {`
          .features3-layout253 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .features3-text1 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          .features3-text2 {
            display: inline-block;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
          }
          @media (max-width: 991px) {
            .features3-layout253 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Features3.defaultProps = {
  features3Id: '',
}

Features3.propTypes = {
  features3Id: PropTypes.string,
}

export default Features3
