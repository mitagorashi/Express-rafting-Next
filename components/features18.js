import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features18 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features18-layout349 thq-section-padding">
        <div className="features18-max-width thq-section-max-width">
          <div className="features18-content1">
            <div className="features18-section-title">
              <div className="features18-content2">
                <h2 className="thq-heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features18-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_QaXjuM'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="features18-text2 thq-body-large">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features18-text3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_NAi2Vg'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="features18-image-container">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features18-placeholder-image thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features18-layout349 {
            height: 1513px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .features18-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .features18-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features18-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features18-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 631px;
            height: 324px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features18-text2 {
            width: 832px;
            height: 994px;
            animation-name: slideInUp;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features18-image-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          .features18-placeholder-image {
            height: 417px;
          }
          .features18-text3 {
            display: inline-block;
            position: fixed;
            border-radius: var(--dl-layout-radius-radius4);
          }
          .features18-text4 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features18-max-width {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column-reverse;
            }
          }
        `}
      </style>
    </>
  )
}

Features18.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  feature1Description: undefined,
  feature1Title: undefined,
  feature1ImageAlt: 'Image depicting feature 1',
}

Features18.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
}

export default Features18
