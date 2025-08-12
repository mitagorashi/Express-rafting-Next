import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features102 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features102-layout300 thq-section-padding">
        <div className="features102-max-width thq-flex-column thq-section-max-width">
          <div className="features102-section-title thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features102-text22">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_fUgVSH'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2 features102-text11">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features102-text19">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_rW4zvq'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="features102-text12 thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features102-text18">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_OoUEQJ'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features102-content thq-grid-auto-300">
            <div className="features102-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <h3 className="features102-feature1-title thq-heading-3">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features102-text14">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_rKWu6L'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features102-text16">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_STtzv7'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features102-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <h3 className="thq-heading-3">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features102-text13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Eh2OuD'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features102-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_W2j3A-'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features102-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <h3 className="thq-heading-3">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features102-text23">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_DpkU0P'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features102-text15">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Ath15H'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="features102-actions thq-flex-row">
            <button className="features102-button1 thq-button-filled">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features102-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_hWxK-L'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="features102-button2 thq-button-outline">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features102-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_m7--ua'),
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
          .features102-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features102-max-width {
            gap: var(--dl-layout-space-threeunits);
            align-items: center;
          }
          .features102-section-title {
            align-items: center;
          }
          .features102-text12 {
            text-align: center;
          }
          .features102-content {
            align-self: stretch;
            align-items: center;
          }
          .features102-feature1 {
            align-items: flex-start;
          }
          .features102-feature1-title {
            text-align: center;
          }
          .features102-feature2 {
            align-items: flex-start;
          }
          .features102-feature3 {
            align-items: flex-start;
          }
          .features102-actions {
            align-items: flex-start;
          }
          .features102-button1 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features102-button2 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features102-text13 {
            display: inline-block;
          }
          .features102-text14 {
            display: inline-block;
          }
          .features102-text15 {
            display: inline-block;
          }
          .features102-text16 {
            display: inline-block;
          }
          .features102-text17 {
            display: inline-block;
          }
          .features102-text18 {
            display: inline-block;
          }
          .features102-text19 {
            display: inline-block;
          }
          .features102-text20 {
            display: inline-block;
          }
          .features102-text21 {
            display: inline-block;
          }
          .features102-text22 {
            display: inline-block;
          }
          .features102-text23 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features102-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features102-section-title {
              width: auto;
            }
            .features102-text11 {
              text-align: center;
            }
            .features102-feature2 {
              width: auto;
            }
            .features102-feature3 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .features102-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features102-actions {
              width: 100%;
              flex-direction: column;
            }
            .features102-button1 {
              width: 100%;
            }
            .features102-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features102.defaultProps = {
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=200',
  feature2Title: undefined,
  feature1Title: undefined,
  feature3Description: undefined,
  feature1Description: undefined,
  secondaryAction: undefined,
  feature3ImageAlt: 'Seamless Integration Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  sectionDescription: undefined,
  sectionTitle: undefined,
  feature2Description: undefined,
  mainAction: undefined,
  slogan: undefined,
  feature3Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=200',
  feature1ImageAlt: 'User-Friendly Interface Image',
  feature2ImageAlt: 'Advanced Security Image',
}

Features102.propTypes = {
  feature3ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1Description: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature2Description: PropTypes.element,
  mainAction: PropTypes.element,
  slogan: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
}

export default Features102
