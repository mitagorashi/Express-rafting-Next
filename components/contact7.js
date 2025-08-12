import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact7 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact7-container1 thq-section-padding">
        <div className="contact7-max-width thq-section-max-width">
          <div className="contact7-content1 thq-flex-row">
            <div className="contact7-content2">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact7-text5">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Q72cjv'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact7-text7">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_xbbAdd'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact7-content3 thq-flex-row">
            <div className="contact7-container2">
              <img
                alt={props.location2ImgAlt}
                src={props.location2ImgSrc}
                className="contact7-image thq-img-ratio-16-9"
              />
              <h3 className="contact7-text3 thq-heading-3">
                {props.location2 ?? (
                  <Fragment>
                    <span className="contact7-text8">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_FgOTzV'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-large">
                {props.location2Description ?? (
                  <Fragment>
                    <span className="contact7-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-VoF1u'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="contact7-container3">
                <a
                  href="https://maps.app.goo.gl/wHcoe8mjwUGMWZka6"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-button-flat thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6Zhyjc'),
                    }}
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact7-container1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact7-max-width {
            align-self: center;
          }
          .contact7-content1 {
            width: 100%;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
          }
          .contact7-content2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact7-content3 {
            width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact7-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact7-image {
            width: 983px;
            height: 551px;
            object-fit: cover;
          }
          .contact7-text3 {
            text-align: center;
          }
          .contact7-container3 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact7-text5 {
            display: inline-block;
          }
          .contact7-text6 {
            display: inline-block;
          }
          .contact7-text7 {
            display: inline-block;
          }
          .contact7-text8 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact7-content3 {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact7-content1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .contact7-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Contact7.defaultProps = {
  location2ImgSrc:
    '/a2b6201d-7716-45c7-9ca5-b73771199aa5-min-min%20(1)-1400w.jpg',
  heading1: undefined,
  location2Description: undefined,
  location2ImgAlt: 'Customer Support Image',
  content1: undefined,
  location2: undefined,
}

Contact7.propTypes = {
  location2ImgSrc: PropTypes.string,
  heading1: PropTypes.element,
  location2Description: PropTypes.element,
  location2ImgAlt: PropTypes.string,
  content1: PropTypes.element,
  location2: PropTypes.element,
}

export default Contact7
