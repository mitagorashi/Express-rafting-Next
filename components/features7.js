import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features7 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features7-layout226 thq-section-padding">
        <div className="features7-max-width thq-grid-auto-300 thq-section-max-width">
          <div className="thq-flex-column">
            <span className="features7-over-title1 thq-body-small">
              {props.feature1Slogan ?? (
                <Fragment>
                  <span className="features7-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_SU59Rc'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="thq-flex-column features7-content1">
              <h3 className="features7-title1 thq-heading-3">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features7-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_A_gvDK'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="features7-description1 thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features7-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_8GtpLz'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="thq-flex-column">
            <span className="features7-over-title2 thq-body-small">
              {props.feature2Slogan ?? (
                <Fragment>
                  <span className="features7-text2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Hgf9yE'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="thq-flex-column features7-content2">
              <strong className="features7-title2 thq-heading-3">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features7-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_A6wYRE'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </strong>
              <span className="features7-description2 thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features7-text1">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_PQrChB'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="thq-flex-column">
            <span className="features7-over-title3 thq-body-small">
              {props.feature3Slogan ?? (
                <Fragment>
                  <span className="features7-text7">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ho58cs'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="thq-flex-column features7-content3">
              <strong className="features7-title3 thq-heading-3">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features7-text8">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_MufW1L'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </strong>
              <span className="features7-description3 thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features7-text9">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_o50NSC'),
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
      <style jsx>
        {`
          .features7-layout226 {
            width: 1985px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            padding-left: 0px;
            flex-direction: row;
            justify-content: center;
          }
          .features7-max-width {
            align-self: flex-start;
          }
          .features7-over-title1 {
            font-weight: 600;
          }
          .features7-title1 {
            text-align: center;
          }
          .features7-description1 {
            text-align: center;
          }
          .features7-over-title2 {
            font-weight: 600;
          }
          .features7-title2 {
            text-align: center;
          }
          .features7-description2 {
            text-align: center;
          }
          .features7-over-title3 {
            font-weight: 600;
          }
          .features7-title3 {
            text-align: center;
          }
          .features7-description3 {
            text-align: center;
          }
          .features7-text1 {
            display: inline-block;
          }
          .features7-text2 {
            display: inline-block;
          }
          .features7-text3 {
            display: inline-block;
          }
          .features7-text4 {
            display: inline-block;
          }
          .features7-text5 {
            display: inline-block;
          }
          .features7-text6 {
            display: inline-block;
          }
          .features7-text7 {
            display: inline-block;
          }
          .features7-text8 {
            display: inline-block;
          }
          .features7-text9 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features7-content1 {
              align-items: center;
            }
            .features7-content2 {
              align-items: center;
            }
            .features7-content3 {
              align-items: center;
            }
          }
        `}
      </style>
    </>
  )
}

Features7.defaultProps = {
  feature2Description: undefined,
  feature2Slogan: undefined,
  feature1Description: undefined,
  feature1Title: undefined,
  feature1Slogan: undefined,
  feature2Title: undefined,
  feature3Slogan: undefined,
  feature3Title: undefined,
  feature3Description: undefined,
}

Features7.propTypes = {
  feature2Description: PropTypes.element,
  feature2Slogan: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1Slogan: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3Slogan: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
}

export default Features7
