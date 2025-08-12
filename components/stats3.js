import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats3 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="thq-section-padding">
        <div className="stats3-max-width thq-section-max-width">
          <div className="stats3-container2">
            <h2 className="thq-heading-2 stats3-title">
              {props.heading1 ?? (
                <Fragment>
                  <span className="stats3-text20">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Fp25_5'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="stats3-text27">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Vrr3oq'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="stats3-container3">
            <div className="stats3-container4">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats3-text26">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ufxDzq'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small stats3-text11">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats3-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_dbHSqL'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats3-container5">
              <h2 className="thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats3-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_n7ldT-'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small stats3-text13">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats3-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_lGgrMU'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats3-container6">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats3-text22">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_gMy-gd'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small stats3-text15">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats3-text23">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_D0pduY'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats3-container7">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats3-text24">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_UYJ8kK'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small stats3-text17">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats3-text25">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_IA-5aN'),
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
          .stats3-max-width {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .stats3-container2 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .stats3-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
          }
          .stats3-container4 {
            flex: 1;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .stats3-container5 {
            flex: 1;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
          }
          .stats3-container6 {
            flex: 1;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .stats3-container7 {
            flex: 1;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
          }
          .stats3-text18 {
            display: inline-block;
          }
          .stats3-text19 {
            display: inline-block;
          }
          .stats3-text20 {
            display: inline-block;
          }
          .stats3-text21 {
            display: inline-block;
          }
          .stats3-text22 {
            display: inline-block;
          }
          .stats3-text23 {
            display: inline-block;
          }
          .stats3-text24 {
            display: inline-block;
          }
          .stats3-text25 {
            display: inline-block;
          }
          .stats3-text26 {
            display: inline-block;
          }
          .stats3-text27 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .stats3-container3 {
              flex-wrap: wrap;
            }
            .stats3-container6 {
              align-self: flex-start;
            }
            .stats3-container7 {
              align-self: flex-start;
            }
          }
          @media (max-width: 767px) {
            .stats3-title {
              text-align: center;
            }
            .stats3-container3 {
              flex-wrap: wrap;
              align-items: center;
              flex-direction: row;
            }
            .stats3-container4 {
              align-self: flex-start;
            }
            .stats3-text11 {
              text-align: center;
            }
            .stats3-container5 {
              flex: 1;
            }
            .stats3-text13 {
              text-align: center;
            }
            .stats3-text15 {
              text-align: center;
            }
            .stats3-text17 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .stats3-title {
              align-self: center;
              text-align: center;
            }
            .stats3-container3 {
              flex-wrap: wrap;
            }
            .stats3-container5 {
              align-self: flex-start;
            }
            .stats3-container6 {
              align-self: flex-start;
            }
            .stats3-container7 {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

Stats3.defaultProps = {
  stat1Description: undefined,
  stat2: undefined,
  heading1: undefined,
  stat2Description: undefined,
  stat3: undefined,
  stat3Description: undefined,
  stat4: undefined,
  stat4Description: undefined,
  stat1: undefined,
  content1: undefined,
}

Stats3.propTypes = {
  stat1Description: PropTypes.element,
  stat2: PropTypes.element,
  heading1: PropTypes.element,
  stat2Description: PropTypes.element,
  stat3: PropTypes.element,
  stat3Description: PropTypes.element,
  stat4: PropTypes.element,
  stat4Description: PropTypes.element,
  stat1: PropTypes.element,
  content1: PropTypes.element,
}

export default Stats3
