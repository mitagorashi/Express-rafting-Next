import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features107 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features107-layout300 thq-section-padding">
        <div className="features107-max-width thq-flex-column thq-section-max-width">
          <div className="features107-section-title thq-flex-column">
            <h2 className="thq-heading-2 features107-text1">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features107-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_WrRa-B'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="features107-text2 thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features107-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_2vD2V7'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features107-content thq-grid-auto-300">
            <div className="features107-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features107-feature1-image thq-img-ratio-4-3"
              />
            </div>
            <div className="features107-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="features107-feature2-image thq-img-ratio-4-3"
              />
            </div>
            <div className="features107-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features107-feature3-image thq-img-ratio-4-3"
              />
            </div>
          </div>
          <div className="features107-actions thq-flex-row">
            <a
              href="http://wa.me/+905530741350"
              target="_blank"
              rel="noreferrer noopener"
              className="features107-button1 thq-button-filled"
            >
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features107-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_6xJSIN'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
            <button className="features107-button2 thq-button-outline">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features107-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_TJXF4r'),
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
          .features107-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features107-max-width {
            gap: var(--dl-layout-space-threeunits);
            align-items: center;
          }
          .features107-section-title {
            align-items: center;
          }
          .features107-text2 {
            text-align: center;
          }
          .features107-content {
            align-self: stretch;
            align-items: center;
          }
          .features107-feature1 {
            align-items: flex-start;
          }
          .features107-feature1-image {
            width: 100%;
            height: auto;
          }
          .features107-feature2 {
            align-items: flex-start;
          }
          .features107-feature2-image {
            width: 100%;
            height: auto;
          }
          .features107-feature3 {
            align-items: flex-start;
          }
          .features107-feature3-image {
            width: 100%;
            height: auto;
          }
          .features107-actions {
            align-items: flex-start;
          }
          .features107-button1 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .features107-button2 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features107-text3 {
            display: inline-block;
          }
          .features107-text4 {
            display: inline-block;
          }
          .features107-text5 {
            display: inline-block;
          }
          .features107-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features107-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features107-section-title {
              width: auto;
            }
            .features107-text1 {
              text-align: center;
            }
            .features107-feature2 {
              width: auto;
            }
            .features107-feature3 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .features107-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features107-actions {
              width: 100%;
              flex-direction: column;
            }
            .features107-button1 {
              width: 100%;
            }
            .features107-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features107.defaultProps = {
  feature3ImageAlt: '24/7 Support Image',
  feature2ImageSrc: '/extra-200w.jpg',
  mainAction: undefined,
  feature1ImageSrc: '/new pics/8e46c562-716e-41e4-9cc4-30e34a8211a5-1400w.jpg',
  secondaryAction: undefined,
  sectionTitle: undefined,
  feature3ImageSrc: '/11-200h.jpg',
  feature2ImageAlt: 'Secure and Reliable Image',
  sectionDescription: undefined,
  feature1ImageAlt: 'Easy to Use Image',
}

Features107.propTypes = {
  feature3ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  mainAction: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  secondaryAction: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
}

export default Features107
