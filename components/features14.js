import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features14 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features14-layout251 thq-section-padding">
        <div className="features14-max-width thq-section-max-width">
          <div className="thq-flex-row features14-section-title">
            <div className="features14-column thq-flex-column">
              <span className="thq-body-small">
                {props.slogan ?? (
                  <Fragment>
                    <span className="features14-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text__DrPoV'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <h2 className="thq-heading-2 features14-text11">
                {props.sectionTitle ?? (
                  <Fragment>
                    <span className="features14-text23">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_at18nj'),
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
                  <span className="features14-text17">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_1tCD5k'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features14-content1">
            <div className="features14-row thq-flex-row">
              <div className="features14-feature1 thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-ratio-4-3 features14-feature1-image"
                />
                <div className="features14-content2 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="features14-text16">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_eV7yYR'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="features14-text21">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_9MoXRq'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features14-feature2 thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-ratio-4-3 features14-feature2-image"
                />
                <div className="features14-content3 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features14-text19">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_K9b7Jl'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="features14-text14">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_mU2CCZ'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features14-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-ratio-4-3 features14-feature3-image"
                />
                <div className="features14-content4 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="features14-text20">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_i8QWms'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="features14-text22">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_1EQ1OA'),
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
          <div className="features14-actions">
            <button className="thq-button-filled features14-button1">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features14-text13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_nhRI4h'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline features14-button2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features14-text15">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_kh4VBB'),
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
          .features14-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features14-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features14-column {
            gap: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features14-content1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features14-row {
            align-items: flex-start;
          }
          .features14-feature1 {
            flex: 1;
          }
          .features14-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features14-feature2 {
            flex: 1;
          }
          .features14-content3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features14-feature3 {
            flex: 1;
          }
          .features14-content4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features14-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .features14-text13 {
            display: inline-block;
          }
          .features14-text14 {
            display: inline-block;
          }
          .features14-text15 {
            display: inline-block;
          }
          .features14-text16 {
            display: inline-block;
          }
          .features14-text17 {
            display: inline-block;
          }
          .features14-text18 {
            display: inline-block;
          }
          .features14-text19 {
            display: inline-block;
          }
          .features14-text20 {
            display: inline-block;
          }
          .features14-text21 {
            display: inline-block;
          }
          .features14-text22 {
            display: inline-block;
          }
          .features14-text23 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features14-section-title {
              align-items: flex-start;
              flex-direction: column;
            }
            .features14-feature1-image {
              height: 260px;
            }
            .features14-feature2-image {
              height: 260px;
            }
            .features14-feature3-image {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .features14-column {
              width: 100%;
            }
            .features14-text11 {
              text-align: center;
            }
            .features14-row {
              flex-direction: column;
            }
            .features14-feature1-image {
              width: 100%;
            }
            .features14-feature2 {
              width: auto;
            }
            .features14-feature2-image {
              width: 100%;
            }
            .features14-feature3 {
              width: auto;
            }
            .features14-actions {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features14-actions {
              width: 100%;
              flex-direction: column;
            }
            .features14-button1 {
              width: 100%;
            }
            .features14-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features14.defaultProps = {
  mainAction: undefined,
  feature2Description: undefined,
  secondaryAction: undefined,
  feature1Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  sectionDescription: undefined,
  feature1ImageAlt: 'User-Friendly Interface Image',
  slogan: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&h=300',
  feature2Title: undefined,
  feature3Title: undefined,
  feature1Description: undefined,
  feature3Description: undefined,
  feature2ImageAlt: 'Advanced Security Measures Image',
  sectionTitle: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&h=300',
  feature3ImageAlt: 'Seamless Integration Image',
}

Features14.propTypes = {
  mainAction: PropTypes.element,
  feature2Description: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  slogan: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
}

export default Features14
