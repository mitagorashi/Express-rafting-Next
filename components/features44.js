import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features44 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features44-layout301 thq-section-padding">
        <div className="features44-max-width thq-section-max-width">
          <h2 className="features44-text10 thq-heading-2">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="features44-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VjDwBS'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <div className="features44-row thq-grid-auto-300">
            <div className="features44-feature1">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features44-content1 thq-flex-column">
                <div className="features44-section-title1 thq-flex-column">
                  <h3 className="features44-title1 thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="features44-text18">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_DZJ1O2'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="features44-description1 thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="features44-text23">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_dCsK4l'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="features44-action5 thq-flex-row">
                  <button className="thq-button-flat">
                    <span className="thq-body-small">
                      {props.feature1Button ?? (
                        <Fragment>
                          <span className="features44-text11">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_GvXg3w'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="features44-feature2">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features44-content2 thq-flex-column">
                <div className="features44-section-title2 thq-flex-column">
                  <strong className="features44-title2 thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features44-text14">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_S7V1SA'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </strong>
                  <span className="features44-description2 thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="features44-text13">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_y8r7FV'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="features44-action6 thq-flex-row">
                  <button className="thq-button-flat">
                    <span className="thq-body-small">
                      {props.feature2Button ?? (
                        <Fragment>
                          <span className="features44-text17">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_CpRmBF'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="features44-feature3">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features44-content3 thq-flex-column">
                <div className="features44-section-title3 thq-flex-column">
                  <strong className="features44-title3 thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="features44-text15">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_RWicuS'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </strong>
                  <span className="features44-description3 thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="features44-text20">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Av7gfV'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="features44-action7 thq-flex-row">
                  <button className="thq-button-flat">
                    <span className="thq-body-small">
                      {props.feature3Button ?? (
                        <Fragment>
                          <span className="features44-text21">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_9RG4Da'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="features44-feature4">
              <img
                alt={props.feature4ImageAlt}
                src={props.feature4ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features44-content4 thq-flex-column">
                <div className="features44-section-title4 thq-flex-column">
                  <strong className="features44-title4 thq-heading-3">
                    {props.feature4Title ?? (
                      <Fragment>
                        <span className="features44-text12">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_MrZOMk'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </strong>
                  <span className="features44-description4 thq-body-small">
                    {props.feature4Description ?? (
                      <Fragment>
                        <span className="features44-text19">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_FTOMGh'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="features44-action8 thq-flex-row">
                  <button className="thq-button-flat">
                    <span className="thq-body-small">
                      {props.feature4Button ?? (
                        <Fragment>
                          <span className="features44-text16">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_qcnpKH'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features44-layout301 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features44-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features44-text10 {
            text-align: center;
          }
          .features44-row {
            width: 100%;
          }
          .features44-feature1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features44-content1 {
            align-self: stretch;
            align-items: center;
          }
          .features44-section-title1 {
            align-self: stretch;
            align-items: center;
          }
          .features44-title1 {
            text-align: center;
          }
          .features44-description1 {
            text-align: center;
          }
          .features44-action5 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .features44-feature2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features44-content2 {
            align-self: stretch;
            align-items: center;
          }
          .features44-section-title2 {
            align-self: stretch;
            align-items: center;
          }
          .features44-title2 {
            text-align: center;
          }
          .features44-description2 {
            text-align: center;
          }
          .features44-action6 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .features44-feature3 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features44-content3 {
            align-self: stretch;
            align-items: center;
          }
          .features44-section-title3 {
            align-self: stretch;
            align-items: center;
          }
          .features44-title3 {
            text-align: center;
          }
          .features44-description3 {
            text-align: center;
          }
          .features44-action7 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .features44-feature4 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features44-content4 {
            align-self: stretch;
            align-items: center;
          }
          .features44-section-title4 {
            align-self: stretch;
            align-items: center;
          }
          .features44-title4 {
            text-align: center;
          }
          .features44-description4 {
            text-align: center;
          }
          .features44-action8 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .features44-text11 {
            display: inline-block;
          }
          .features44-text12 {
            display: inline-block;
          }
          .features44-text13 {
            display: inline-block;
          }
          .features44-text14 {
            display: inline-block;
          }
          .features44-text15 {
            display: inline-block;
          }
          .features44-text16 {
            display: inline-block;
          }
          .features44-text17 {
            display: inline-block;
          }
          .features44-text18 {
            display: inline-block;
          }
          .features44-text19 {
            display: inline-block;
          }
          .features44-text20 {
            display: inline-block;
          }
          .features44-text21 {
            display: inline-block;
          }
          .features44-text22 {
            display: inline-block;
          }
          .features44-text23 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features44-row {
              width: auto;
              align-items: center;
              flex-direction: column;
            }
            .features44-feature1 {
              width: 100%;
            }
            .features44-feature2 {
              width: 100%;
            }
            .features44-feature3 {
              width: 100%;
            }
            .features44-feature4 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features44-text10 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .features44-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Features44.defaultProps = {
  feature1ImageAlt: 'Image depicting fast service',
  feature1Button: undefined,
  feature4Title: undefined,
  feature3ImageAlt: 'Image representing secure payments',
  feature2Description: undefined,
  feature2Title: undefined,
  feature3Title: undefined,
  feature4Button: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature2ImageAlt: 'Image showing customer support',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature4ImageAlt: 'Image illustrating customization',
  feature2Button: undefined,
  feature1Title: undefined,
  feature4Description: undefined,
  feature3Description: undefined,
  feature3Button: undefined,
  sectionTitle: undefined,
  feature1Description: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
}

Features44.propTypes = {
  feature1ImageAlt: PropTypes.string,
  feature1Button: PropTypes.element,
  feature4Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature4Button: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature2Button: PropTypes.element,
  feature1Title: PropTypes.element,
  feature4Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3Button: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
}

export default Features44
