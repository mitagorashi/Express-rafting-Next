import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features1010 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features1010-layout300 thq-section-padding">
        <div className="features1010-max-width thq-flex-column thq-section-max-width">
          <div className="features1010-section-title thq-flex-column">
            <h2 className="thq-heading-2 features1010-text1">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features1010-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_LK2eb7'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="features1010-text2 thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features1010-text3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_z_7yH6'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features1010-content thq-grid-auto-300">
            <div className="features1010-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features1010-feature1-image thq-img-ratio-4-3"
              />
            </div>
            <div className="features1010-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="features1010-feature2-image thq-img-ratio-4-3"
              />
            </div>
            <div className="features1010-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features1010-feature3-image thq-img-ratio-4-3"
              />
            </div>
          </div>
          <div className="features1010-actions thq-flex-row">
            <a
              href="http://wa.me/+905530741350"
              target="_blank"
              rel="noreferrer noopener"
              className="features1010-button1 thq-button-filled"
            >
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features1010-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_plG1Qz'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
            <button className="features1010-button2 thq-button-outline">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features1010-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_eBPZaw'),
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
          .features1010-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features1010-max-width {
            gap: var(--dl-layout-space-threeunits);
            align-items: center;
          }
          .features1010-section-title {
            align-items: center;
          }
          .features1010-text2 {
            text-align: center;
          }
          .features1010-content {
            align-self: stretch;
            align-items: center;
          }
          .features1010-feature1 {
            align-items: flex-start;
          }
          .features1010-feature1-image {
            width: 100%;
            height: auto;
          }
          .features1010-feature2 {
            align-items: flex-start;
          }
          .features1010-feature2-image {
            width: 100%;
            height: auto;
          }
          .features1010-feature3 {
            align-items: flex-start;
          }
          .features1010-feature3-image {
            width: 100%;
            height: auto;
          }
          .features1010-actions {
            align-items: flex-start;
          }
          .features1010-button1 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .features1010-button2 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features1010-text3 {
            display: inline-block;
          }
          .features1010-text4 {
            display: inline-block;
          }
          .features1010-text5 {
            display: inline-block;
          }
          .features1010-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features1010-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features1010-section-title {
              width: auto;
            }
            .features1010-text1 {
              text-align: center;
            }
            .features1010-feature2 {
              width: auto;
            }
            .features1010-feature3 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .features1010-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features1010-actions {
              width: 100%;
              flex-direction: column;
            }
            .features1010-button1 {
              width: 100%;
            }
            .features1010-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features1010.defaultProps = {
  feature2ImageSrc: '/df7ad923-8e3e-4d42-9b89-c5a61b82e67e-1400w.jpg',
  feature3ImageSrc: '/20e455bf-f1e9-4561-8faa-7116b0eba811-200h.jpg',
  feature1ImageAlt: '/df7ad923-8e3e-4d42-9b89-c5a61b82e67e-1400w.jpg',
  sectionDescription: undefined,
  feature2ImageAlt: 'Advanced Analytics Image',
  feature1ImageSrc: '/9471d5f5-4c87-41e1-8970-2f7e7909b1bd-1400w.jpg',
  mainAction: undefined,
  sectionTitle: undefined,
  feature3ImageAlt: 'Secure Data Encryption Image',
  secondaryAction: undefined,
}

Features1010.propTypes = {
  feature2ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  mainAction: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  secondaryAction: PropTypes.element,
}

export default Features1010
