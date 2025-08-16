import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Steps1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="steps1-container10 thq-section-padding">
        <div className="steps1-max-width1 thq-section-max-width">
          <div className="steps1-container11">
            <div className="steps1-container12 thq-card">
              <img
                alt={props.step1ImageAlt}
                src={props.step1ImageSrc}
                className="steps1-image1 thq-img-ratio-1-1"
              />
              <h2 className="steps1-text10 thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps1-text49">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_dc65u4'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps1-text11 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps1-text46">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text__c0YYN'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps1-text12 thq-heading-3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_N3AO3x'),
                  }}
                ></span>
              </label>
            </div>
            <div className="steps1-container13 thq-card">
              <img
                alt={props.step1ImageAlt2}
                src={props.step1ImageSrc2}
                className="steps1-image2 thq-img-ratio-1-1"
              />
              <h2 className="steps1-text13 thq-heading-2">
                {props.step1Title2 ?? (
                  <Fragment>
                    <span className="steps1-text36">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_KkedLq'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps1-text14 thq-body-small">
                {props.step1Description2 ?? (
                  <Fragment>
                    <span className="steps1-text47">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_6Qw-PZ'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps1-text15 thq-heading-3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MLdy2y'),
                  }}
                ></span>
              </label>
            </div>
            <div className="steps1-container14 thq-card">
              <img
                alt={props.step2Alt}
                src={props.step2ImageSrc}
                className="steps1-image3 thq-img-ratio-1-1"
              />
              <h2 className="steps1-text16 thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps1-text41">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_RTHmrs'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps1-text17 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps1-text45">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_DRGJz3'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps1-text18 thq-heading-3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Pj9LJ5'),
                  }}
                ></span>
              </label>
            </div>
          </div>
          <div className="steps1-container15">
            <div className="steps1-container16 thq-card">
              <img
                alt={props.step4ImageAlt}
                src={props.step4ImageSrc}
                className="steps1-image4 thq-img-ratio-1-1"
              />
              <h2 className="steps1-text19 thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps1-text44">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Bo2cvq'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps1-text20 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps1-text42">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_EnXG66'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps1-text21 thq-heading-3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OlvAR7'),
                  }}
                ></span>
              </label>
            </div>
          </div>
        </div>
        <div className="steps1-max-width2 thq-section-max-width">
          <div className="steps1-container17">
            <div className="steps1-container18 thq-card">
              <img
                alt={props.step1ImageAlt1}
                src={props.step1ImageSrc1}
                className="steps1-image5 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">
                {props.step1Title1 ?? (
                  <Fragment>
                    <span className="steps1-text48">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_94Cz9y'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps1-text23 thq-body-small">
                {props.step1Description1 ?? (
                  <Fragment>
                    <span className="steps1-text40">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_9tNxZt'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps1-text24 thq-heading-3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Oe9RL1'),
                  }}
                ></span>
              </label>
            </div>
            <div className="steps1-container19 thq-card">
              <img
                alt={props.step3ImageAlt2}
                src={props.step3ImageSrc2}
                className="steps1-image6 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">
                {props.step3Title2 ?? (
                  <Fragment>
                    <span className="steps1-text43">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_nHLG1o'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps1-text26 thq-body-small">
                {props.step3Description2 ?? (
                  <Fragment>
                    <span className="steps1-text37">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_3qKSP_'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps1-text27 thq-heading-3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OzriyM'),
                  }}
                ></span>
              </label>
            </div>
            <div className="steps1-container20 thq-card">
              <img
                alt={props.step2Alt1}
                src={props.step2ImageSrc1}
                className="steps1-image7 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">
                {props.step2Title1 ?? (
                  <Fragment>
                    <span className="steps1-text35">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-nWZgR'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps1-text29 thq-body-small">
                {props.step2Description1 ?? (
                  <Fragment>
                    <span className="steps1-text39">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_KWoPJ_'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps1-text30 thq-heading-3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hqiuiJ'),
                  }}
                ></span>
              </label>
            </div>
          </div>
          <div className="steps1-container21">
            <div className="steps1-container22 thq-card">
              <img
                alt={props.step4ImageAlt1}
                src={props.step4ImageSrc1}
                className="steps1-image8 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">
                {props.step4Title1 ?? (
                  <Fragment>
                    <span className="steps1-text34">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_eejNIU'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps1-text32 thq-body-small">
                {props.step4Description1 ?? (
                  <Fragment>
                    <span className="steps1-text38">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_p8PhlK'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps1-text33 thq-heading-3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vpazvV'),
                  }}
                ></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps1-container10 {
            width: auto;
            height: 1195px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps1-max-width1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: 498px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps1-container11 {
            gap: var(--dl-layout-space-unit);
            width: 841px;
            height: 373px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps1-container12 {
            flex: 1;
            width: 250px;
            height: 480px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image1 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps1-text10 {
            width: 180px;
            height: 137px;
          }
          .steps1-text11 {
            text-align: center;
          }
          .steps1-text12 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps1-container13 {
            flex: 1;
            width: 250px;
            height: 480px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image2 {
            width: 140px;
            height: 140px;
          }
          .steps1-text13 {
            width: 228px;
            height: 137px;
          }
          .steps1-text14 {
            text-align: center;
          }
          .steps1-text15 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps1-container14 {
            flex: 1;
            width: 250px;
            height: 480px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image3 {
            width: 140px;
            height: 140px;
          }
          .steps1-text16 {
            width: 153px;
          }
          .steps1-text17 {
            text-align: center;
          }
          .steps1-text18 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps1-container15 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps1-container16 {
            width: 250px;
            height: 480px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image4 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps1-text19 {
            width: 156px;
          }
          .steps1-text20 {
            text-align: center;
          }
          .steps1-text21 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps1-max-width2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps1-container17 {
            gap: var(--dl-layout-space-unit);
            width: 841px;
            height: 465px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps1-container18 {
            flex: 1;
            width: 250px;
            height: 480px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image5 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps1-text23 {
            text-align: center;
          }
          .steps1-text24 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps1-container19 {
            flex: 1;
            width: 250px;
            height: 480px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image6 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps1-text26 {
            text-align: center;
          }
          .steps1-text27 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps1-container20 {
            flex: 1;
            width: 250px;
            height: 480px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image7 {
            width: 140px;
            height: 140px;
            margin-top: -64px;
          }
          .steps1-text29 {
            text-align: center;
          }
          .steps1-text30 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps1-container21 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps1-container22 {
            width: 250px;
            height: 480px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image8 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps1-text32 {
            text-align: center;
          }
          .steps1-text33 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps1-text34 {
            display: inline-block;
          }
          .steps1-text35 {
            display: inline-block;
          }
          .steps1-text36 {
            display: inline-block;
          }
          .steps1-text37 {
            display: inline-block;
          }
          .steps1-text38 {
            display: inline-block;
          }
          .steps1-text39 {
            display: inline-block;
          }
          .steps1-text40 {
            display: inline-block;
          }
          .steps1-text41 {
            display: inline-block;
          }
          .steps1-text42 {
            display: inline-block;
          }
          .steps1-text43 {
            display: inline-block;
          }
          .steps1-text44 {
            display: inline-block;
          }
          .steps1-text45 {
            display: inline-block;
          }
          .steps1-text46 {
            display: inline-block;
          }
          .steps1-text47 {
            display: inline-block;
          }
          .steps1-text48 {
            display: inline-block;
          }
          .steps1-text49 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .steps1-max-width1 {
              flex-direction: column;
            }
            .steps1-max-width2 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps1-container11 {
              flex-direction: column;
            }
            .steps1-container12 {
              width: 100%;
            }
            .steps1-container13 {
              width: 100%;
            }
            .steps1-container14 {
              width: 100%;
            }
            .steps1-container15 {
              flex-direction: column;
            }
            .steps1-container16 {
              width: 100%;
            }
            .steps1-container17 {
              flex-direction: column;
            }
            .steps1-container18 {
              width: 100%;
            }
            .steps1-container19 {
              width: 100%;
            }
            .steps1-container20 {
              width: 100%;
            }
            .steps1-container21 {
              flex-direction: column;
            }
            .steps1-container22 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps1.defaultProps = {
  step4Title1: undefined,
  step2Title1: undefined,
  step1Title2: undefined,
  step1ImageAlt2: 'Discover Image',
  step1ImageSrc: '/1.jpg',
  step2Alt1: 'Choose Image',
  step3Description2: undefined,
  step1ImageSrc1: '/extra-900w.jpg',
  step4Description1: undefined,
  step2Description1: undefined,
  step4ImageSrc: '/8-1400w.jpg',
  step3ImageSrc2:
    '/a2b6201d-7716-45c7-9ca5-b73771199aa5-min-min%20(1)-900w.jpg',
  step1Description1: undefined,
  step2Title: undefined,
  step4Description: undefined,
  step2ImageSrc1: '/9471d5f5-4c87-41e1-8970-2f7e7909b1bd-900w.jpg',
  step1ImageAlt1: 'Discover Image',
  step1ImageAlt: 'Discover Image',
  step3Title2: undefined,
  step4Title: undefined,
  step2Alt: 'Choose Image',
  step2Description: undefined,
  step2ImageSrc: '/external/screenshot%202025-08-09%20201330-900w.jpg',
  step4ImageAlt: 'Enjoy Image',
  step4ImageAlt1: 'Enjoy Image',
  step1ImageSrc2: '/13e626f8-5c96-4dae-a0b2-947295880a2d-900w.jpg',
  step4ImageSrc1: '/df7ad923-8e3e-4d42-9b89-c5a61b82e67e-1400w.jpg',
  step1Description: undefined,
  step1Description2: undefined,
  step1Title1: undefined,
  step1Title: undefined,
  step3ImageAlt2: 'Customize Image',
}

Steps1.propTypes = {
  step4Title1: PropTypes.element,
  step2Title1: PropTypes.element,
  step1Title2: PropTypes.element,
  step1ImageAlt2: PropTypes.string,
  step1ImageSrc: PropTypes.string,
  step2Alt1: PropTypes.string,
  step3Description2: PropTypes.element,
  step1ImageSrc1: PropTypes.string,
  step4Description1: PropTypes.element,
  step2Description1: PropTypes.element,
  step4ImageSrc: PropTypes.string,
  step3ImageSrc2: PropTypes.string,
  step1Description1: PropTypes.element,
  step2Title: PropTypes.element,
  step4Description: PropTypes.element,
  step2ImageSrc1: PropTypes.string,
  step1ImageAlt1: PropTypes.string,
  step1ImageAlt: PropTypes.string,
  step3Title2: PropTypes.element,
  step4Title: PropTypes.element,
  step2Alt: PropTypes.string,
  step2Description: PropTypes.element,
  step2ImageSrc: PropTypes.string,
  step4ImageAlt: PropTypes.string,
  step4ImageAlt1: PropTypes.string,
  step1ImageSrc2: PropTypes.string,
  step4ImageSrc1: PropTypes.string,
  step1Description: PropTypes.element,
  step1Description2: PropTypes.element,
  step1Title1: PropTypes.element,
  step1Title: PropTypes.element,
  step3ImageAlt2: PropTypes.string,
}

export default Steps1
