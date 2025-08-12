import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats2111 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats2111-container thq-section-padding">
        <div className="stats2111-max-width thq-section-max-width">
          <h1 className="stats2111-text1">
            {props.heading3 ?? (
              <Fragment>
                <span className="stats2111-text3">
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
                <span className="stats2111-text4">
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
          className="stats2111-image thq-img-ratio-1-1"
        />
      </div>
      <style jsx>
        {`
          .stats2111-container {
            width: 2825px;
            height: 1243px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .stats2111-max-width {
            flex: 0 0 auto;
            width: 1636px;
            height: 1023px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .stats2111-text1 {
            width: 239px;
            height: 129px;
            align-self: flex-start;
            padding-bottom: 140px;
          }
          .stats2111-image {
            width: 990px;
            height: 1012px;
          }
          .stats2111-text3 {
            display: inline-block;
            font-size: 50px;
            font-weight: 800;
          }
          .stats2111-text4 {
            display: inline-block;
            font-size: 24px;
          }
          @media (max-width: 991px) {
            .stats2111-max-width {
              align-items: flex-start;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .stats2111-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats2111.defaultProps = {
  image1Alt: 'Active Users Graph',
  image1Src:
    'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxzdGF0aXN0aWNzfGVufDB8fHx8MTcxNjUzNjcxNXww&ixlib=rb-4.0.3&w=2000',
  heading3: undefined,
  text4: undefined,
}

Stats2111.propTypes = {
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  heading3: PropTypes.element,
  text4: PropTypes.element,
}

export default Stats2111
