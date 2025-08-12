import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero8 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="hero8-header26 thq-section-padding">
        <div className="hero8-max-width thq-flex-column thq-section-max-width">
          <div className="hero8-column">
            <div className="hero8-content">
              <h1 className="hero8-text1 thq-heading-1">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="hero8-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Y5CaER'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h1>
              <p className="hero8-text2 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="hero8-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_q8huj1'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="hero8-actions">
                <Link href="/tours">
                  <a className="hero8-link thq-button-filled">
                    <span className="thq-body-small">
                      {props.action1 ?? (
                        <Fragment>
                          <span className="hero8-text5">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_fQCUhx'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="hero8-hero-image thq-img-ratio-16-9"
          />
        </div>
      </div>
      <style jsx>
        {`
          .hero8-header26 {
            gap: var(--dl-layout-space-twounits);
          }
          .hero8-max-width {
            align-self: center;
          }
          .hero8-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero8-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero8-text1 {
            text-align: center;
          }
          .hero8-text2 {
            text-align: center;
          }
          .hero8-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero8-link {
            text-decoration: none;
          }
          .hero8-hero-image {
            width: 1062px;
            height: 539px;
            transition: 0.3s;
          }

          .hero8-text4 {
            display: inline-block;
          }
          .hero8-text5 {
            display: inline-block;
          }
          .hero8-text6 {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .hero8-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero8-link {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero8.defaultProps = {
  heading1: undefined,
  image1Alt: 'Image of a happy family enjoying a picnic',
  action1: undefined,
  image1Src: '/7-1400w.jpg',
  content1: undefined,
}

Hero8.propTypes = {
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
  image1Src: PropTypes.string,
  content1: PropTypes.element,
}

export default Hero8
