import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features105 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features105-layout300 thq-section-padding">
        <div className="features105-max-width thq-flex-column thq-section-max-width">
          <div className="features105-section-title thq-flex-column">
            <h2 className="thq-heading-2 features105-text1">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features105-text4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_OdU5b-'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="features105-text2 thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features105-text3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_iIeacH'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features105-content thq-grid-auto-300">
            <div className="features105-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features105-feature1-image thq-img-ratio-4-3"
              />
            </div>
            <div className="features105-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="features105-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features105-feature3-image thq-img-ratio-4-3"
              />
            </div>
          </div>
          <div className="features105-actions thq-flex-row">
            <a
              href="http://wa.me/+905530741350"
              target="_blank"
              rel="noreferrer noopener"
              className="features105-button1 thq-button-filled"
            >
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features105-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_RqXYwU'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
            <button className="features105-button2 thq-button-outline">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features105-text5">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_7E2hVc'),
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
          .features105-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features105-max-width {
            gap: var(--dl-layout-space-threeunits);
            align-items: center;
          }
          .features105-section-title {
            align-items: center;
          }
          .features105-text2 {
            text-align: center;
          }
          .features105-content {
            align-self: stretch;
            align-items: center;
          }
          .features105-feature1 {
            align-items: flex-start;
          }
          .features105-feature1-image {
            width: 100%;
            height: auto;
          }
          .features105-feature2 {
            align-items: flex-start;
          }
          .features105-feature3 {
            align-items: flex-start;
          }
          .features105-feature3-image {
            width: 100%;
            height: auto;
          }
          .features105-actions {
            align-items: flex-start;
          }
          .features105-button1 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .features105-button2 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features105-text3 {
            display: inline-block;
          }
          .features105-text4 {
            display: inline-block;
          }
          .features105-text5 {
            display: inline-block;
          }
          .features105-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features105-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features105-section-title {
              width: auto;
            }
            .features105-text1 {
              text-align: center;
            }
            .features105-feature2 {
              width: auto;
            }
            .features105-feature3 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .features105-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features105-actions {
              width: 100%;
              flex-direction: column;
            }
            .features105-button1 {
              width: 100%;
            }
            .features105-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features105.defaultProps = {
  sectionDescription: undefined,
  sectionTitle: undefined,
  secondaryAction: undefined,
  feature2ImageSrc: '/1.jpg',
  feature2ImageAlt: 'Advanced Security Image',
  feature3ImageAlt: 'Real-Time Updates Image',
  feature1ImageAlt: 'User-Friendly Interface Image',
  feature1ImageSrc: '/external/screenshot%202025-08-09%20201330-1400w.jpg',
  feature3ImageSrc: '/6-200h.jpg',
  mainAction: undefined,
}

Features105.propTypes = {
  sectionDescription: PropTypes.element,
  sectionTitle: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  mainAction: PropTypes.element,
}

export default Features105
