import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features10 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features10-layout300 thq-section-padding">
        <div className="features10-max-width thq-flex-column thq-section-max-width">
          <div className="features10-section-title thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features10-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_gpPYPG'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2 features10-text11">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features10-text15">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_aKN-Y4'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="features10-text12 thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features10-text22">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_F1RTMh'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features10-content thq-grid-auto-300">
            <div className="features10-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <h3 className="features10-feature1-title thq-heading-3">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features10-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_No8FRj'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features10-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_5aqnFp'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features10-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <h3 className="thq-heading-3">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features10-text23">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_oIShMR'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features10-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Deqvv_'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features10-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <h3 className="thq-heading-3">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features10-text13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_G7GIco'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features10-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_BonuaN'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="features10-actions thq-flex-row">
            <button className="features10-button1 thq-button-filled">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features10-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Ky4U-z'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="features10-button2 thq-button-outline">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features10-text16">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_c536VZ'),
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
          .features10-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features10-max-width {
            gap: var(--dl-layout-space-threeunits);
            align-items: center;
          }
          .features10-section-title {
            align-items: center;
          }
          .features10-text12 {
            text-align: center;
          }
          .features10-content {
            align-self: stretch;
            align-items: center;
          }
          .features10-feature1 {
            align-items: flex-start;
          }
          .features10-feature1-title {
            text-align: center;
          }
          .features10-feature2 {
            align-items: flex-start;
          }
          .features10-feature3 {
            align-items: flex-start;
          }
          .features10-actions {
            align-items: flex-start;
          }
          .features10-button1 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features10-button2 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features10-text13 {
            display: inline-block;
          }
          .features10-text14 {
            display: inline-block;
          }
          .features10-text15 {
            display: inline-block;
          }
          .features10-text16 {
            display: inline-block;
          }
          .features10-text17 {
            display: inline-block;
          }
          .features10-text18 {
            display: inline-block;
          }
          .features10-text19 {
            display: inline-block;
          }
          .features10-text20 {
            display: inline-block;
          }
          .features10-text21 {
            display: inline-block;
          }
          .features10-text22 {
            display: inline-block;
          }
          .features10-text23 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features10-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features10-section-title {
              width: auto;
            }
            .features10-text11 {
              text-align: center;
            }
            .features10-feature2 {
              width: auto;
            }
            .features10-feature3 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .features10-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features10-actions {
              width: 100%;
              flex-direction: column;
            }
            .features10-button1 {
              width: 100%;
            }
            .features10-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features10.defaultProps = {
  feature3Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  slogan: undefined,
  sectionTitle: undefined,
  secondaryAction: undefined,
  feature1Title: undefined,
  feature2Description: undefined,
  feature1ImageAlt: 'User-Friendly Interface Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=200',
  feature2ImageAlt: 'Advanced Security Measures Image',
  mainAction: undefined,
  feature1Description: undefined,
  feature3ImageAlt: '24/7 Customer Support Image',
  feature3Description: undefined,
  sectionDescription: undefined,
  feature2Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=200',
}

Features10.propTypes = {
  feature3Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  slogan: PropTypes.element,
  sectionTitle: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  mainAction: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  sectionDescription: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
}

export default Features10
