import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Team11 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`thq-section-padding ${props.rootClassName} `}>
        <div className="team11-max-width thq-section-max-width">
          <div className="team11-section-title">
            <div className="team11-content10">
              <h2 className="thq-heading-2 team11-text10">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="team11-text50">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_9668wE'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large team11-text11">
                {props.content2 ?? (
                  <Fragment>
                    <span className="team11-text47">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_pPnsbr'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="team11-content11">
            <div className="team11-content12">
              <div className="team11-row1">
                <div className="team11-container1">
                  <div className="team11-card1">
                    <img
                      alt={props.member1Alt}
                      src={props.member1Src}
                      className="team11-placeholder-image1 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team11-content13">
                      <div className="team11-title1">
                        <span className="team11-text12 thq-body-small">
                          {props.member1 ?? (
                            <Fragment>
                              <span className="team11-text46">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_GfYSCe'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team11-text13 thq-body-small">
                          {props.member1Job ?? (
                            <Fragment>
                              <span className="team11-text55">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_LR9jA7'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team11-text14 thq-body-small">
                        {props.member1Content ?? (
                          <Fragment>
                            <span className="team11-text51">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_4TgXI9'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team11-social-icons1"></div>
                  </div>
                  <div className="team11-card2">
                    <img
                      alt={props.member2Alt}
                      src={props.member2Src}
                      className="team11-placeholder-image2 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team11-content14">
                      <div className="team11-title2">
                        <span className="team11-text15 thq-body-small">
                          {props.member2 ?? (
                            <Fragment>
                              <span className="team11-text61">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_Yw1v3i'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team11-text16 thq-body-small">
                          {props.member2Job ?? (
                            <Fragment>
                              <span className="team11-text57">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_m8Sq4C'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team11-text17 thq-body-small">
                        {props.member2Content ?? (
                          <Fragment>
                            <span className="team11-text59">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_02yG6J'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team11-social-icons2"></div>
                  </div>
                </div>
                <div className="team11-container2">
                  <div className="team11-card3">
                    <img
                      alt={props.member3Alt}
                      src={props.member3Src}
                      className="team11-placeholder-image3 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team11-content15">
                      <div className="team11-title3">
                        <span className="team11-text18 thq-body-small">
                          {props.member3 ?? (
                            <Fragment>
                              <span className="team11-text52">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_Kv-S4x'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team11-text19 thq-body-small">
                          {props.member3Job ?? (
                            <Fragment>
                              <span className="team11-text56">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_c8PPqW'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team11-text20 thq-body-small">
                        {props.member3Content ?? (
                          <Fragment>
                            <span className="team11-text53">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_8GZ77m'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team11-social-icons3"></div>
                  </div>
                  <div className="team11-card4">
                    <img
                      alt={props.member4Alt}
                      src={props.member4Src}
                      className="team11-placeholder-image4 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team11-content16">
                      <div className="team11-title4">
                        <span className="team11-text21 thq-body-small">
                          {props.member4 ?? (
                            <Fragment>
                              <span className="team11-text38">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text__PFyFt'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team11-text22 thq-body-small">
                          {props.member4Job ?? (
                            <Fragment>
                              <span className="team11-text58">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_NNE_6A'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team11-text23 thq-body-small">
                        {props.member4Content ?? (
                          <Fragment>
                            <span className="team11-text37">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_ZoeFPO'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team11-social-icons4"></div>
                  </div>
                </div>
              </div>
              <div className="team11-row2">
                <div className="team11-container3">
                  <div className="team11-card5">
                    <img
                      alt={props.member5Alt}
                      src={props.member5Src}
                      className="team11-placeholder-image5 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team11-content17">
                      <div className="team11-title5">
                        <span className="team11-text24 thq-body-small">
                          {props.member5 ?? (
                            <Fragment>
                              <span className="team11-text39">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_WIFscz'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team11-text25 thq-body-small">
                          {props.member5Job ?? (
                            <Fragment>
                              <span className="team11-text60">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_gnDS3H'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team11-text26 thq-body-small">
                        {props.member5Content ?? (
                          <Fragment>
                            <span className="team11-text54">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_jkxWhP'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team11-social-icons5"></div>
                  </div>
                  <div className="team11-card6">
                    <img
                      alt={props.member6Alt}
                      src={props.member6Src}
                      className="team11-placeholder-image6 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team11-content18">
                      <div className="team11-title6">
                        <span className="team11-text27 thq-body-small">
                          {props.member6 ?? (
                            <Fragment>
                              <span className="team11-text48">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_epXbJ5'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team11-text28 thq-body-small">
                          {props.member6Job ?? (
                            <Fragment>
                              <span className="team11-text40">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_Tl7RCx'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team11-text29 thq-body-small">
                        {props.member6Content ?? (
                          <Fragment>
                            <span className="team11-text44">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_td7XCL'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team11-social-icons6"></div>
                  </div>
                </div>
                <div className="team11-container4">
                  <div className="team11-card7">
                    <img
                      alt={props.member7Alt}
                      src={props.member7Src}
                      className="team11-placeholder-image7 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team11-content19">
                      <div className="team11-title7">
                        <span className="team11-text30 thq-body-small">
                          {props.member7 ?? (
                            <Fragment>
                              <span className="team11-text42">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text__Ch1pd'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team11-text31 thq-body-small">
                          {props.member7Job ?? (
                            <Fragment>
                              <span className="team11-text45">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_j05Rjx'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team11-text32 thq-body-small">
                        {props.member7Content ?? (
                          <Fragment>
                            <span className="team11-text36">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_8lhdF8'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team11-social-icons7"></div>
                  </div>
                  <div className="team11-card8">
                    <img
                      alt={props.member8Alt}
                      src={props.member8Src}
                      className="team11-placeholder-image8 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team11-content20">
                      <div className="team11-title8">
                        <span className="team11-text33 thq-body-small">
                          {props.member8 ?? (
                            <Fragment>
                              <span className="team11-text41">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_yHsMJH'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team11-text34 thq-body-small">
                          {props.member8Job ?? (
                            <Fragment>
                              <span className="team11-text49">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_MNWaVe'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team11-text35 thq-body-small">
                        {props.member8Content ?? (
                          <Fragment>
                            <span className="team11-text43">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_zxQD1o'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team11-social-icons8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .team11-max-width {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .team11-section-title {
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team11-content10 {
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-content11 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-content12 {
            gap: 64px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team11-row1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team11-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team11-card1 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team11-placeholder-image1 {
            width: 80px;
            height: 80px;
          }
          .team11-content13 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-title1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-text12 {
            font-style: normal;
            font-weight: 600;
          }
          .team11-text13 {
            text-align: center;
          }
          .team11-text14 {
            text-align: center;
          }
          .team11-social-icons1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .team11-card2 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team11-placeholder-image2 {
            width: 80px;
            height: 80px;
          }
          .team11-content14 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-title2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-text15 {
            font-style: normal;
            font-weight: 600;
          }
          .team11-text16 {
            text-align: center;
          }
          .team11-text17 {
            text-align: center;
          }
          .team11-social-icons2 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .team11-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team11-card3 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team11-placeholder-image3 {
            width: 80px;
            height: 80px;
          }
          .team11-content15 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-title3 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-text18 {
            font-style: normal;
            font-weight: 600;
          }
          .team11-text19 {
            text-align: center;
          }
          .team11-text20 {
            text-align: center;
          }
          .team11-social-icons3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .team11-card4 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team11-placeholder-image4 {
            width: 80px;
            height: 80px;
          }
          .team11-content16 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-title4 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-text21 {
            font-style: normal;
            font-weight: 600;
          }
          .team11-text22 {
            text-align: center;
          }
          .team11-text23 {
            opacity: 1;
            text-align: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 0px;
            border-radius: var(--dl-layout-radius-radius4);
          }
          .team11-social-icons4 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .team11-row2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team11-container3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team11-card5 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team11-placeholder-image5 {
            width: 80px;
            height: 80px;
          }
          .team11-content17 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-title5 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-text24 {
            font-style: normal;
            font-weight: 600;
          }
          .team11-text25 {
            text-align: center;
          }
          .team11-text26 {
            text-align: center;
          }
          .team11-social-icons5 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .team11-card6 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team11-placeholder-image6 {
            width: 80px;
            height: 80px;
          }
          .team11-content18 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-title6 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-text27 {
            font-style: normal;
            font-weight: 600;
          }
          .team11-text28 {
            text-align: center;
          }
          .team11-text29 {
            text-align: center;
          }
          .team11-social-icons6 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .team11-container4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team11-card7 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team11-placeholder-image7 {
            width: 80px;
            height: 80px;
          }
          .team11-content19 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-title7 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-text30 {
            font-style: normal;
            font-weight: 600;
          }
          .team11-text31 {
            text-align: center;
          }
          .team11-text32 {
            text-align: center;
          }
          .team11-social-icons7 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .team11-card8 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team11-placeholder-image8 {
            width: 80px;
            height: 80px;
          }
          .team11-content20 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-title8 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team11-text33 {
            font-style: normal;
            font-weight: 600;
          }
          .team11-text34 {
            text-align: center;
          }
          .team11-text35 {
            text-align: center;
          }
          .team11-social-icons8 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .team11-text36 {
            display: inline-block;
          }
          .team11-text37 {
            display: inline-block;
          }
          .team11-text38 {
            display: inline-block;
          }
          .team11-text39 {
            display: inline-block;
          }
          .team11-text40 {
            display: inline-block;
          }
          .team11-text41 {
            display: inline-block;
          }
          .team11-text42 {
            display: inline-block;
          }
          .team11-text43 {
            display: inline-block;
          }
          .team11-text44 {
            display: inline-block;
          }
          .team11-text45 {
            display: inline-block;
          }
          .team11-text46 {
            display: inline-block;
          }
          .team11-text47 {
            display: inline-block;
          }
          .team11-text48 {
            display: inline-block;
          }
          .team11-text49 {
            display: inline-block;
          }
          .team11-text50 {
            display: inline-block;
          }
          .team11-text51 {
            display: inline-block;
          }
          .team11-text52 {
            display: inline-block;
          }
          .team11-text53 {
            display: inline-block;
          }
          .team11-text54 {
            display: inline-block;
          }
          .team11-text55 {
            display: inline-block;
          }
          .team11-text56 {
            display: inline-block;
          }
          .team11-text57 {
            display: inline-block;
          }
          .team11-text58 {
            display: inline-block;
          }
          .team11-text59 {
            display: inline-block;
          }
          .team11-text60 {
            display: inline-block;
          }
          .team11-text61 {
            display: inline-block;
          }
          .team11root-class-name {
            display: none;
          }

          @media (max-width: 767px) {
            .team11-row1 {
              align-items: center;
              flex-direction: column;
            }
            .team11-row2 {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .team11-text10 {
              text-align: center;
            }
            .team11-text11 {
              text-align: center;
            }
            .team11-container1 {
              flex-direction: column;
            }
            .team11-container2 {
              flex-direction: column;
            }
            .team11-container3 {
              flex-direction: column;
            }
            .team11-container4 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Team11.defaultProps = {
  member4Alt: 'Image of Emily Brown, CMO',
  member7Content: undefined,
  member7Alt: 'Member Alt',
  member4Content: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=500',
  member4: undefined,
  member5: undefined,
  member6Job: undefined,
  member6Src:
    'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=500',
  member5Src:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=500',
  member8: undefined,
  member7: undefined,
  member8Content: undefined,
  member7Src:
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=500',
  member6Alt: 'Member Alt',
  member8Src:
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=500',
  member6Content: undefined,
  member7Job: undefined,
  member1: undefined,
  content2: undefined,
  member3Alt: 'Image of Michael Johnson, COO',
  member1Src:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=500',
  member6: undefined,
  member8Job: undefined,
  heading1: undefined,
  member1Content: undefined,
  member3: undefined,
  member8Alt: 'Member Alt',
  member5Alt: 'Image of Alex Lee, CFO',
  member4Src:
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=500',
  member3Content: undefined,
  member1Alt: 'Image of John Doe, CEO',
  member3Src:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=500',
  member5Content: undefined,
  member1Job: undefined,
  member2Alt: 'Image of Jane Smith, CTO',
  member3Job: undefined,
  member2Job: undefined,
  member4Job: undefined,
  member2Content: undefined,
  member5Job: undefined,
  member2: undefined,
  rootClassName: '',
}

Team11.propTypes = {
  member4Alt: PropTypes.string,
  member7Content: PropTypes.element,
  member7Alt: PropTypes.string,
  member4Content: PropTypes.element,
  member2Src: PropTypes.string,
  member4: PropTypes.element,
  member5: PropTypes.element,
  member6Job: PropTypes.element,
  member6Src: PropTypes.string,
  member5Src: PropTypes.string,
  member8: PropTypes.element,
  member7: PropTypes.element,
  member8Content: PropTypes.element,
  member7Src: PropTypes.string,
  member6Alt: PropTypes.string,
  member8Src: PropTypes.string,
  member6Content: PropTypes.element,
  member7Job: PropTypes.element,
  member1: PropTypes.element,
  content2: PropTypes.element,
  member3Alt: PropTypes.string,
  member1Src: PropTypes.string,
  member6: PropTypes.element,
  member8Job: PropTypes.element,
  heading1: PropTypes.element,
  member1Content: PropTypes.element,
  member3: PropTypes.element,
  member8Alt: PropTypes.string,
  member5Alt: PropTypes.string,
  member4Src: PropTypes.string,
  member3Content: PropTypes.element,
  member1Alt: PropTypes.string,
  member3Src: PropTypes.string,
  member5Content: PropTypes.element,
  member1Job: PropTypes.element,
  member2Alt: PropTypes.string,
  member3Job: PropTypes.element,
  member2Job: PropTypes.element,
  member4Job: PropTypes.element,
  member2Content: PropTypes.element,
  member5Job: PropTypes.element,
  member2: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Team11
