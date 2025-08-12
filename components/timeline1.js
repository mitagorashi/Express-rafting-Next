import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Timeline1 = (props) => {
  const translate = useTranslations()
  const [container0, setContainer0] = useState(true)
  const [step2, setStep2] = useState(false)
  const [container3, setContainer3] = useState(false)
  const [step1, setStep1] = useState(false)
  const [step0, setStep0] = useState(true)
  const [step3, setStep3] = useState(false)
  const [container2, setContainer2] = useState(false)
  const [container1, setContainer1] = useState(false)
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline1-max-width thq-section-max-width">
          <div className="timeline1-timeline">
            <div className="timeline1-progress0"></div>
            <div
              onClick={() => {
                setContainer2(false)
                setContainer1(false)
                setContainer0(true)
                setStep3(false)
                setStep0(true)
                setStep1(false)
                setContainer3(false)
                setStep2(false)
              }}
              className="timeline1-step0"
            >
              <h3 className="thq-heading-3">
                {props.date1 ?? (
                  <Fragment>
                    <span className="timeline1-text38">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_KqvNMr'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <div className="timeline1-container11"></div>
            </div>
            {step1 === false && <div className="timeline1-container12"></div>}
            {step1 === true && <div className="timeline1-container13"></div>}
            {step1 === true && (
              <div
                onClick={() => {
                  setContainer0(false)
                  setContainer3(false)
                  setContainer1(true)
                  setStep2(false)
                  setStep1(true)
                  setContainer2(false)
                  setStep3(false)
                }}
                className="timeline1-container14"
              >
                <span className="timeline1-text11 thq-body-small">
                  {props.date2 ?? (
                    <Fragment>
                      <span className="timeline1-text49">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_8d9eyG'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container15"></div>
              </div>
            )}
            {step1 === false && (
              <div
                onClick={() => {
                  setContainer2(false)
                  setContainer3(false)
                  setStep2(false)
                  setStep1(true)
                  setContainer1(true)
                  setStep3(false)
                  setStep0(true)
                  setContainer0(false)
                }}
                className="timeline1-container16"
              >
                {container0 === true && (
                  <span className="timeline1-text12 thq-body-small">
                    {props.date2 ?? (
                      <Fragment>
                        <span className="timeline1-text49">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_8d9eyG'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                )}
                <div className="timeline1-container17"></div>
              </div>
            )}
            {step2 === false && <div className="timeline1-container18"></div>}
            {step2 === true && <div className="timeline1-container19"></div>}
            {step2 === false && (
              <div
                onClick={() => {
                  setStep0(true)
                  setStep3(false)
                  setContainer1(false)
                  setContainer0(false)
                  setContainer2(true)
                  setStep1(true)
                  setStep2(true)
                  setContainer3(false)
                }}
                className="timeline1-container20"
              >
                <span className="timeline1-text13 thq-body-small">
                  {props.date3 ?? (
                    <Fragment>
                      <span className="timeline1-text50">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_3AHhxo'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container21"></div>
              </div>
            )}
            {step2 === true && (
              <div
                onClick={() => {
                  setContainer1(false)
                  setContainer3(false)
                  setContainer2(true)
                  setStep3(false)
                  setContainer0(false)
                }}
                className="timeline1-container22"
              >
                <span className="timeline1-text14 thq-body-small">
                  {props.date3 ?? (
                    <Fragment>
                      <span className="timeline1-text50">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_3AHhxo'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container23"></div>
              </div>
            )}
            {step3 === false && <div className="timeline1-container24"></div>}
            {step3 === true && <div className="timeline1-container25"></div>}
            {step3 === false && (
              <div
                onClick={() => {
                  setStep3(true)
                  setStep1(true)
                  setStep0(true)
                  setContainer0(false)
                  setContainer2(false)
                  setContainer3(true)
                  setContainer1(false)
                  setStep2(true)
                }}
                className="timeline1-container26"
              >
                <span className="timeline1-text15 thq-body-small">
                  {props.date4 ?? (
                    <Fragment>
                      <span className="timeline1-text41">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_16RQoG'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container27"></div>
              </div>
            )}
            {step3 === true && (
              <div className="timeline1-container28">
                <span className="timeline1-text16 thq-body-small">
                  {props.date4 ?? (
                    <Fragment>
                      <span className="timeline1-text41">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_16RQoG'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container29"></div>
              </div>
            )}
            {step3 === false && <div className="timeline1-container30"></div>}
            {step3 === true && <div className="timeline1-container31"></div>}
          </div>
          {container0 === true && (
            <div className="timeline1-container32">
              <div className="timeline1-content-container1 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.date1 ?? (
                    <Fragment>
                      <span className="timeline1-text38">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_KqvNMr'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="thq-heading-3">
                  {props.card1Title ?? (
                    <Fragment>
                      <span className="timeline1-text42">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_itM2bT'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card1Content ?? (
                    <Fragment>
                      <span className="timeline1-text51">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Tf0jjh'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container33">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card1Action1 ?? (
                        <Fragment>
                          <span className="timeline1-text43">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_eUJwr_'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card1Action2 ?? (
                        <Fragment>
                          <span className="timeline1-text54">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_7pAjPH'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <img
                alt={props.card1ImageAlt}
                src={props.card1ImageSrc}
                className="timeline1-image1 thq-img-ratio-1-1"
              />
            </div>
          )}
          {container1 === true && (
            <div className="timeline1-container34">
              <div className="timeline1-content-container2 thq-flex-column">
                <span className="timeline1-text22 thq-body-small">
                  {props.date2 ?? (
                    <Fragment>
                      <span className="timeline1-text49">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_8d9eyG'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <h3 className="thq-heading-3">
                  {props.card2Title ?? (
                    <Fragment>
                      <span className="timeline1-text48">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_tH-K9J'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card2Content ?? (
                    <Fragment>
                      <span className="timeline1-text39">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_bDE6i9'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container35">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card2Action1 ?? (
                        <Fragment>
                          <span className="timeline1-text44">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_AqFdk2'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card2Action2 ?? (
                        <Fragment>
                          <span className="timeline1-text46">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_gGsVIr'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <img
                alt={props.card2ImageAlt}
                src={props.card2ImageSrc}
                className="timeline1-image2 thq-img-ratio-1-1"
              />
            </div>
          )}
          {container2 === true && (
            <div className="timeline1-container36">
              <div className="timeline1-content-container3 thq-flex-column">
                <span className="timeline1-text27 thq-body-small">
                  {props.date3 ?? (
                    <Fragment>
                      <span className="timeline1-text50">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_3AHhxo'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <h3 className="thq-heading-3">
                  {props.card3Title ?? (
                    <Fragment>
                      <span className="timeline1-text56">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_rd1Tk6'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card3Content ?? (
                    <Fragment>
                      <span className="timeline1-text55">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_jqR7Q1'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container37">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card3Action1 ?? (
                        <Fragment>
                          <span className="timeline1-text53">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_UqrBiD'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card3Action2 ?? (
                        <Fragment>
                          <span className="timeline1-text47">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_FMTtAa'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <img
                alt={props.card3ImageAlt}
                src={props.card3ImageSrc}
                className="timeline1-image3 thq-img-ratio-1-1"
              />
            </div>
          )}
          {container3 === true && (
            <div className="timeline1-container38">
              <div className="timeline1-content-container4 thq-flex-column">
                <span className="timeline1-text32 thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_dv2-wW'),
                    }}
                  ></span>
                </span>
                <h3 className="thq-heading-3">
                  {props.card4Title ?? (
                    <Fragment>
                      <span className="timeline1-text37">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_pGcJQ-'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card4Content ?? (
                    <Fragment>
                      <span className="timeline1-text40">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_4PSwgg'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container39">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card4Action1 ?? (
                        <Fragment>
                          <span className="timeline1-text45">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_ZVXFv0'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card4Action2 ?? (
                        <Fragment>
                          <span className="timeline1-text52">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_wE0cGC'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <img
                alt={props.card4ImageAlt}
                src={props.card4ImageSrc}
                className="timeline1-image4 thq-img-ratio-1-1"
              />
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .timeline1-max-width {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-timeline {
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
          }
          .timeline1-progress0 {
            flex: 0 0 auto;
            width: 5%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-step0 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-container11 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container12 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container13 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container14 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-text11 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container15 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container16 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-text12 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container17 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container18 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container19 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container20 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-text13 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container21 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container22 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-text14 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container23 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container24 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container25 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container26 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-text15 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container27 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container28 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-text16 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container29 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container30 {
            flex: 0 0 auto;
            width: 5%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container31 {
            flex: 0 0 auto;
            width: 5%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container32 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline1-content-container1 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline1-container33 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline1-image1 {
            flex: 1;
            max-width: auto;
          }
          .timeline1-container34 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline1-content-container2 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline1-text22 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container35 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline1-image2 {
            flex: 1;
            max-width: auto;
          }
          .timeline1-container36 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline1-content-container3 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline1-text27 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container37 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline1-image3 {
            flex: 1;
            max-width: auto;
          }
          .timeline1-container38 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline1-content-container4 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline1-text32 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container39 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline1-image4 {
            flex: 1;
            max-width: auto;
          }
          .timeline1-text37 {
            display: inline-block;
          }
          .timeline1-text38 {
            display: inline-block;
          }
          .timeline1-text39 {
            display: inline-block;
          }
          .timeline1-text40 {
            display: inline-block;
          }
          .timeline1-text41 {
            display: inline-block;
          }
          .timeline1-text42 {
            display: inline-block;
          }
          .timeline1-text43 {
            display: inline-block;
          }
          .timeline1-text44 {
            display: inline-block;
          }
          .timeline1-text45 {
            display: inline-block;
          }
          .timeline1-text46 {
            display: inline-block;
          }
          .timeline1-text47 {
            display: inline-block;
          }
          .timeline1-text48 {
            display: inline-block;
          }
          .timeline1-text49 {
            display: inline-block;
          }
          .timeline1-text50 {
            display: inline-block;
          }
          .timeline1-text51 {
            display: inline-block;
          }
          .timeline1-text52 {
            display: inline-block;
          }
          .timeline1-text53 {
            display: inline-block;
          }
          .timeline1-text54 {
            display: inline-block;
          }
          .timeline1-text55 {
            display: inline-block;
          }
          .timeline1-text56 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .timeline1-container32 {
              flex-direction: column;
            }
            .timeline1-container34 {
              flex-direction: column;
            }
            .timeline1-container36 {
              flex-direction: column;
            }
            .timeline1-container38 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .timeline1-max-width {
              gap: 0;
            }
            .timeline1-container32 {
              gap: var(--dl-layout-space-twounits);
            }
            .timeline1-container34 {
              gap: var(--dl-layout-space-twounits);
            }
            .timeline1-container36 {
              gap: var(--dl-layout-space-twounits);
            }
            .timeline1-container38 {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .timeline1-progress0 {
              display: none;
            }
            .timeline1-container30 {
              display: none;
            }
            .timeline1-container31 {
              display: none;
            }
            .timeline1-container32 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline1-container33 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline1-container34 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline1-container36 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline1-container38 {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Timeline1.defaultProps = {
  card4Title: undefined,
  date1: undefined,
  card2Content: undefined,
  card4ImageSrc:
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGFic3RyYWN0fGVufDB8fHx8MTcxMzg2NDA1MHww&ixlib=rb-4.0.3&w=200',
  card4Content: undefined,
  date4: undefined,
  card1Title: undefined,
  card1Action1: undefined,
  card4ImageAlt: 'Image for Global Expansion',
  card2Action1: undefined,
  card4Action1: undefined,
  card2Action2: undefined,
  card3Action2: undefined,
  card2Title: undefined,
  card1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=200',
  card1ImageAlt: 'Image for Company Founded',
  date2: undefined,
  card2ImageAlt: 'Image for Product Launch',
  date3: undefined,
  card3ImageAlt: 'Image for Partnership Established',
  card1Content: undefined,
  card4Action2: undefined,
  card3Action1: undefined,
  card1Action2: undefined,
  card2ImageSrc:
    'https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTM4NjQwNTB8MA&ixlib=rb-4.0.3&w=200',
  card3Content: undefined,
  card3Title: undefined,
  card3ImageSrc:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTM4NjQwNTB8MA&ixlib=rb-4.0.3&w=200',
}

Timeline1.propTypes = {
  card4Title: PropTypes.element,
  date1: PropTypes.element,
  card2Content: PropTypes.element,
  card4ImageSrc: PropTypes.string,
  card4Content: PropTypes.element,
  date4: PropTypes.element,
  card1Title: PropTypes.element,
  card1Action1: PropTypes.element,
  card4ImageAlt: PropTypes.string,
  card2Action1: PropTypes.element,
  card4Action1: PropTypes.element,
  card2Action2: PropTypes.element,
  card3Action2: PropTypes.element,
  card2Title: PropTypes.element,
  card1ImageSrc: PropTypes.string,
  card1ImageAlt: PropTypes.string,
  date2: PropTypes.element,
  card2ImageAlt: PropTypes.string,
  date3: PropTypes.element,
  card3ImageAlt: PropTypes.string,
  card1Content: PropTypes.element,
  card4Action2: PropTypes.element,
  card3Action1: PropTypes.element,
  card1Action2: PropTypes.element,
  card2ImageSrc: PropTypes.string,
  card3Content: PropTypes.element,
  card3Title: PropTypes.element,
  card3ImageSrc: PropTypes.string,
}

export default Timeline1
