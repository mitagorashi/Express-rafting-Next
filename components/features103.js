import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features103 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.features103Id}
        className={`features103-layout300 thq-section-padding ${props.rootClassName} `}
      >
        <div className="features103-max-width thq-flex-column thq-section-max-width">
          <div className="features103-section-title thq-flex-column">
            <h2 className="thq-heading-2 features103-text1">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features103-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_h6M7Cc'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="features103-text2 thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features103-text4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_3i-Ha4'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features103-content thq-grid-auto-300">
            <div className="features103-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features103-feature1-image thq-img-ratio-4-3"
              />
            </div>
            <div className="features103-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="features103-feature2-image thq-img-ratio-4-3"
              />
            </div>
            <div className="features103-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features103-feature3-image thq-img-ratio-4-3"
              />
            </div>
          </div>
          <div className="features103-actions thq-flex-row">
            <a
              href="http://wa.me/+905530741350"
              target="_blank"
              rel="noreferrer noopener"
              className="features103-button1 thq-button-filled"
            >
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features103-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_VFbVDe'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
            <button className="features103-button2 thq-button-outline">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features103-text5">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_HPpiAk'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features103-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features103-max-width {
            gap: var(--dl-layout-space-threeunits);
            align-items: center;
          }
          .features103-section-title {
            align-items: center;
          }
          .features103-text2 {
            text-align: center;
          }
          .features103-content {
            align-self: stretch;
            align-items: center;
          }
          .features103-feature1 {
            align-items: flex-start;
          }
          .features103-feature1-image {
            width: 100%;
            height: auto;
          }
          .features103-feature2 {
            align-items: flex-start;
          }
          .features103-feature2-image {
            width: 100%;
            height: auto;
          }
          .features103-feature3 {
            align-items: flex-start;
          }
          .features103-feature3-image {
            width: 100%;
            height: auto;
          }
          .features103-actions {
            align-items: flex-start;
          }
          .features103-button1 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .features103-button2 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features103-text3 {
            display: inline-block;
          }
          .features103-text4 {
            display: inline-block;
          }
          .features103-text5 {
            display: inline-block;
          }
          .features103-text6 {
            display: inline-block;
          }
          .features103root-class-name {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          @media (max-width: 991px) {
            .features103-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features103-section-title {
              width: auto;
            }
            .features103-text1 {
              text-align: center;
            }
            .features103-feature2 {
              width: auto;
            }
            .features103-feature3 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .features103-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features103-actions {
              width: 100%;
              flex-direction: column;
            }
            .features103-button1 {
              width: 100%;
            }
            .features103-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features103.defaultProps = {
  mainAction: undefined,
  sectionDescription: undefined,
  secondaryAction: undefined,
  features103Id: '',
  feature1ImageAlt: 'User-Friendly Interface Image',
  rootClassName: '',
  feature2ImageAlt: 'Advanced Analytics Image',
  feature3ImageSrc: '/12-200h.jpg',
  sectionTitle: undefined,
  feature2ImageSrc: '/11-200h.jpg',
  feature1ImageSrc: '/14-1400w.jpg',
  feature3ImageAlt: 'Secure Data Encryption Image',
}

Features103.propTypes = {
  mainAction: PropTypes.element,
  sectionDescription: PropTypes.element,
  secondaryAction: PropTypes.element,
  features103Id: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
}

export default Features103
