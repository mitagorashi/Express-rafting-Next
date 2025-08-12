import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats211 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats211-container thq-section-padding">
        <div className="stats211-max-width thq-section-max-width">
          <h1 className="stats211-text1">
            {props.heading3 ?? (
              <Fragment>
                <span className="stats211-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XQAHjH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
          <span>
            {props.text4 ?? (
              <Fragment>
                <span className="stats211-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_bZJYl2'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="stats211-image thq-img-ratio-1-1"
        />
      </div>
      <style jsx>
        {`
          .stats211-container {
            width: 2825px;
            height: 1243px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .stats211-max-width {
            flex: 0 0 auto;
            width: 1636px;
            height: 1023px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .stats211-text1 {
            width: 239px;
            height: 129px;
            align-self: flex-start;
            padding-bottom: 140px;
          }
          .stats211-image {
            width: 990px;
            height: 1012px;
          }
          .stats211-text3 {
            display: inline-block;
            font-size: 24px;
          }
          .stats211-text4 {
            display: inline-block;
            font-size: 50px;
            font-weight: 800;
          }
          @media (max-width: 991px) {
            .stats211-max-width {
              align-items: flex-start;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .stats211-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats211.defaultProps = {
  text4: undefined,
  heading3: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxzdGF0aXN0aWNzfGVufDB8fHx8MTcxNjUzNjcxNXww&ixlib=rb-4.0.3&w=2000',
  image1Alt: 'Active Users Graph',
}

Stats211.propTypes = {
  text4: PropTypes.element,
  heading3: PropTypes.element,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Stats211
