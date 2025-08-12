import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats24 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats24-container1 thq-section-padding">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="stats24-image thq-img-ratio-1-1"
        />
        <div className="stats24-max-width thq-section-max-width">
          <h1 className="stats24-text1">
            {props.heading3 ?? (
              <Fragment>
                <span className="stats24-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XQAHjH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
          <span className="stats24-text2">
            {props.text4 ?? (
              <Fragment>
                <span className="stats24-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_bZJYl2'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <div className="stats24-container2"></div>
        </div>
      </div>
      <style jsx>
        {`
          .stats24-container1 {
            width: 2825px;
            height: 1243px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .stats24-image {
            width: 990px;
            height: 1012px;
          }
          .stats24-max-width {
            flex: 0 0 auto;
            width: 1636px;
            height: 1023px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .stats24-text1 {
            align-self: stretch;
          }
          .stats24-text2 {
            align-self: stretch;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
          }
          .stats24-container2 {
            width: 1408px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 362px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .stats24-text3 {
            display: inline-block;
            font-size: 24px;
          }
          .stats24-text4 {
            display: inline-block;
            font-size: 50px;
            font-weight: 800;
          }
          @media (max-width: 991px) {
            .stats24-max-width {
              align-items: flex-start;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .stats24-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats24.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxzdGF0aXN0aWNzfGVufDB8fHx8MTcxNjUzNjcxNXww&ixlib=rb-4.0.3&w=2000',
  image1Alt: 'Active Users Graph',
  text4: undefined,
  heading3: undefined,
}

Stats24.propTypes = {
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  text4: PropTypes.element,
  heading3: PropTypes.element,
}

export default Stats24
