import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features109 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features109-layout300 thq-section-padding">
        <div className="features109-max-width thq-flex-column thq-section-max-width">
          <div className="features109-section-title thq-flex-column">
            <h2 className="thq-heading-2 features109-text1">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features109-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_vvghUb'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="features109-text2 thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features109-text4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_089C88'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features109-content thq-grid-auto-300">
            <div className="features109-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features109-feature1-image thq-img-ratio-4-3"
              />
            </div>
            <div className="features109-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="features109-feature2-image thq-img-ratio-4-3"
              />
            </div>
            <div className="features109-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features109-feature3-image thq-img-ratio-4-3"
              />
            </div>
          </div>
          <div className="features109-actions thq-flex-row">
            <a
              href="http://wa.me/+905530741350"
              target="_blank"
              rel="noreferrer noopener"
              className="features109-button1 thq-button-filled"
            >
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features109-text5">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_k89k06'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
            <button className="features109-button2 thq-button-outline">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features109-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_dv3BL-'),
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
          .features109-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features109-max-width {
            gap: var(--dl-layout-space-threeunits);
            align-items: center;
          }
          .features109-section-title {
            align-items: center;
          }
          .features109-text2 {
            text-align: center;
          }
          .features109-content {
            align-self: stretch;
            align-items: center;
          }
          .features109-feature1 {
            align-items: flex-start;
          }
          .features109-feature1-image {
            width: 100%;
            height: auto;
          }
          .features109-feature2 {
            align-items: flex-start;
          }
          .features109-feature2-image {
            width: 100%;
            height: auto;
          }
          .features109-feature3 {
            align-items: flex-start;
          }
          .features109-feature3-image {
            width: 100%;
            height: auto;
          }
          .features109-actions {
            align-items: flex-start;
          }
          .features109-button1 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .features109-button2 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features109-text3 {
            display: inline-block;
          }
          .features109-text4 {
            display: inline-block;
          }
          .features109-text5 {
            display: inline-block;
          }
          .features109-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features109-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features109-section-title {
              width: auto;
            }
            .features109-text1 {
              text-align: center;
            }
            .features109-feature2 {
              width: auto;
            }
            .features109-feature3 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .features109-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features109-actions {
              width: 100%;
              flex-direction: column;
            }
            .features109-button1 {
              width: 100%;
            }
            .features109-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features109.defaultProps = {
  secondaryAction: undefined,
  feature1ImageAlt: 'User-Friendly Interface Image',
  sectionDescription: undefined,
  feature3ImageAlt: 'Customer Support Image',
  feature1ImageSrc: '/20e455bf-f1e9-4561-8faa-7116b0eba811-1400w.jpg',
  feature3ImageSrc: '/9-200h.jpg',
  mainAction: undefined,
  sectionTitle: undefined,
  feature2ImageAlt: 'Advanced Security Image',
  feature2ImageSrc: '/6-200h.jpg',
}

Features109.propTypes = {
  secondaryAction: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  mainAction: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
}

export default Features109
