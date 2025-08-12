import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Pricing14 = (props) => {
  const translate = useTranslations()
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <>
      <div
        id={props.pricing14Id}
        className="pricing14-pricing231 thq-section-padding"
      >
        <div className="pricing14-max-width1 thq-section-max-width">
          <div className="pricing14-section-title">
            <span className="pricing14-text100 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="pricing14-text280">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_yEGTkY'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div id={props.contentId} className="pricing14-content">
              <h2 className="pricing14-text101 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="pricing14-text215">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_MGJ4J8'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="pricing14-text102 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="pricing14-text238">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_IXAFra'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="pricing14-tabs1">
            {isMonthly === false && (
              <button
                onClick={() => setIsMonthly(true)}
                className="pricing14-button10 thq-button-outline thq-button-animated"
              >
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Dmf7AD'),
                    }}
                  ></span>
                </span>
              </button>
            )}
            {isMonthly === false && (
              <button
                onClick={() => setIsMonthly(false)}
                className="pricing14-button11 thq-button-filled thq-button-animated"
              >
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Xs3FCJ'),
                    }}
                  ></span>
                </span>
              </button>
            )}
          </div>
          {isMonthly === true && (
            <div className="pricing14-container1">
              <div className="pricing14-column10 thq-card">
                <div className="pricing14-price10">
                  <div className="pricing14-price11">
                    <p className="pricing14-text105 thq-body-large">
                      {props.plan1 ?? (
                        <Fragment>
                          <span className="pricing14-text222">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Xz3IHU'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text106 thq-heading-3">
                      {props.plan1Price ?? (
                        <Fragment>
                          <span className="pricing14-text248">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_7AwBzw'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan1Yearly ?? (
                        <Fragment>
                          <span className="pricing14-text230">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_QK4_kE'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-list10">
                    <div className="pricing14-list-item10">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text249">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_D5lgD4'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item11">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text210">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_U-do_j'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item12">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature3 ?? (
                          <Fragment>
                            <span className="pricing14-text291">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_TX9cEv'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button12 thq-button-outline thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan1Action ?? (
                      <Fragment>
                        <span className="pricing14-text282">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_HTdo5V'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column11 thq-card">
                <div className="pricing14-price12">
                  <div className="pricing14-price13">
                    <p className="pricing14-text112 thq-body-large">
                      {props.plan2 ?? (
                        <Fragment>
                          <span className="pricing14-text251">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_eWoGo3'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text113 thq-heading-3">
                      {props.plan2Price ?? (
                        <Fragment>
                          <span className="pricing14-text246">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_82JDqh'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan2Yearly ?? (
                        <Fragment>
                          <span className="pricing14-text267">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Q4rGtf'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-list11">
                    <div className="pricing14-list-item13">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text256">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_SJf8es'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item14">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text294">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_IaHnES'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item15">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature3 ?? (
                          <Fragment>
                            <span className="pricing14-text228">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_RI2Diw'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item16">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature4 ?? (
                          <Fragment>
                            <span className="pricing14-text300">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_Qdp7QY'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button13 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan2Action ?? (
                      <Fragment>
                        <span className="pricing14-text204">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_wqpBbT'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column12 thq-card">
                <div className="pricing14-price14">
                  <div className="pricing14-price15">
                    <p className="pricing14-text120 thq-body-large">
                      {props.plan3 ?? (
                        <Fragment>
                          <span className="pricing14-text237">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_e6JGYX'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text121 thq-heading-3">
                      {props.plan3Price ?? (
                        <Fragment>
                          <span className="pricing14-text236">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_eMOFW0'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan3Yearly ?? (
                        <Fragment>
                          <span className="pricing14-text285">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text__10pUg'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-list12">
                    <div className="pricing14-list-item17">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text270">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_kMMFqu'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item18">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text208">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_tG86iP'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item19">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature3 ?? (
                          <Fragment>
                            <span className="pricing14-text212">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_gmTsrf'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item20">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature4 ?? (
                          <Fragment>
                            <span className="pricing14-text219">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_32F_ei'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item21">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature5 ?? (
                          <Fragment>
                            <span className="pricing14-text298">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_vcV7Wh'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button14 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan3Action ?? (
                      <Fragment>
                        <span className="pricing14-text255">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_szu8wl'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}
          {isMonthly === false && (
            <div className="pricing14-container2">
              <div className="pricing14-column13 thq-card">
                <div className="pricing14-price16">
                  <div className="pricing14-price17">
                    <span className="pricing14-text129 thq-body-large">
                      {props.plan11 ?? (
                        <Fragment>
                          <span className="pricing14-text244">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_KVETGH'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text130 thq-heading-3">
                      {props.plan1Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text258">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_hbTDP8'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan1Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text241">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_gH6NWn'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list13">
                    <div className="pricing14-list-item22">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text269">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_JiBia-'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item23">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text214">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_41LGqS'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item24">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text213">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_jcOrvt'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button15 thq-button-outline thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan1Action1 ?? (
                      <Fragment>
                        <span className="pricing14-text261">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_4IbhzZ'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column14 thq-card">
                <div className="pricing14-price18">
                  <div className="pricing14-price19">
                    <span className="pricing14-text136 thq-body-large">
                      {props.plan21 ?? (
                        <Fragment>
                          <span className="pricing14-text264">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_5_qXX_'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text137 thq-heading-3">
                      {props.plan2Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text265">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_kZBK8M'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan2Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text260">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_-hfgFZ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list14">
                    <div className="pricing14-list-item25">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text234">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_ItoUkI'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item26">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text281">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_wo5KZI'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item27">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text275">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_6cVYAC'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item28">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature41 ?? (
                          <Fragment>
                            <span className="pricing14-text254">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_MpOW0E'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button16 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan2Action1 ?? (
                      <Fragment>
                        <span className="pricing14-text259">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_i-PsAt'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column15 thq-card">
                <div className="pricing14-price20">
                  <div className="pricing14-price21">
                    <span className="pricing14-text144 thq-body-large">
                      {props.plan31 ?? (
                        <Fragment>
                          <span className="pricing14-text211">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_qtQz-z'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text145 thq-heading-3">
                      {props.plan3Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text293">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_xI9nX0'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan3Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text279">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Y2W1YL'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list15">
                    <div className="pricing14-list-item29">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text286">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_XRrlUV'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item30">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text221">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_Sd4c9l'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item31">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text292">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_hpvfIm'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item32">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature41 ?? (
                          <Fragment>
                            <span className="pricing14-text239">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_leKvPw'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item33">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature51 ?? (
                          <Fragment>
                            <span className="pricing14-text263">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_D3cgJP'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button17 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan3Action1 ?? (
                      <Fragment>
                        <span className="pricing14-text243">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_rfXN9D'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="pricing14-pricing232 thq-section-padding">
          <div className="pricing14-max-width2 thq-section-max-width">
            <div className="pricing14-tabs2">
              {isMonthly === false && (
                <button
                  onClick={() => setIsMonthly(true)}
                  className="pricing14-button18 thq-button-outline thq-button-animated"
                >
                  <span className="thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Yrv3r7'),
                      }}
                    ></span>
                  </span>
                </button>
              )}
              {isMonthly === false && (
                <button
                  onClick={() => setIsMonthly(false)}
                  className="pricing14-button19 thq-button-filled thq-button-animated"
                >
                  <span className="thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_DJDvsA'),
                      }}
                    ></span>
                  </span>
                </button>
              )}
            </div>
            {isMonthly === true && (
              <div className="pricing14-container3">
                <div className="pricing14-column16 thq-card">
                  <div className="pricing14-price22">
                    <div className="pricing14-price23">
                      <p className="pricing14-text155 thq-body-large">
                        {props.plan12 ?? (
                          <Fragment>
                            <span className="pricing14-text206">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_jphVV8'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </p>
                      <h3 className="pricing14-text156 thq-heading-3">
                        {props.plan1Price2 ?? (
                          <Fragment>
                            <span className="pricing14-text227">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_pGJ6lv'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <p className="thq-body-large">
                        {props.plan1Yearly2 ?? (
                          <Fragment>
                            <span className="pricing14-text273">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_C-7i_S'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </p>
                    </div>
                    <div className="pricing14-list16">
                      <div className="pricing14-list-item34">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan1Feature12 ?? (
                            <Fragment>
                              <span className="pricing14-text232">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_y4aZfQ'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item35">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan1Feature22 ?? (
                            <Fragment>
                              <span className="pricing14-text266">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_qa7hVx'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item36">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan1Feature32 ?? (
                            <Fragment>
                              <span className="pricing14-text272">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_IuYXcu'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="pricing14-button20 thq-button-outline thq-button-animated">
                    <span className="thq-body-small">
                      {props.plan1Action2 ?? (
                        <Fragment>
                          <span className="pricing14-text245">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_5ccr6f'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="pricing14-column17 thq-card">
                  <div className="pricing14-price24">
                    <div className="pricing14-price25">
                      <p className="pricing14-text162 thq-body-large">
                        {props.plan22 ?? (
                          <Fragment>
                            <span className="pricing14-text283">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_OH_NUl'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </p>
                      <h3 className="pricing14-text163 thq-heading-3">
                        {props.plan2Price2 ?? (
                          <Fragment>
                            <span className="pricing14-text257">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_bzQ9q2'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <p className="thq-body-large">
                        {props.plan2Yearly2 ?? (
                          <Fragment>
                            <span className="pricing14-text216">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_OGlakc'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </p>
                    </div>
                    <div className="pricing14-list17">
                      <div className="pricing14-list-item37">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan2Feature12 ?? (
                            <Fragment>
                              <span className="pricing14-text209">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_gHQII6'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item38">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan2Feature22 ?? (
                            <Fragment>
                              <span className="pricing14-text301">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_orM9MW'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item39">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan2Feature32 ?? (
                            <Fragment>
                              <span className="pricing14-text229">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_KUVrC8'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item40">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan2Feature42 ?? (
                            <Fragment>
                              <span className="pricing14-text233">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_th0ktq'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="pricing14-button21 thq-button-filled thq-button-animated">
                    <span className="thq-body-small">
                      {props.plan2Action2 ?? (
                        <Fragment>
                          <span className="pricing14-text288">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_NOwEEJ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="pricing14-column18 thq-card">
                  <div className="pricing14-price26">
                    <div className="pricing14-price27">
                      <p className="pricing14-text170 thq-body-large">
                        {props.plan32 ?? (
                          <Fragment>
                            <span className="pricing14-text223">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_wNbB5C'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </p>
                      <h3 className="pricing14-text171 thq-heading-3">
                        {props.plan3Price2 ?? (
                          <Fragment>
                            <span className="pricing14-text240">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_r8Ut4F'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <p className="thq-body-large">
                        {props.plan3Yearly2 ?? (
                          <Fragment>
                            <span className="pricing14-text296">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_oyUaaS'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </p>
                    </div>
                    <div className="pricing14-list18">
                      <div className="pricing14-list-item41">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan3Feature12 ?? (
                            <Fragment>
                              <span className="pricing14-text253">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_fxfoKz'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item42">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan3Feature22 ?? (
                            <Fragment>
                              <span className="pricing14-text225">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_RDh8N7'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item43">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan3Feature32 ?? (
                            <Fragment>
                              <span className="pricing14-text287">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_1kT7hH'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item44">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan3Feature42 ?? (
                            <Fragment>
                              <span className="pricing14-text297">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_d8Lf5G'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item45">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan3Feature52 ?? (
                            <Fragment>
                              <span className="pricing14-text276">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_RoeN3o'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="pricing14-button22 thq-button-filled thq-button-animated">
                    <span className="thq-body-small">
                      {props.plan3Action2 ?? (
                        <Fragment>
                          <span className="pricing14-text290">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_P46zaD'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            )}
            {isMonthly === false && (
              <div className="pricing14-container4">
                <div className="pricing14-column19 thq-card">
                  <div className="pricing14-price28">
                    <div className="pricing14-price29">
                      <span className="pricing14-text179 thq-body-large">
                        {props.plan111 ?? (
                          <Fragment>
                            <span className="pricing14-text252">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_5gf2Z7'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <h3 className="pricing14-text180 thq-heading-3">
                        {props.plan1Price11 ?? (
                          <Fragment>
                            <span className="pricing14-text231">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_geyTtN'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <span className="thq-body-large">
                        {props.plan1Yearly11 ?? (
                          <Fragment>
                            <span className="pricing14-text278">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_hL1d_0'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list19">
                      <div className="pricing14-list-item46">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan1Feature111 ?? (
                            <Fragment>
                              <span className="pricing14-text218">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_4slIpD'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item47">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan1Feature211 ?? (
                            <Fragment>
                              <span className="pricing14-text220">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_teKv7M'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item48">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan1Feature311 ?? (
                            <Fragment>
                              <span className="pricing14-text289">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_6E-hOc'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="pricing14-button23 thq-button-outline thq-button-animated">
                    <span className="thq-body-small">
                      {props.plan1Action11 ?? (
                        <Fragment>
                          <span className="pricing14-text274">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_e7IGEX'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="pricing14-column20 thq-card">
                  <div className="pricing14-price30">
                    <div className="pricing14-price31">
                      <span className="pricing14-text186 thq-body-large">
                        {props.plan211 ?? (
                          <Fragment>
                            <span className="pricing14-text277">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_yVrKAU'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <h3 className="pricing14-text187 thq-heading-3">
                        {props.plan2Price11 ?? (
                          <Fragment>
                            <span className="pricing14-text217">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_wi0mEE'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <span className="thq-body-large">
                        {props.plan2Yearly11 ?? (
                          <Fragment>
                            <span className="pricing14-text203">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_CKdXz2'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list20">
                      <div className="pricing14-list-item49">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan2Feature111 ?? (
                            <Fragment>
                              <span className="pricing14-text295">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_MkQ5_J'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item50">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan2Feature211 ?? (
                            <Fragment>
                              <span className="pricing14-text262">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_QmXmkt'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item51">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan2Feature311 ?? (
                            <Fragment>
                              <span className="pricing14-text268">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_eEsHtr'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item52">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan2Feature411 ?? (
                            <Fragment>
                              <span className="pricing14-text242">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_LoXl-k'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="pricing14-button24 thq-button-filled thq-button-animated">
                    <span className="thq-body-small">
                      {props.plan2Action11 ?? (
                        <Fragment>
                          <span className="pricing14-text250">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_RVPIip'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="pricing14-column21 thq-card">
                  <div className="pricing14-price32">
                    <div className="pricing14-price33">
                      <span className="pricing14-text194 thq-body-large">
                        {props.plan311 ?? (
                          <Fragment>
                            <span className="pricing14-text271">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_jtenw2'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <h3 className="pricing14-text195 thq-heading-3">
                        {props.plan3Price11 ?? (
                          <Fragment>
                            <span className="pricing14-text224">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_MjslOn'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <span className="thq-body-large">
                        {props.plan3Yearly11 ?? (
                          <Fragment>
                            <span className="pricing14-text235">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_goMr9Z'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list21">
                      <div className="pricing14-list-item53">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan3Feature111 ?? (
                            <Fragment>
                              <span className="pricing14-text226">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_41UqWM'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item54">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan3Feature211 ?? (
                            <Fragment>
                              <span className="pricing14-text284">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_8W__cr'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item55">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan3Feature311 ?? (
                            <Fragment>
                              <span className="pricing14-text299">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_YHUb1c'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item56">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan3Feature411 ?? (
                            <Fragment>
                              <span className="pricing14-text247">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_eSRQnr'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="pricing14-list-item57">
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="thq-body-small">
                          {props.plan3Feature511 ?? (
                            <Fragment>
                              <span className="pricing14-text207">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_hFmom0'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="pricing14-button25 thq-button-filled thq-button-animated">
                    <span className="thq-body-small">
                      {props.plan3Action11 ?? (
                        <Fragment>
                          <span className="pricing14-text205">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_DVJOkm'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .pricing14-pricing231 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing14-max-width1 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing14-text100 {
            text-align: center;
          }
          .pricing14-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text101 {
            text-align: center;
          }
          .pricing14-text102 {
            text-align: center;
          }
          .pricing14-tabs1 {
            display: flex;
            align-items: flex-start;
          }
          .pricing14-button10 {
            gap: var(--dl-layout-space-halfunit);
            width: 120px;
            height: 60px;
            border-style: solid;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .pricing14-button11 {
            gap: var(--dl-layout-space-halfunit);
            color: var(--dl-color-theme-neutral-light);
            width: 120px;
            height: 60px;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .pricing14-container1 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing14-column10 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing14-price10 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price11 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text105 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text106 {
            font-size: 48px;
          }
          .pricing14-list10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button12 {
            width: 100%;
          }
          .pricing14-column11 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing14-price12 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price13 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text112 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text113 {
            font-size: 48px;
          }
          .pricing14-list11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button13 {
            width: 100%;
          }
          .pricing14-column12 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing14-price14 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price15 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text120 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text121 {
            font-size: 48px;
          }
          .pricing14-list12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item21 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button14 {
            width: 100%;
          }
          .pricing14-container2 {
            gap: 32px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing14-column13 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing14-price16 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price17 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text129 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text130 {
            font-size: 48px;
          }
          .pricing14-list13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item24 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button15 {
            width: 100%;
          }
          .pricing14-column14 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing14-price18 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price19 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text136 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text137 {
            font-size: 48px;
          }
          .pricing14-list14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item25 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item26 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item27 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item28 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button16 {
            width: 100%;
          }
          .pricing14-column15 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing14-price20 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price21 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text144 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text145 {
            font-size: 48px;
          }
          .pricing14-list15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item29 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item30 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item31 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item32 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item33 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button17 {
            width: 100%;
          }
          .pricing14-pricing232 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing14-max-width2 {
            gap: var(--dl-layout-space-threeunits);
            width: 1519px;
            height: 651px;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 0px;
            flex-direction: column;
          }
          .pricing14-tabs2 {
            display: flex;
            align-items: flex-start;
          }
          .pricing14-button18 {
            gap: var(--dl-layout-space-halfunit);
            width: 120px;
            height: 60px;
            border-style: solid;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .pricing14-button19 {
            gap: var(--dl-layout-space-halfunit);
            color: var(--dl-color-theme-neutral-light);
            width: 120px;
            height: 60px;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .pricing14-container3 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing14-column16 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing14-price22 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price23 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text155 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text156 {
            font-size: 48px;
          }
          .pricing14-list16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item34 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item35 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item36 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button20 {
            width: 100%;
          }
          .pricing14-column17 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing14-price24 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price25 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text162 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text163 {
            font-size: 48px;
          }
          .pricing14-list17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item37 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item38 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item39 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item40 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button21 {
            width: 100%;
          }
          .pricing14-column18 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing14-price26 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price27 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text170 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text171 {
            font-size: 48px;
          }
          .pricing14-list18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item41 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item42 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item43 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item44 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item45 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button22 {
            width: 100%;
          }
          .pricing14-container4 {
            gap: 32px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing14-column19 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing14-price28 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price29 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text179 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text180 {
            font-size: 48px;
          }
          .pricing14-list19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item46 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item47 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item48 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button23 {
            width: 100%;
          }
          .pricing14-column20 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing14-price30 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price31 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text186 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text187 {
            font-size: 48px;
          }
          .pricing14-list20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item49 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item50 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item51 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item52 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button24 {
            width: 100%;
          }
          .pricing14-column21 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing14-price32 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price33 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text194 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text195 {
            font-size: 48px;
          }
          .pricing14-list21 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item53 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item54 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item55 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item56 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item57 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button25 {
            width: 100%;
          }
          .pricing14-text203 {
            display: inline-block;
          }
          .pricing14-text204 {
            display: inline-block;
          }
          .pricing14-text205 {
            display: inline-block;
          }
          .pricing14-text206 {
            display: inline-block;
          }
          .pricing14-text207 {
            display: inline-block;
          }
          .pricing14-text208 {
            display: inline-block;
          }
          .pricing14-text209 {
            display: inline-block;
          }
          .pricing14-text210 {
            display: inline-block;
          }
          .pricing14-text211 {
            display: inline-block;
          }
          .pricing14-text212 {
            display: inline-block;
          }
          .pricing14-text213 {
            display: inline-block;
          }
          .pricing14-text214 {
            display: inline-block;
          }
          .pricing14-text215 {
            display: inline-block;
          }
          .pricing14-text216 {
            display: inline-block;
          }
          .pricing14-text217 {
            display: inline-block;
          }
          .pricing14-text218 {
            display: inline-block;
          }
          .pricing14-text219 {
            display: inline-block;
          }
          .pricing14-text220 {
            display: inline-block;
          }
          .pricing14-text221 {
            display: inline-block;
          }
          .pricing14-text222 {
            display: inline-block;
          }
          .pricing14-text223 {
            display: inline-block;
          }
          .pricing14-text224 {
            display: inline-block;
          }
          .pricing14-text225 {
            display: inline-block;
          }
          .pricing14-text226 {
            display: inline-block;
          }
          .pricing14-text227 {
            display: inline-block;
          }
          .pricing14-text228 {
            display: inline-block;
          }
          .pricing14-text229 {
            display: inline-block;
          }
          .pricing14-text230 {
            display: inline-block;
          }
          .pricing14-text231 {
            display: inline-block;
          }
          .pricing14-text232 {
            display: inline-block;
          }
          .pricing14-text233 {
            display: inline-block;
          }
          .pricing14-text234 {
            display: inline-block;
          }
          .pricing14-text235 {
            display: inline-block;
          }
          .pricing14-text236 {
            display: inline-block;
          }
          .pricing14-text237 {
            display: inline-block;
          }
          .pricing14-text238 {
            display: inline-block;
          }
          .pricing14-text239 {
            display: inline-block;
          }
          .pricing14-text240 {
            display: inline-block;
          }
          .pricing14-text241 {
            display: inline-block;
          }
          .pricing14-text242 {
            display: inline-block;
          }
          .pricing14-text243 {
            display: inline-block;
          }
          .pricing14-text244 {
            display: inline-block;
          }
          .pricing14-text245 {
            display: inline-block;
          }
          .pricing14-text246 {
            display: inline-block;
          }
          .pricing14-text247 {
            display: inline-block;
          }
          .pricing14-text248 {
            display: inline-block;
          }
          .pricing14-text249 {
            display: inline-block;
          }
          .pricing14-text250 {
            display: inline-block;
          }
          .pricing14-text251 {
            display: inline-block;
          }
          .pricing14-text252 {
            display: inline-block;
          }
          .pricing14-text253 {
            display: inline-block;
          }
          .pricing14-text254 {
            display: inline-block;
          }
          .pricing14-text255 {
            display: inline-block;
          }
          .pricing14-text256 {
            display: inline-block;
          }
          .pricing14-text257 {
            display: inline-block;
          }
          .pricing14-text258 {
            display: inline-block;
          }
          .pricing14-text259 {
            display: inline-block;
          }
          .pricing14-text260 {
            display: inline-block;
          }
          .pricing14-text261 {
            display: inline-block;
          }
          .pricing14-text262 {
            display: inline-block;
          }
          .pricing14-text263 {
            display: inline-block;
          }
          .pricing14-text264 {
            display: inline-block;
          }
          .pricing14-text265 {
            display: inline-block;
          }
          .pricing14-text266 {
            display: inline-block;
          }
          .pricing14-text267 {
            display: inline-block;
          }
          .pricing14-text268 {
            display: inline-block;
          }
          .pricing14-text269 {
            display: inline-block;
          }
          .pricing14-text270 {
            display: inline-block;
          }
          .pricing14-text271 {
            display: inline-block;
          }
          .pricing14-text272 {
            display: inline-block;
          }
          .pricing14-text273 {
            display: inline-block;
          }
          .pricing14-text274 {
            display: inline-block;
          }
          .pricing14-text275 {
            display: inline-block;
          }
          .pricing14-text276 {
            display: inline-block;
          }
          .pricing14-text277 {
            display: inline-block;
          }
          .pricing14-text278 {
            display: inline-block;
          }
          .pricing14-text279 {
            display: inline-block;
          }
          .pricing14-text280 {
            display: inline-block;
          }
          .pricing14-text281 {
            display: inline-block;
          }
          .pricing14-text282 {
            display: inline-block;
          }
          .pricing14-text283 {
            display: inline-block;
          }
          .pricing14-text284 {
            display: inline-block;
          }
          .pricing14-text285 {
            display: inline-block;
          }
          .pricing14-text286 {
            display: inline-block;
          }
          .pricing14-text287 {
            display: inline-block;
          }
          .pricing14-text288 {
            display: inline-block;
          }
          .pricing14-text289 {
            display: inline-block;
          }
          .pricing14-text290 {
            display: inline-block;
          }
          .pricing14-text291 {
            display: inline-block;
          }
          .pricing14-text292 {
            display: inline-block;
          }
          .pricing14-text293 {
            display: inline-block;
          }
          .pricing14-text294 {
            display: inline-block;
          }
          .pricing14-text295 {
            display: inline-block;
          }
          .pricing14-text296 {
            display: inline-block;
          }
          .pricing14-text297 {
            display: inline-block;
          }
          .pricing14-text298 {
            display: inline-block;
          }
          .pricing14-text299 {
            display: inline-block;
          }
          .pricing14-text300 {
            display: inline-block;
          }
          .pricing14-text301 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .pricing14-container1 {
              flex-direction: column;
            }
            .pricing14-column12 {
              width: 100%;
            }
            .pricing14-container2 {
              flex-direction: column;
            }
            .pricing14-column15 {
              width: 100%;
            }
            .pricing14-container3 {
              flex-direction: column;
            }
            .pricing14-column18 {
              width: 100%;
            }
            .pricing14-container4 {
              flex-direction: column;
            }
            .pricing14-column21 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .pricing14-max-width1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .pricing14-max-width2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Pricing14.defaultProps = {
  plan2Yearly11: undefined,
  plan2Action: undefined,
  plan3Action11: undefined,
  plan12: undefined,
  plan3Feature511: undefined,
  plan3Feature2: undefined,
  plan2Feature12: undefined,
  plan1Feature2: undefined,
  plan31: undefined,
  plan3Feature3: undefined,
  plan1Feature31: undefined,
  plan1Feature21: undefined,
  heading1: undefined,
  plan2Yearly2: undefined,
  plan2Price11: undefined,
  plan1Feature111: undefined,
  plan3Feature4: undefined,
  plan1Feature211: undefined,
  plan3Feature21: undefined,
  plan1: undefined,
  plan32: undefined,
  plan3Price11: undefined,
  plan3Feature22: undefined,
  plan3Feature111: undefined,
  plan1Price2: undefined,
  plan2Feature3: undefined,
  pricing14Id: '',
  plan2Feature32: undefined,
  plan1Yearly: undefined,
  plan1Price11: undefined,
  plan1Feature12: undefined,
  plan2Feature42: undefined,
  plan2Feature11: undefined,
  plan3Yearly11: undefined,
  plan3Price: undefined,
  plan3: undefined,
  content2: undefined,
  plan3Feature41: undefined,
  plan3Price2: undefined,
  plan1Yearly1: undefined,
  plan2Feature411: undefined,
  plan3Action1: undefined,
  plan11: undefined,
  plan1Action2: undefined,
  plan2Price: undefined,
  plan3Feature411: undefined,
  plan1Price: undefined,
  plan1Feature1: undefined,
  plan2Action11: undefined,
  plan2: undefined,
  plan111: undefined,
  plan3Feature12: undefined,
  plan2Feature41: undefined,
  plan3Action: undefined,
  plan2Feature1: undefined,
  plan2Price2: undefined,
  plan1Price1: undefined,
  plan2Action1: undefined,
  plan2Yearly1: undefined,
  plan1Action1: undefined,
  plan2Feature211: undefined,
  plan3Feature51: undefined,
  plan21: undefined,
  plan2Price1: undefined,
  plan1Feature22: undefined,
  plan2Yearly: undefined,
  plan2Feature311: undefined,
  plan1Feature11: undefined,
  plan3Feature1: undefined,
  plan311: undefined,
  plan1Feature32: undefined,
  plan1Yearly2: undefined,
  plan1Action11: undefined,
  plan2Feature31: undefined,
  plan3Feature52: undefined,
  plan211: undefined,
  plan1Yearly11: undefined,
  plan3Yearly1: undefined,
  content1: undefined,
  plan2Feature21: undefined,
  plan1Action: undefined,
  plan22: undefined,
  plan3Feature211: undefined,
  plan3Yearly: undefined,
  plan3Feature11: undefined,
  plan3Feature32: undefined,
  plan2Action2: undefined,
  plan1Feature311: undefined,
  plan3Action2: undefined,
  plan1Feature3: undefined,
  plan3Feature31: undefined,
  plan3Price1: undefined,
  contentId: '123456',
  plan2Feature2: undefined,
  plan2Feature111: undefined,
  plan3Yearly2: undefined,
  plan3Feature42: undefined,
  plan3Feature5: undefined,
  plan3Feature311: undefined,
  plan2Feature4: undefined,
  plan2Feature22: undefined,
}

Pricing14.propTypes = {
  plan2Yearly11: PropTypes.element,
  plan2Action: PropTypes.element,
  plan3Action11: PropTypes.element,
  plan12: PropTypes.element,
  plan3Feature511: PropTypes.element,
  plan3Feature2: PropTypes.element,
  plan2Feature12: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan31: PropTypes.element,
  plan3Feature3: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan1Feature21: PropTypes.element,
  heading1: PropTypes.element,
  plan2Yearly2: PropTypes.element,
  plan2Price11: PropTypes.element,
  plan1Feature111: PropTypes.element,
  plan3Feature4: PropTypes.element,
  plan1Feature211: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan1: PropTypes.element,
  plan32: PropTypes.element,
  plan3Price11: PropTypes.element,
  plan3Feature22: PropTypes.element,
  plan3Feature111: PropTypes.element,
  plan1Price2: PropTypes.element,
  plan2Feature3: PropTypes.element,
  pricing14Id: PropTypes.string,
  plan2Feature32: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan1Price11: PropTypes.element,
  plan1Feature12: PropTypes.element,
  plan2Feature42: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan3Yearly11: PropTypes.element,
  plan3Price: PropTypes.element,
  plan3: PropTypes.element,
  content2: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan3Price2: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan2Feature411: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan11: PropTypes.element,
  plan1Action2: PropTypes.element,
  plan2Price: PropTypes.element,
  plan3Feature411: PropTypes.element,
  plan1Price: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan2Action11: PropTypes.element,
  plan2: PropTypes.element,
  plan111: PropTypes.element,
  plan3Feature12: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan3Action: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan2Price2: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan2Feature211: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan21: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan1Feature22: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan2Feature311: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan311: PropTypes.element,
  plan1Feature32: PropTypes.element,
  plan1Yearly2: PropTypes.element,
  plan1Action11: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan3Feature52: PropTypes.element,
  plan211: PropTypes.element,
  plan1Yearly11: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  content1: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan1Action: PropTypes.element,
  plan22: PropTypes.element,
  plan3Feature211: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan3Feature32: PropTypes.element,
  plan2Action2: PropTypes.element,
  plan1Feature311: PropTypes.element,
  plan3Action2: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan3Price1: PropTypes.element,
  contentId: PropTypes.string,
  plan2Feature2: PropTypes.element,
  plan2Feature111: PropTypes.element,
  plan3Yearly2: PropTypes.element,
  plan3Feature42: PropTypes.element,
  plan3Feature5: PropTypes.element,
  plan3Feature311: PropTypes.element,
  plan2Feature4: PropTypes.element,
  plan2Feature22: PropTypes.element,
}

export default Pricing14
