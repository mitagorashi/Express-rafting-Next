import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Steps11 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`steps11-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="steps11-max-width thq-section-max-width">
          <div className="steps11-container2">
            <div className="steps11-container3 thq-card">
              <img
                alt={props.step1ImageAlt}
                src={props.step1ImageSrc}
                className="steps11-image1 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps11-text25">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_4fmovX'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps11-text11 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps11-text26">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_8QfXux'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps11-text12 thq-heading-3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T7RGSw'),
                  }}
                ></span>
              </label>
            </div>
            <div className="steps11-container4 thq-card">
              <img
                alt={props.step2Alt}
                src={props.step2ImageSrc}
                className="steps11-image2 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps11-text24">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_kXRbyv'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps11-text14 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps11-text27">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_IFPMdL'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps11-text15 thq-heading-3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Lv1Ogo'),
                  }}
                ></span>
              </label>
            </div>
          </div>
          <div className="steps11-container5">
            <div className="steps11-container6 thq-card">
              <img
                alt={props.step3ImageAlt}
                src={props.step3ImageSrc}
                className="steps11-image3 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps11-text29">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text__v0QUO'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps11-text17 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps11-text23">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ghiboB'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps11-text18 thq-heading-3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bQIHbU'),
                  }}
                ></span>
              </label>
            </div>
            <div className="steps11-container7 thq-card">
              <img
                alt={props.step3ImageAlt1}
                src={props.step3ImageSrc1}
                className="steps11-image4 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">
                {props.step3Title1 ?? (
                  <Fragment>
                    <span className="steps11-text22">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_VOgibt'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps11-text20 thq-body-small">
                {props.step3Description1 ?? (
                  <Fragment>
                    <span className="steps11-text28">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_WwOrvr'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps11-text21 thq-heading-3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_scgAQB'),
                  }}
                ></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps11-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps11-max-width {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps11-container2 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps11-container3 {
            flex: 1;
            width: 215px;
            height: 360px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps11-image1 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps11-text11 {
            text-align: center;
          }
          .steps11-text12 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps11-container4 {
            width: 250px;
            height: 346px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps11-image2 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps11-text14 {
            text-align: center;
          }
          .steps11-text15 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps11-container5 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps11-container6 {
            width: 263px;
            height: 357px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps11-image3 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps11-text17 {
            text-align: center;
          }
          .steps11-text18 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps11-container7 {
            width: 261px;
            height: 357px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps11-image4 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps11-text20 {
            text-align: center;
          }
          .steps11-text21 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps11-text22 {
            display: inline-block;
          }
          .steps11-text23 {
            display: inline-block;
          }
          .steps11-text24 {
            display: inline-block;
          }
          .steps11-text25 {
            display: inline-block;
          }
          .steps11-text26 {
            display: inline-block;
          }
          .steps11-text27 {
            display: inline-block;
          }
          .steps11-text28 {
            display: inline-block;
          }
          .steps11-text29 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .steps11-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps11-container2 {
              flex-direction: column;
            }
            .steps11-container3 {
              width: 100%;
            }
            .steps11-container4 {
              width: 100%;
            }
            .steps11-container5 {
              flex-direction: column;
            }
            .steps11-container6 {
              width: 100%;
            }
            .steps11-container7 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps11.defaultProps = {
  step3Title1: undefined,
  step3ImageAlt1: 'Order Image',
  step1ImageAlt: 'Discover Image',
  step3Description: undefined,
  step2ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  step2Title: undefined,
  step1Title: undefined,
  rootClassName: '',
  step1Description: undefined,
  step2Description: undefined,
  step3Description1: undefined,
  step1ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  step3ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  step2Alt: 'Choose Image',
  step3ImageAlt: 'Order Image',
  step3Title: undefined,
  step3ImageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Steps11.propTypes = {
  step3Title1: PropTypes.element,
  step3ImageAlt1: PropTypes.string,
  step1ImageAlt: PropTypes.string,
  step3Description: PropTypes.element,
  step2ImageSrc: PropTypes.string,
  step2Title: PropTypes.element,
  step1Title: PropTypes.element,
  rootClassName: PropTypes.string,
  step1Description: PropTypes.element,
  step2Description: PropTypes.element,
  step3Description1: PropTypes.element,
  step1ImageSrc: PropTypes.string,
  step3ImageSrc: PropTypes.string,
  step2Alt: PropTypes.string,
  step3ImageAlt: PropTypes.string,
  step3Title: PropTypes.element,
  step3ImageSrc1: PropTypes.string,
}

export default Steps11
