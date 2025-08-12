import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features2-layout302 thq-section-padding">
        <div className="features2-max-width thq-section-max-width">
          <div className="features2-section-title thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features2-text24">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_5u3dT_'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features2-text22">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Vrr2ka'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features2-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Ay6M0L'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features2-content1">
            <div className="thq-grid-5">
              <div className="features2-feature1 thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="features2-image1 thq-team-image-round"
                />
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="features2-text25">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_VgmG9s'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="features2-text18">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_E1sIe5'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features2-feature2 thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="features2-image2 thq-team-image-round"
                />
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features2-text17">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_l0faaf'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="features2-text21">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_WJlNqO'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features2-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="features2-image3 thq-team-image-round"
                />
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="features2-text13">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_fR6NzH'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="features2-text15">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_099k8I'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features2-feature4 thq-flex-column">
                <img
                  alt={props.feature4ImageAlt}
                  src={props.feature4ImageSrc}
                  className="features2-image4 thq-team-image-round"
                />
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature4Title ?? (
                      <Fragment>
                        <span className="features2-text19">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_x8ktTd'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature4Description ?? (
                      <Fragment>
                        <span className="features2-text26">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Z3-MMs'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features2-feature5 thq-flex-column">
                <img
                  alt={props.feature5ImageAlt}
                  src={props.feature5ImageSrc}
                  className="features2-image5 thq-team-image-round"
                />
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature5Title ?? (
                      <Fragment>
                        <span className="features2-text20">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_-7JLky'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature5Description ?? (
                      <Fragment>
                        <span className="features2-text16">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text__x3sso'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="features2-actions">
              <button className="thq-button-filled features2-button">
                <Link href="/tours">
                  <a className="features2-link thq-body-small">
                    {props.mainAction ?? (
                      <Fragment>
                        <span className="features2-text23">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_IQ_YjS'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features2-layout302 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features2-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features2-section-title {
            align-items: flex-start;
          }
          .features2-content1 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features2-feature1 {
            align-items: flex-start;
          }
          .features2-image1 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            align-self: center;
          }
          .features2-feature2 {
            align-items: flex-start;
          }
          .features2-image2 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            align-self: center;
          }
          .features2-feature3 {
            align-items: flex-start;
          }
          .features2-image3 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            align-self: center;
          }
          .features2-feature4 {
            align-items: flex-start;
          }
          .features2-image4 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            align-self: center;
          }
          .features2-feature5 {
            align-items: flex-start;
          }
          .features2-image5 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            align-self: center;
          }
          .features2-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
          }
          .features2-link {
            text-decoration: none;
          }
          .features2-text13 {
            display: inline-block;
          }
          .features2-text14 {
            display: inline-block;
          }
          .features2-text15 {
            display: inline-block;
          }
          .features2-text16 {
            display: inline-block;
          }
          .features2-text17 {
            display: inline-block;
          }
          .features2-text18 {
            display: inline-block;
          }
          .features2-text19 {
            display: inline-block;
          }
          .features2-text20 {
            display: inline-block;
          }
          .features2-text21 {
            display: inline-block;
          }
          .features2-text22 {
            display: inline-block;
          }
          .features2-text23 {
            display: inline-block;
          }
          .features2-text24 {
            display: inline-block;
          }
          .features2-text25 {
            display: inline-block;
          }
          .features2-text26 {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .features2-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features2-actions {
              width: 100%;
              flex-direction: column;
            }
            .features2-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features2.defaultProps = {
  feature3Title: undefined,
  feature2ImageAlt: 'Advanced Security Image',
  sectionDescription: undefined,
  feature3Description: undefined,
  feature5Description: undefined,
  feature3ImageSrc: '/4-200h.jpg',
  feature2Title: undefined,
  feature1Description: undefined,
  feature4ImageAlt: 'Customization Options Image',
  feature4Title: undefined,
  feature5Title: undefined,
  feature2Description: undefined,
  sectionTitle: undefined,
  feature2ImageSrc: '/new pics/0b75f469-b901-4200-9ce8-b6eb7eed6c54-200w.jpg',
  feature5ImageAlt: 'Seamless Integration Image',
  feature1ImageAlt: 'User-Friendly Interface Image',
  feature4ImageSrc: '/9471d5f5-4c87-41e1-8970-2f7e7909b1bd-200h.jpg',
  feature5ImageSrc: '/df7ad923-8e3e-4d42-9b89-c5a61b82e67e-200h.jpg',
  mainAction: undefined,
  feature3ImageAlt: 'Customer Support Image',
  feature1ImageSrc: '/8-200h.jpg',
  slogan: undefined,
  feature1Title: undefined,
  feature4Description: undefined,
}

Features2.propTypes = {
  feature3Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature3Description: PropTypes.element,
  feature5Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature4Title: PropTypes.element,
  feature5Title: PropTypes.element,
  feature2Description: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  mainAction: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  slogan: PropTypes.element,
  feature1Title: PropTypes.element,
  feature4Description: PropTypes.element,
}

export default Features2
