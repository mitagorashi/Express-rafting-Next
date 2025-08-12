import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Steps21 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="steps21-container1 thq-section-padding">
        <div className="steps21-max-width thq-section-max-width">
          <div className="steps21-container2 thq-grid-2">
            <div className="steps21-section-header">
              <h2 className="thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1pfUnv'),
                  }}
                ></span>
              </h2>
              <p className="thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nLDyJW'),
                  }}
                ></span>
              </p>
              <div className="steps21-actions"></div>
            </div>
            <div className="steps21-container3">
              <div className="steps21-container4 thq-card">
                <span className="steps21-text12 thq-body-small">
                  {props.step1Description ?? (
                    <Fragment>
                      <span className="steps21-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_6uQGWg'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps21-text13 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_sqGxQ2'),
                    }}
                  ></span>
                </label>
              </div>
              <div className="steps21-container5 thq-card">
                <span className="steps21-text14 thq-body-small">
                  {props.step2Description ?? (
                    <Fragment>
                      <span className="steps21-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_7O_T8v'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps21-text15 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ku2Kg0'),
                    }}
                  ></span>
                </label>
              </div>
              <div className="steps21-container6 thq-card">
                <span className="steps21-text16 thq-body-small">
                  {props.step3Description ?? (
                    <Fragment>
                      <span className="steps21-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_KS9LcC'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps21-text17 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_dgoENI'),
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
          .steps21-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps21-max-width {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps21-container2 {
            align-items: start;
          }
          .steps21-section-header {
            gap: var(--dl-layout-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps21-actions {
            gap: var(--dl-layout-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .steps21-container3 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps21-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps21-text12 {
            text-align: center;
          }
          .steps21-text13 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps21-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps21-text14 {
            text-align: center;
          }
          .steps21-text15 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps21-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps21-text16 {
            text-align: center;
          }
          .steps21-text17 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps21-text18 {
            display: inline-block;
          }
          .steps21-text19 {
            display: inline-block;
          }
          .steps21-text20 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .steps21-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps21-section-header {
              position: static;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .steps21-actions {
              width: 100%;
              align-self: flex-start;
            }
            .steps21-container4 {
              width: 100%;
            }
            .steps21-container5 {
              width: 100%;
            }
            .steps21-container6 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps21.defaultProps = {
  step3Description: undefined,
  step2Description: undefined,
  step1Description: undefined,
}

Steps21.propTypes = {
  step3Description: PropTypes.element,
  step2Description: PropTypes.element,
  step1Description: PropTypes.element,
}

export default Steps21
