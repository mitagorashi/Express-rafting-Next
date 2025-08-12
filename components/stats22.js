import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats22 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats22-container1 thq-section-padding">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="stats22-image thq-img-ratio-1-1"
        />
        <div className="stats22-max-width thq-section-max-width">
          <h1 className="stats22-text1">
            {props.heading3 ?? (
              <Fragment>
                <span className="stats22-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XQAHjH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
          <span className="stats22-text2">
            {props.text4 ?? (
              <Fragment>
                <span className="stats22-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_bZJYl2'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <div className="stats22-container2"></div>
        </div>
      </div>
      <style jsx>
        {`
          .stats22-container1 {
            width: 2825px;
            height: 1243px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .stats22-image {
            width: 990px;
            height: 1012px;
          }
          .stats22-max-width {
            flex: 0 0 auto;
            width: 1636px;
            height: 1023px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .stats22-text1 {
            align-self: stretch;
          }
          .stats22-text2 {
            align-self: stretch;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
          }
          .stats22-container2 {
            width: 1408px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 362px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .stats22-text3 {
            display: inline-block;
            font-size: 24px;
          }
          .stats22-text4 {
            display: inline-block;
            font-size: 50px;
            font-weight: 800;
          }
          @media (max-width: 991px) {
            .stats22-max-width {
              align-items: flex-start;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .stats22-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats22.defaultProps = {
  text4: undefined,
  image1Alt: 'Active Users Graph',
  image1Src:
    'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxzdGF0aXN0aWNzfGVufDB8fHx8MTcxNjUzNjcxNXww&ixlib=rb-4.0.3&w=2000',
  heading3: undefined,
}

Stats22.propTypes = {
  text4: PropTypes.element,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  heading3: PropTypes.element,
}

export default Stats22
