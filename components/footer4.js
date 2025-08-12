import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer4 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <footer className="footer4-footer7 thq-section-padding">
        <div className="footer4-max-width thq-section-max-width">
          <div className="footer4-content">
            <div className="footer4-logo"></div>
            <div className="footer4-links">
              <Link href="/">
                <a className="footer4-link1 thq-body-small">
                  {props.link1 ?? (
                    <Fragment>
                      <span className="footer4-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_7YZgLQ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/tours">
                <a className="footer4-link2 thq-body-small">
                  {props.link3 ?? (
                    <Fragment>
                      <span className="footer4-text14">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_-f89AK'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/contact">
                <a className="footer4-link3 thq-body-small">
                  {props.link4 ?? (
                    <Fragment>
                      <span className="footer4-text15">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_p7IM2U'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/">
                <a className="footer4-link4 thq-body-small">
                  {props.link5 ?? (
                    <Fragment>
                      <span className="footer4-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_68ZZO3'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </div>
          </div>
          <div className="footer4-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer4-row">
              <div className="footer4-container">
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_coL7Tm'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="footer4-footer-links">
                <span className="footer4-text11 thq-body-small">
                  {props.privacyLink ?? (
                    <Fragment>
                      <span className="footer4-text16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_BpkOOe'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.termsLink ?? (
                    <Fragment>
                      <span className="footer4-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_TD8x77'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.cookiesLink ?? (
                    <Fragment>
                      <span className="footer4-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_go0HWM'),
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
      </footer>
      <style jsx>
        {`
          .footer4-footer7 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer4-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-content {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-logo {
            gap: 24px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer4-links {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
          }
          .footer4-link1 {
            text-decoration: none;
          }
          .footer4-link2 {
            text-decoration: none;
          }
          .footer4-link3 {
            text-decoration: none;
          }
          .footer4-link4 {
            text-decoration: none;
          }
          .footer4-credits {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer4-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer4-container {
            display: flex;
            align-items: flex-start;
          }
          .footer4-footer-links {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer4-text11 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          .footer4-text14 {
            display: inline-block;
          }
          .footer4-text15 {
            display: inline-block;
          }
          .footer4-text16 {
            display: inline-block;
          }
          .footer4-text17 {
            display: inline-block;
          }
          .footer4-text18 {
            display: inline-block;
          }
          .footer4-text19 {
            display: inline-block;
          }
          .footer4-text20 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .footer4-row {
              gap: var(--dl-layout-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer4-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer4-links {
              flex-direction: column;
            }
            .footer4-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer4.defaultProps = {
  link3: undefined,
  link4: undefined,
  privacyLink: undefined,
  termsLink: undefined,
  link1: undefined,
  link5: undefined,
  cookiesLink: undefined,
}

Footer4.propTypes = {
  link3: PropTypes.element,
  link4: PropTypes.element,
  privacyLink: PropTypes.element,
  termsLink: PropTypes.element,
  link1: PropTypes.element,
  link5: PropTypes.element,
  cookiesLink: PropTypes.element,
}

export default Footer4
