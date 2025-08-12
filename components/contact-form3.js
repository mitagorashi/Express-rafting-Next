import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContactForm3 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact-form3-contact9 thq-section-padding">
        <div className="thq-flex-row thq-section-max-width contact-form3-max-width">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="contact-form3-image1 thq-img-ratio-4-3"
          />
          <div className="contact-form3-content1 thq-flex-column">
            <div className="contact-form3-section-title thq-card">
              <span className="thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="contact-form3-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_pE60zn'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="contact-form3-content2">
                <h2 className="thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="contact-form3-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_4MNKHf'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="contact-form3-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_r0ednq'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <form className="thq-card">
              <div className="contact-form3-input1">
                <label htmlFor="contact-form-3-name" className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_x0lOyQ'),
                    }}
                  ></span>
                </label>
                <input
                  type="text"
                  id="contact-form-3-name"
                  placeholder="Name"
                  className="thq-input"
                />
              </div>
              <div className="contact-form3-input2">
                <label
                  htmlFor="contact-form-3-email"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_zXzQvq'),
                    }}
                  ></span>
                </label>
                <input
                  type="email"
                  id="contact-form-3-email"
                  required="true"
                  placeholder="Email"
                  className="thq-input"
                />
              </div>
              <div className="contact-form3-container">
                <label
                  htmlFor="contact-form-3-message"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ThGKp6'),
                    }}
                  ></span>
                </label>
                <textarea
                  id="contact-form-3-message"
                  rows="3"
                  placeholder="Enter your message"
                  className="thq-input"
                ></textarea>
              </div>
              <div className="contact-form3-checkbox1">
                <input
                  type="checkbox"
                  id="contact-form-3-check"
                  checked="true"
                  required="true"
                  className="thq-checkbox"
                />
                <label
                  htmlFor="contact-form-3-check"
                  className="contact-form3-text16 thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_PcIjD4'),
                    }}
                  ></span>
                </label>
              </div>
              <a
                href="mailto:info@expressrafting.com?subject=website subbmition"
                className="contact-form3-button thq-button-filled"
              >
                <span className="thq-body-small">
                  {props.action ?? (
                    <Fragment>
                      <span className="contact-form3-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_8DZD8a'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </a>
            </form>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-form3-contact9 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-form3-image1 {
            flex: 1;
            width: 617px;
            height: 569px;
            max-width: 640px;
            border-radius: var(--dl-layout-radius-radius4);
          }
          .contact-form3-content1 {
            gap: 0;
            flex: 1;
            align-items: stretch;
          }
          .contact-form3-section-title {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form3-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form3-input1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form3-input2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form3-container {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-form3-checkbox1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .contact-form3-text16 {
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .contact-form3-button {
            align-self: flex-start;
            text-decoration: none;
          }
          .contact-form3-text17 {
            display: inline-block;
          }
          .contact-form3-text18 {
            display: inline-block;
          }
          .contact-form3-text19 {
            display: inline-block;
          }
          .contact-form3-text20 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact-form3-max-width {
              flex-direction: column;
            }
            .contact-form3-content1 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .contact-form3-image1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ContactForm3.defaultProps = {
  imageSrc: '/express-700w.jpg',
  action: undefined,
  imageAlt: 'Image1',
  content1: undefined,
  content2: undefined,
  heading1: undefined,
}

ContactForm3.propTypes = {
  imageSrc: PropTypes.string,
  action: PropTypes.element,
  imageAlt: PropTypes.string,
  content1: PropTypes.element,
  content2: PropTypes.element,
  heading1: PropTypes.element,
}

export default ContactForm3
