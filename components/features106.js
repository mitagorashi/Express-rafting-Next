import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features106 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features106-layout300 thq-section-padding">
        <div className="features106-max-width thq-flex-column thq-section-max-width">
          <div className="features106-section-title thq-flex-column">
            <h2 className="thq-heading-2 features106-text1">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features106-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_bfRoqk'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="features106-text2 thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features106-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_thZZLO'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features106-content thq-grid-auto-300">
            <div className="features106-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features106-feature1-image thq-img-ratio-4-3"
              />
            </div>
            <div className="features106-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="features106-feature2-image thq-img-ratio-4-3"
              />
            </div>
            <div className="features106-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features106-feature3-image thq-img-ratio-4-3"
              />
            </div>
          </div>
          <div className="features106-actions thq-flex-row">
            <a
              href="http://wa.me/+905530741350"
              target="_blank"
              rel="noreferrer noopener"
              className="features106-button1 thq-button-filled"
            >
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features106-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_wkY6cC'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
            <button className="features106-button2 thq-button-outline">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features106-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_h1xpIb'),
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
          .features106-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features106-max-width {
            gap: var(--dl-layout-space-threeunits);
            align-items: center;
          }
          .features106-section-title {
            align-items: center;
          }
          .features106-text2 {
            text-align: center;
          }
          .features106-content {
            align-self: stretch;
            align-items: center;
          }
          .features106-feature1 {
            align-items: flex-start;
          }
          .features106-feature1-image {
            width: 100%;
            height: auto;
          }
          .features106-feature2 {
            align-items: flex-start;
          }
          .features106-feature2-image {
            width: 100%;
            height: auto;
          }
          .features106-feature3 {
            align-items: flex-start;
          }
          .features106-feature3-image {
            width: 100%;
            height: auto;
          }
          .features106-actions {
            align-items: flex-start;
          }
          .features106-button1 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .features106-button2 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features106-text3 {
            display: inline-block;
          }
          .features106-text4 {
            display: inline-block;
          }
          .features106-text5 {
            display: inline-block;
          }
          .features106-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features106-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features106-section-title {
              width: auto;
            }
            .features106-text1 {
              text-align: center;
            }
            .features106-feature2 {
              width: auto;
            }
            .features106-feature3 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .features106-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features106-actions {
              width: 100%;
              flex-direction: column;
            }
            .features106-button1 {
              width: 100%;
            }
            .features106-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features106.defaultProps = {
  mainAction: undefined,
  feature2ImageAlt: 'Advanced Security Image',
  secondaryAction: undefined,
  sectionTitle: undefined,
  feature1ImageSrc: '/8-1400w.jpg',
  sectionDescription: undefined,
  feature2ImageSrc: '/13e626f8-5c96-4dae-a0b2-947295880a2d-200h.jpg',
  feature3ImageAlt: '24/7 Customer Support Image',
  feature3ImageSrc: '/10-200h.jpg',
  feature1ImageAlt: 'User-Friendly Interface Image',
}

Features106.propTypes = {
  mainAction: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  secondaryAction: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
}

export default Features106
