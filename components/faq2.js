import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FAQ2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="faq2faq8 thq-section-padding">
        <div className="faq2-max-width thq-section-max-width">
          <div className="thq-flex-row faq2-container">
            <div className="thq-flex-column">
              <div className="faq2-content">
                <h2 className="faq2-text10 thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="faq2-text13">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Z_EoG_'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="faq2-text11 thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="faq2-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_2t1AAc'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <Link href="/contact">
                <a className="faq2-link thq-button-outline">
                  <span className="thq-body-small">
                    {props.action ?? (
                      <Fragment>
                        <span className="faq2-text12">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Hp2Dvk'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </a>
              </Link>
            </div>
            <div className="thq-flex-column">
              <div className="faq2-list-item1">
                <p className="faq2-faq1-question thq-body-large">
                  {props.faq1Question ?? (
                    <Fragment>
                      <span className="faq2-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_6jTUAt'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.faq1Answer ?? (
                    <Fragment>
                      <span className="faq2-text24">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_OKzoqE'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="faq2-list-item2">
                <p className="faq2-faq2-question thq-body-large">
                  {props.faq2Question ?? (
                    <Fragment>
                      <span className="faq2-text16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_2Fr_rG'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.faq2Answer ?? (
                    <Fragment>
                      <span className="faq2-text15">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_U7uLN4'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="faq2-list-item3">
                <p className="faq2-faq3-question thq-body-large">
                  {props.faq3Question ?? (
                    <Fragment>
                      <span className="faq2-text22">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_XU6gX-'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.faq3Answer ?? (
                    <Fragment>
                      <span className="faq2-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_2HYS_Z'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="faq2-list-item4">
                <p className="faq2-faq4-question thq-body-large">
                  {props.faq4Question ?? (
                    <Fragment>
                      <span className="faq2-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_0pgByr'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.faq4Answer ?? (
                    <Fragment>
                      <span className="faq2-text21">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_9YM3_Y'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="faq2-list-item5">
                <p className="faq2-faq5-question thq-body-large">
                  {props.faq5Question ?? (
                    <Fragment>
                      <span className="faq2-text23">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_0PuUoC'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.faq5Answer ?? (
                    <Fragment>
                      <span className="faq2-text14">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_-ouLX6'),
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
      </div>
      <style jsx>
        {`
          .faq2faq8 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq2-max-width {
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq2-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq2-text10 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          .faq2-text11 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          .faq2-link {
            align-self: flex-start;
            text-decoration: none;
          }
          .faq2-list-item1 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq2-faq1-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq2-list-item2 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq2-faq2-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq2-list-item3 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq2-faq3-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq2-list-item4 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq2-faq4-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq2-list-item5 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq2-faq5-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq2-text12 {
            display: inline-block;
          }
          .faq2-text13 {
            display: inline-block;
          }
          .faq2-text14 {
            display: inline-block;
          }
          .faq2-text15 {
            display: inline-block;
          }
          .faq2-text16 {
            display: inline-block;
          }
          .faq2-text17 {
            display: inline-block;
          }
          .faq2-text18 {
            display: inline-block;
          }
          .faq2-text19 {
            display: inline-block;
          }
          .faq2-text20 {
            display: inline-block;
          }
          .faq2-text21 {
            display: inline-block;
          }
          .faq2-text22 {
            display: inline-block;
          }
          .faq2-text23 {
            display: inline-block;
          }
          .faq2-text24 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .faq2-container {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .faq2faq8 {
              padding: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .faq2faq8 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .faq2-link {
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

FAQ2.defaultProps = {
  action: undefined,
  heading1: undefined,
  faq5Answer: undefined,
  faq2Answer: undefined,
  faq2Question: undefined,
  faq1Question: undefined,
  faq4Question: undefined,
  content1: undefined,
  faq3Answer: undefined,
  faq4Answer: undefined,
  faq3Question: undefined,
  faq5Question: undefined,
  faq1Answer: undefined,
}

FAQ2.propTypes = {
  action: PropTypes.element,
  heading1: PropTypes.element,
  faq5Answer: PropTypes.element,
  faq2Answer: PropTypes.element,
  faq2Question: PropTypes.element,
  faq1Question: PropTypes.element,
  faq4Question: PropTypes.element,
  content1: PropTypes.element,
  faq3Answer: PropTypes.element,
  faq4Answer: PropTypes.element,
  faq3Question: PropTypes.element,
  faq5Question: PropTypes.element,
  faq1Answer: PropTypes.element,
}

export default FAQ2
