import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Steps2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="steps2-container1 thq-section-padding">
        <div className="steps2-max-width thq-section-max-width">
          <div className="steps2-container2 thq-grid-2">
            <div className="steps2-section-header">
              <h2 className="thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZVnIPI'),
                  }}
                ></span>
              </h2>
              <p className="thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gtR3-G'),
                  }}
                ></span>
              </p>
              <div className="steps2-actions">
                <Link href="/tours">
                  <a className="steps2-link thq-button-filled thq-button-animated">
                    <span className="thq-body-small">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_0K_XIw'),
                        }}
                      ></span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="steps2-container3">
              <div className="steps2-container4 thq-card">
                <h2 className="thq-heading-2">
                  {props.step1Title ?? (
                    <Fragment>
                      <span className="steps2-text27">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_87P7CU'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text14 thq-body-small">
                  {props.step1Description ?? (
                    <Fragment>
                      <span className="steps2-text28">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_wBa2gv'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text15 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XljMpD'),
                    }}
                  ></span>
                </label>
              </div>
              <div className="steps2-container5 thq-card">
                <h2 className="thq-heading-2">
                  {props.step2Title ?? (
                    <Fragment>
                      <span className="steps2-text29">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_1j5Vw4'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text17 thq-body-small">
                  {props.step2Description ?? (
                    <Fragment>
                      <span className="steps2-text25">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_GwUpIe'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text18 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9EyUTA'),
                    }}
                  ></span>
                </label>
              </div>
              <div className="steps2-container6 thq-card">
                <h2 className="thq-heading-2">
                  {props.step3Title ?? (
                    <Fragment>
                      <span className="steps2-text30">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_JxEyiJ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text20 thq-body-small">
                  {props.step3Description ?? (
                    <Fragment>
                      <span className="steps2-text31">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_3UmsuT'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text21 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_exvkj7'),
                    }}
                  ></span>
                </label>
              </div>
              <div className="steps2-container7 thq-card">
                <h2 className="thq-heading-2">
                  {props.step4Title ?? (
                    <Fragment>
                      <span className="steps2-text32">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_A1inS_'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text23 thq-body-small">
                  {props.step4Description ?? (
                    <Fragment>
                      <span className="steps2-text26">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Ai2pyC'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text24 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_lXP0y7'),
                    }}
                  ></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps2-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps2-max-width {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps2-container2 {
            align-items: start;
          }
          .steps2-section-header {
            gap: var(--dl-layout-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps2-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .steps2-link {
            text-decoration: none;
          }
          .steps2-container3 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps2-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text14 {
            text-align: center;
          }
          .steps2-text15 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text17 {
            text-align: center;
          }
          .steps2-text18 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text20 {
            text-align: center;
          }
          .steps2-text21 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container7 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text23 {
            text-align: center;
          }
          .steps2-text24 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-text25 {
            display: inline-block;
          }
          .steps2-text26 {
            display: inline-block;
          }
          .steps2-text27 {
            display: inline-block;
          }
          .steps2-text28 {
            display: inline-block;
          }
          .steps2-text29 {
            display: inline-block;
          }
          .steps2-text30 {
            display: inline-block;
          }
          .steps2-text31 {
            display: inline-block;
          }
          .steps2-text32 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .steps2-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps2-section-header {
              position: static;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .steps2-actions {
              width: 100%;
              align-self: flex-start;
            }
            .steps2-container4 {
              width: 100%;
            }
            .steps2-container5 {
              width: 100%;
            }
            .steps2-container6 {
              width: 100%;
            }
            .steps2-container7 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .steps2-link {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps2.defaultProps = {
  step2Description: undefined,
  step4Description: undefined,
  step1Title: undefined,
  step1Description: undefined,
  step2Title: undefined,
  step3Title: undefined,
  step3Description: undefined,
  step4Title: undefined,
}

Steps2.propTypes = {
  step2Description: PropTypes.element,
  step4Description: PropTypes.element,
  step1Title: PropTypes.element,
  step1Description: PropTypes.element,
  step2Title: PropTypes.element,
  step3Title: PropTypes.element,
  step3Description: PropTypes.element,
  step4Title: PropTypes.element,
}

export default Steps2
