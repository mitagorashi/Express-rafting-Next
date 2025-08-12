import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Team12 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="thq-section-padding">
        <div className="team12-max-width thq-section-max-width">
          <div className="team12-section-title">
            <span className="thq-body-small team12-text10">
              {props.content1 ?? (
                <Fragment>
                  <span className="team12-text47">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_5x7Kbb'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="team12-content10">
              <h2 className="thq-heading-2 team12-text11">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="team12-text55">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_9668wE'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large team12-text12">
                {props.content2 ?? (
                  <Fragment>
                    <span className="team12-text41">
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
          <div className="team12-content11">
            <div className="team12-content12">
              <div className="team12-row1">
                <div className="team12-container1">
                  <div className="team12-card1">
                    <img
                      alt={props.member1Alt}
                      src={props.member1Src}
                      className="team12-placeholder-image1 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team12-content13">
                      <div className="team12-title1">
                        <span className="team12-text13 thq-body-small">
                          {props.member1 ?? (
                            <Fragment>
                              <span className="team12-text54">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_GfYSCe'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team12-text14 thq-body-small">
                          {props.member1Job ?? (
                            <Fragment>
                              <span className="team12-text49">
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
                      <span className="team12-text15 thq-body-small">
                        {props.member1Content ?? (
                          <Fragment>
                            <span className="team12-text65">
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
                    <div className="team12-social-icons1">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team12-card2">
                    <img
                      alt={props.member2Alt}
                      src={props.member2Src}
                      className="team12-placeholder-image2 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team12-content14">
                      <div className="team12-title2">
                        <span className="team12-text16 thq-body-small">
                          {props.member2 ?? (
                            <Fragment>
                              <span className="team12-text48">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_Yw1v3i'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team12-text17 thq-body-small">
                          {props.member2Job ?? (
                            <Fragment>
                              <span className="team12-text67">
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
                      <span className="team12-text18 thq-body-small">
                        {props.member2Content ?? (
                          <Fragment>
                            <span className="team12-text40">
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
                    <div className="team12-social-icons2">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="team12-container2">
                  <div className="team12-card3">
                    <img
                      alt={props.member3Alt}
                      src={props.member3Src}
                      className="team12-placeholder-image3 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team12-content15">
                      <div className="team12-title3">
                        <span className="team12-text19 thq-body-small">
                          {props.member3 ?? (
                            <Fragment>
                              <span className="team12-text61">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_Kv-S4x'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team12-text20 thq-body-small">
                          {props.member3Job ?? (
                            <Fragment>
                              <span className="team12-text63">
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
                      <span className="team12-text21 thq-body-small">
                        {props.member3Content ?? (
                          <Fragment>
                            <span className="team12-text53">
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
                    <div className="team12-social-icons3">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team12-card4">
                    <img
                      alt={props.member4Alt}
                      src={props.member4Src}
                      className="team12-placeholder-image4 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team12-content16">
                      <div className="team12-title4">
                        <span className="team12-text22 thq-body-small">
                          {props.member4 ?? (
                            <Fragment>
                              <span className="team12-text46">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text__PFyFt'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team12-text23 thq-body-small">
                          {props.member4Job ?? (
                            <Fragment>
                              <span className="team12-text64">
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
                      <span className="team12-text24 thq-body-small">
                        {props.member4Content ?? (
                          <Fragment>
                            <span className="team12-text58">
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
                    <div className="team12-social-icons4">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team12-row2">
                <div className="team12-container3">
                  <div className="team12-card5">
                    <img
                      alt={props.member5Alt}
                      src={props.member5Src}
                      className="team12-placeholder-image5 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team12-content17">
                      <div className="team12-title5">
                        <span className="team12-text25 thq-body-small">
                          {props.member5 ?? (
                            <Fragment>
                              <span className="team12-text44">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_WIFscz'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team12-text26 thq-body-small">
                          {props.member5Job ?? (
                            <Fragment>
                              <span className="team12-text59">
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
                      <span className="team12-text27 thq-body-small">
                        {props.member5Content ?? (
                          <Fragment>
                            <span className="team12-text45">
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
                    <div className="team12-social-icons5">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team12-card6">
                    <img
                      alt={props.member6Alt}
                      src={props.member6Src}
                      className="team12-placeholder-image6 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team12-content18">
                      <div className="team12-title6">
                        <span className="team12-text28 thq-body-small">
                          {props.member6 ?? (
                            <Fragment>
                              <span className="team12-text56">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_epXbJ5'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team12-text29 thq-body-small">
                          {props.member6Job ?? (
                            <Fragment>
                              <span className="team12-text42">
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
                      <span className="team12-text30 thq-body-small">
                        {props.member6Content ?? (
                          <Fragment>
                            <span className="team12-text66">
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
                    <div className="team12-social-icons6">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="team12-container4">
                  <div className="team12-card7">
                    <img
                      alt={props.member7Alt}
                      src={props.member7Src}
                      className="team12-placeholder-image7 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team12-content19">
                      <div className="team12-title7">
                        <span className="team12-text31 thq-body-small">
                          {props.member7 ?? (
                            <Fragment>
                              <span className="team12-text57">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text__Ch1pd'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team12-text32 thq-body-small">
                          {props.member7Job ?? (
                            <Fragment>
                              <span className="team12-text51">
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
                      <span className="team12-text33 thq-body-small">
                        {props.member7Content ?? (
                          <Fragment>
                            <span className="team12-text60">
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
                    <div className="team12-social-icons7">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team12-card8">
                    <img
                      alt={props.member8Alt}
                      src={props.member8Src}
                      className="team12-placeholder-image8 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team12-content20">
                      <div className="team12-title8">
                        <span className="team12-text34 thq-body-small">
                          {props.member8 ?? (
                            <Fragment>
                              <span className="team12-text43">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_yHsMJH'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team12-text35 thq-body-small">
                          {props.member8Job ?? (
                            <Fragment>
                              <span className="team12-text52">
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
                      <span className="team12-text36 thq-body-small">
                        {props.member8Content ?? (
                          <Fragment>
                            <span className="team12-text69">
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
                    <div className="team12-social-icons8">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team12-content21">
              <div className="team12-content22">
                <h2 className="thq-heading-2 team12-text37">
                  {props.heading2 ?? (
                    <Fragment>
                      <span className="team12-text68">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_5Y1_9c'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small team12-text38">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="team12-text50">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_BPSGmo'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <button className="team12-button thq-button-filled">
                <span className="thq-body-small">
                  {props.actionContent ?? (
                    <Fragment>
                      <span className="team12-text62">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_PMuIJt'),
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
      </div>
      <style jsx>
        {`
          .team12-max-width {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .team12-section-title {
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team12-content10 {
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-content11 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-content12 {
            gap: 64px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team12-row1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team12-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team12-card1 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team12-placeholder-image1 {
            width: 80px;
            height: 80px;
          }
          .team12-content13 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-title1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-text13 {
            font-style: normal;
            font-weight: 600;
          }
          .team12-text14 {
            text-align: center;
          }
          .team12-text15 {
            text-align: center;
          }
          .team12-social-icons1 {
            display: flex;
            align-items: flex-start;
          }
          .team12-card2 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team12-placeholder-image2 {
            width: 80px;
            height: 80px;
          }
          .team12-content14 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-title2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-text16 {
            font-style: normal;
            font-weight: 600;
          }
          .team12-text17 {
            text-align: center;
          }
          .team12-text18 {
            text-align: center;
          }
          .team12-social-icons2 {
            display: flex;
            align-items: flex-start;
          }
          .team12-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team12-card3 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team12-placeholder-image3 {
            width: 80px;
            height: 80px;
          }
          .team12-content15 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-title3 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-text19 {
            font-style: normal;
            font-weight: 600;
          }
          .team12-text20 {
            text-align: center;
          }
          .team12-text21 {
            text-align: center;
          }
          .team12-social-icons3 {
            display: flex;
            align-items: flex-start;
          }
          .team12-card4 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team12-placeholder-image4 {
            width: 80px;
            height: 80px;
          }
          .team12-content16 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-title4 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-text22 {
            font-style: normal;
            font-weight: 600;
          }
          .team12-text23 {
            text-align: center;
          }
          .team12-text24 {
            text-align: center;
          }
          .team12-social-icons4 {
            display: flex;
            align-items: flex-start;
          }
          .team12-row2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team12-container3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team12-card5 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team12-placeholder-image5 {
            width: 80px;
            height: 80px;
          }
          .team12-content17 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-title5 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-text25 {
            font-style: normal;
            font-weight: 600;
          }
          .team12-text26 {
            text-align: center;
          }
          .team12-text27 {
            text-align: center;
          }
          .team12-social-icons5 {
            display: flex;
            align-items: flex-start;
          }
          .team12-card6 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team12-placeholder-image6 {
            width: 80px;
            height: 80px;
          }
          .team12-content18 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-title6 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-text28 {
            font-style: normal;
            font-weight: 600;
          }
          .team12-text29 {
            text-align: center;
          }
          .team12-text30 {
            text-align: center;
          }
          .team12-social-icons6 {
            display: flex;
            align-items: flex-start;
          }
          .team12-container4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team12-card7 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team12-placeholder-image7 {
            width: 80px;
            height: 80px;
          }
          .team12-content19 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-title7 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-text31 {
            font-style: normal;
            font-weight: 600;
          }
          .team12-text32 {
            text-align: center;
          }
          .team12-text33 {
            text-align: center;
          }
          .team12-social-icons7 {
            display: flex;
            align-items: flex-start;
          }
          .team12-card8 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team12-placeholder-image8 {
            width: 80px;
            height: 80px;
          }
          .team12-content20 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-title8 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team12-text34 {
            font-style: normal;
            font-weight: 600;
          }
          .team12-text35 {
            text-align: center;
          }
          .team12-text36 {
            text-align: center;
          }
          .team12-social-icons8 {
            display: flex;
            align-items: flex-start;
          }
          .team12-content21 {
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: column;
          }
          .team12-content22 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team12-button {
            width: 100%;
            max-width: 300px;
          }
          .team12-text40 {
            display: inline-block;
          }
          .team12-text41 {
            display: inline-block;
          }
          .team12-text42 {
            display: inline-block;
          }
          .team12-text43 {
            display: inline-block;
          }
          .team12-text44 {
            display: inline-block;
          }
          .team12-text45 {
            display: inline-block;
          }
          .team12-text46 {
            display: inline-block;
          }
          .team12-text47 {
            display: inline-block;
          }
          .team12-text48 {
            display: inline-block;
          }
          .team12-text49 {
            display: inline-block;
          }
          .team12-text50 {
            display: inline-block;
          }
          .team12-text51 {
            display: inline-block;
          }
          .team12-text52 {
            display: inline-block;
          }
          .team12-text53 {
            display: inline-block;
          }
          .team12-text54 {
            display: inline-block;
          }
          .team12-text55 {
            display: inline-block;
          }
          .team12-text56 {
            display: inline-block;
          }
          .team12-text57 {
            display: inline-block;
          }
          .team12-text58 {
            display: inline-block;
          }
          .team12-text59 {
            display: inline-block;
          }
          .team12-text60 {
            display: inline-block;
          }
          .team12-text61 {
            display: inline-block;
          }
          .team12-text62 {
            display: inline-block;
          }
          .team12-text63 {
            display: inline-block;
          }
          .team12-text64 {
            display: inline-block;
          }
          .team12-text65 {
            display: inline-block;
          }
          .team12-text66 {
            display: inline-block;
          }
          .team12-text67 {
            display: inline-block;
          }
          .team12-text68 {
            display: inline-block;
          }
          .team12-text69 {
            display: inline-block;
          }

          @media (max-width: 767px) {
            .team12-row1 {
              align-items: center;
              flex-direction: column;
            }
            .team12-row2 {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .team12-text10 {
              text-align: center;
            }
            .team12-text11 {
              text-align: center;
            }
            .team12-text12 {
              text-align: center;
            }
            .team12-container1 {
              flex-direction: column;
            }
            .team12-container2 {
              flex-direction: column;
            }
            .team12-container3 {
              flex-direction: column;
            }
            .team12-container4 {
              flex-direction: column;
            }
            .team12-text37 {
              text-align: center;
            }
            .team12-text38 {
              text-align: center;
            }
            .team12-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Team12.defaultProps = {
  member2Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=500',
  member1Src:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=500',
  member2Content: undefined,
  content2: undefined,
  member6Job: undefined,
  member8: undefined,
  member8Src:
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=500',
  member5: undefined,
  member5Content: undefined,
  member4: undefined,
  content1: undefined,
  member2: undefined,
  member1Job: undefined,
  member4Src:
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=500',
  content3: undefined,
  member7Job: undefined,
  member8Job: undefined,
  member8Alt: 'Member Alt',
  member3Src:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=500',
  member3Content: undefined,
  member1: undefined,
  heading1: undefined,
  member6: undefined,
  member3Alt: 'Image of Michael Johnson, COO',
  member7: undefined,
  member6Src:
    'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=500',
  member1Alt: 'Image of John Doe, CEO',
  member2Alt: 'Image of Jane Smith, CTO',
  member4Content: undefined,
  member5Job: undefined,
  member7Alt: 'Member Alt',
  member7Content: undefined,
  member3: undefined,
  member5Alt: 'Image of Alex Lee, CFO',
  actionContent: undefined,
  member3Job: undefined,
  member4Alt: 'Image of Emily Brown, CMO',
  member4Job: undefined,
  member5Src:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=500',
  member1Content: undefined,
  member6Content: undefined,
  member7Src:
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=500',
  member6Alt: 'Member Alt',
  member2Job: undefined,
  heading2: undefined,
  member8Content: undefined,
}

Team12.propTypes = {
  member2Src: PropTypes.string,
  member1Src: PropTypes.string,
  member2Content: PropTypes.element,
  content2: PropTypes.element,
  member6Job: PropTypes.element,
  member8: PropTypes.element,
  member8Src: PropTypes.string,
  member5: PropTypes.element,
  member5Content: PropTypes.element,
  member4: PropTypes.element,
  content1: PropTypes.element,
  member2: PropTypes.element,
  member1Job: PropTypes.element,
  member4Src: PropTypes.string,
  content3: PropTypes.element,
  member7Job: PropTypes.element,
  member8Job: PropTypes.element,
  member8Alt: PropTypes.string,
  member3Src: PropTypes.string,
  member3Content: PropTypes.element,
  member1: PropTypes.element,
  heading1: PropTypes.element,
  member6: PropTypes.element,
  member3Alt: PropTypes.string,
  member7: PropTypes.element,
  member6Src: PropTypes.string,
  member1Alt: PropTypes.string,
  member2Alt: PropTypes.string,
  member4Content: PropTypes.element,
  member5Job: PropTypes.element,
  member7Alt: PropTypes.string,
  member7Content: PropTypes.element,
  member3: PropTypes.element,
  member5Alt: PropTypes.string,
  actionContent: PropTypes.element,
  member3Job: PropTypes.element,
  member4Alt: PropTypes.string,
  member4Job: PropTypes.element,
  member5Src: PropTypes.string,
  member1Content: PropTypes.element,
  member6Content: PropTypes.element,
  member7Src: PropTypes.string,
  member6Alt: PropTypes.string,
  member2Job: PropTypes.element,
  heading2: PropTypes.element,
  member8Content: PropTypes.element,
}

export default Team12
