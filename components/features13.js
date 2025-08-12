import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features13 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features13-layout251 thq-section-padding">
        <div className="features13-max-width thq-section-max-width">
          <div className="thq-flex-row features13-section-title">
            <div className="features13-column thq-flex-column">
              <span className="thq-body-small">
                {props.slogan ?? (
                  <Fragment>
                    <span className="features13-text22">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_2CZgzi'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <h2 className="thq-heading-2 features13-text11">
                {props.sectionTitle ?? (
                  <Fragment>
                    <span className="features13-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_rgnmM-'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
            </div>
            <span className="thq-body-small">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features13-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_XphpKV'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features13-content1">
            <div className="features13-row thq-flex-row">
              <div className="features13-feature1 thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-ratio-4-3 features13-feature1-image"
                />
                <div className="features13-content2 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="features13-text20">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_LZz39j'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="features13-text21">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_YXbBRT'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features13-feature2 thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-ratio-4-3 features13-feature2-image"
                />
                <div className="features13-content3 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features13-text17">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_A0l0Bw'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="features13-text23">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_XyZO9C'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features13-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-ratio-4-3 features13-feature3-image"
                />
                <div className="features13-content4 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="features13-text14">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_MIxGKJ'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="features13-text18">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_HyOYs6'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="features13-actions">
            <button className="thq-button-filled features13-button1">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features13-text13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_6QOLCw'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline features13-button2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features13-text15">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ZtTM0W'),
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
          .features13-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features13-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features13-column {
            gap: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features13-content1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features13-row {
            align-items: flex-start;
          }
          .features13-feature1 {
            flex: 1;
          }
          .features13-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features13-feature2 {
            flex: 1;
          }
          .features13-content3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features13-feature3 {
            flex: 1;
          }
          .features13-content4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features13-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .features13-text13 {
            display: inline-block;
          }
          .features13-text14 {
            display: inline-block;
          }
          .features13-text15 {
            display: inline-block;
          }
          .features13-text16 {
            display: inline-block;
          }
          .features13-text17 {
            display: inline-block;
          }
          .features13-text18 {
            display: inline-block;
          }
          .features13-text19 {
            display: inline-block;
          }
          .features13-text20 {
            display: inline-block;
          }
          .features13-text21 {
            display: inline-block;
          }
          .features13-text22 {
            display: inline-block;
          }
          .features13-text23 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features13-section-title {
              align-items: flex-start;
              flex-direction: column;
            }
            .features13-feature1-image {
              height: 260px;
            }
            .features13-feature2-image {
              height: 260px;
            }
            .features13-feature3-image {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .features13-column {
              width: 100%;
            }
            .features13-text11 {
              text-align: center;
            }
            .features13-row {
              flex-direction: column;
            }
            .features13-feature1-image {
              width: 100%;
            }
            .features13-feature2 {
              width: auto;
            }
            .features13-feature2-image {
              width: 100%;
            }
            .features13-feature3 {
              width: auto;
            }
            .features13-actions {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features13-actions {
              width: 100%;
              flex-direction: column;
            }
            .features13-button1 {
              width: 100%;
            }
            .features13-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features13.defaultProps = {
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&h=300',
  mainAction: undefined,
  feature3Title: undefined,
  feature3ImageAlt: 'Customizable Options Image',
  secondaryAction: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&h=300',
  sectionDescription: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  feature2Title: undefined,
  feature3Description: undefined,
  sectionTitle: undefined,
  feature1Title: undefined,
  feature1Description: undefined,
  slogan: undefined,
  feature2Description: undefined,
  feature2ImageAlt: 'Advanced Analytics Image',
  feature1ImageAlt: 'User-Friendly Interface Image',
}

Features13.propTypes = {
  feature2ImageSrc: PropTypes.string,
  mainAction: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  secondaryAction: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3Description: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  slogan: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
}

export default Features13
