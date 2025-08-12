import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features108 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features108-layout300 thq-section-padding">
        <div className="features108-max-width thq-flex-column thq-section-max-width">
          <div className="features108-section-title thq-flex-column">
            <h2 className="thq-heading-2 features108-text1">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features108-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_jJKFzf'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="features108-text2 thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features108-text3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_wMWOnP'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features108-content thq-grid-auto-300">
            <div className="features108-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features108-feature1-image thq-img-ratio-4-3"
              />
            </div>
            <div className="features108-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="features108-feature2-image thq-img-ratio-4-3"
              />
            </div>
            <div className="features108-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features108-feature3-image thq-img-ratio-4-3"
              />
            </div>
          </div>
          <div className="features108-actions thq-flex-row">
            <a
              href="http://wa.me/+905530741350"
              target="_blank"
              rel="noreferrer noopener"
              className="features108-button1 thq-button-filled"
            >
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features108-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_QhydRi'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
            <button className="features108-button2 thq-button-outline">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features108-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_kn54Hx'),
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
          .features108-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features108-max-width {
            gap: var(--dl-layout-space-threeunits);
            align-items: center;
          }
          .features108-section-title {
            align-items: center;
          }
          .features108-text2 {
            text-align: center;
          }
          .features108-content {
            align-self: stretch;
            align-items: center;
          }
          .features108-feature1 {
            align-items: flex-start;
          }
          .features108-feature1-image {
            width: 100%;
            height: auto;
          }
          .features108-feature2 {
            align-items: flex-start;
          }
          .features108-feature2-image {
            width: 100%;
            height: auto;
          }
          .features108-feature3 {
            align-items: flex-start;
          }
          .features108-feature3-image {
            width: 100%;
            height: auto;
          }
          .features108-actions {
            align-items: flex-start;
          }
          .features108-button1 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .features108-button2 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features108-text3 {
            display: inline-block;
          }
          .features108-text4 {
            display: inline-block;
          }
          .features108-text5 {
            display: inline-block;
          }
          .features108-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features108-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features108-section-title {
              width: auto;
            }
            .features108-text1 {
              text-align: center;
            }
            .features108-feature2 {
              width: auto;
            }
            .features108-feature3 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .features108-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features108-actions {
              width: 100%;
              flex-direction: column;
            }
            .features108-button1 {
              width: 100%;
            }
            .features108-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features108.defaultProps = {
  sectionDescription: undefined,
  mainAction: undefined,
  feature1ImageAlt: 'User-Friendly Interface Image',
  feature3ImageAlt: 'Customer Support Image',
  feature1ImageSrc: '/9-1400w.jpg',
  feature2ImageSrc: '/7-200h.jpg',
  sectionTitle: undefined,
  secondaryAction: undefined,
  feature2ImageAlt: 'Advanced Analytics Image',
  feature3ImageSrc: '/12-200h.jpg',
}

Features108.propTypes = {
  sectionDescription: PropTypes.element,
  mainAction: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
}

export default Features108
