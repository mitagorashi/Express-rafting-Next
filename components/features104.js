import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features104 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features104-layout300 thq-section-padding">
        <div className="features104-max-width thq-flex-column thq-section-max-width">
          <div className="features104-section-title thq-flex-column">
            <h2 className="thq-heading-2 features104-text1">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features104-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_MTIHv9'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="features104-text2 thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features104-text3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_-xfcu1'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features104-content thq-grid-auto-300">
            <div className="features104-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features104-feature1-image thq-img-ratio-4-3"
              />
            </div>
            <div className="features104-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="features104-feature2-image thq-img-ratio-4-3"
              />
            </div>
            <div className="features104-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features104-feature3-image thq-img-ratio-4-3"
              />
            </div>
          </div>
          <div className="features104-actions thq-flex-row">
            <a
              href="http://wa.me/+905530741350"
              target="_blank"
              rel="noreferrer noopener"
              className="features104-button1 thq-button-filled"
            >
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features104-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_dnjaTt'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
            <button className="features104-button2 thq-button-outline">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features104-text5">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_5RekAb'),
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
          .features104-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features104-max-width {
            gap: var(--dl-layout-space-threeunits);
            align-items: center;
          }
          .features104-section-title {
            align-items: center;
          }
          .features104-text2 {
            text-align: center;
          }
          .features104-content {
            align-self: stretch;
            align-items: center;
          }
          .features104-feature1 {
            align-items: flex-start;
          }
          .features104-feature1-image {
            width: 100%;
            height: auto;
          }
          .features104-feature2 {
            align-items: flex-start;
          }
          .features104-feature2-image {
            width: 100%;
            height: auto;
          }
          .features104-feature3 {
            align-items: flex-start;
          }
          .features104-feature3-image {
            width: 100%;
            height: auto;
          }
          .features104-actions {
            align-items: flex-start;
          }
          .features104-button1 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .features104-button2 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features104-text3 {
            display: inline-block;
          }
          .features104-text4 {
            display: inline-block;
          }
          .features104-text5 {
            display: inline-block;
          }
          .features104-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features104-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features104-section-title {
              width: auto;
            }
            .features104-text1 {
              text-align: center;
            }
            .features104-feature2 {
              width: auto;
            }
            .features104-feature3 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .features104-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features104-actions {
              width: 100%;
              flex-direction: column;
            }
            .features104-button1 {
              width: 100%;
            }
            .features104-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features104.defaultProps = {
  sectionDescription: undefined,
  feature1ImageSrc: '/13e626f8-5c96-4dae-a0b2-947295880a2d-1400w.jpg',
  feature3ImageAlt: 'Real-Time Updates Image',
  feature2ImageSrc: '/external/screenshot%202025-08-09%20201330-200h.jpg',
  feature3ImageSrc: '/10-200h.jpg',
  mainAction: undefined,
  secondaryAction: undefined,
  sectionTitle: undefined,
  feature1ImageAlt: 'User-Friendly Interface Image',
  feature2ImageAlt: 'Advanced Security Image',
}

Features104.propTypes = {
  sectionDescription: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  mainAction: PropTypes.element,
  secondaryAction: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
}

export default Features104
