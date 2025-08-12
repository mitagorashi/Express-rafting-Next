import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Stats21000 from './stats21000'

const Features41 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.features41Id}
        className="features41-layout301 thq-section-padding"
      >
        <Stats21000
          heading3={
            <Fragment>
              <span className="features41-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CatTPd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading31={
            <Fragment>
              <span className="features41-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_r4RP3C'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Stats21000>
      </div>
      <style jsx>
        {`
          .features41-layout301 {
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
          .features41-text1 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          .features41-text2 {
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

Features41.defaultProps = {
  features41Id: '',
}

Features41.propTypes = {
  features41Id: PropTypes.string,
}

export default Features41
