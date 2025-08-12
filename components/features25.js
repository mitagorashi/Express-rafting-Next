import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features25 = (props) => {
  const translate = useTranslations()
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features25-container2 thq-section-max-width">
          <div className="features25-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features25-tab-horizontal1"
            >
              <div className="features25-divider-container1">
                {activeTab === 0 && (
                  <div className="features25-container3"></div>
                )}
              </div>
              <div className="features25-content1">
                <h2 className="thq-heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features25-text3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_T84q1h'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features25-text2">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_F84Q5l'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features25-tab-horizontal2"
            >
              <div className="features25-divider-container2">
                {activeTab === 1 && (
                  <div className="features25-container4"></div>
                )}
              </div>
              <div className="features25-content2">
                <h2 className="thq-heading-2">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features25-text6">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_AeLfVF'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features25-text5">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_5sZuqy'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features25-tab-horizontal3"
            >
              <div className="features25-divider-container3">
                {activeTab === 2 && (
                  <div className="features25-container5"></div>
                )}
              </div>
              <div className="features25-content3">
                <h2 className="thq-heading-2">
                  {props.feature3Title1 ?? (
                    <Fragment>
                      <span className="features25-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_1b3jF3'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature3Description1 ?? (
                    <Fragment>
                      <span className="features25-text7">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_nHX_Aa'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="features25-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features25-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features25-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features25-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
        <div className="features25-content4">
          <h2 className="features25-feature3-title2 thq-heading-2">
            {props.feature3Title ?? (
              <Fragment>
                <span className="features25-text8">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_SHa7VO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <span className="features25-feature3-description2 thq-body-small">
            {props.feature3Description ?? (
              <Fragment>
                <span className="features25-text1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_YQUWMf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .features25-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features25-tabs-menu {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features25-tab-horizontal1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features25-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features25-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features25-content1 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features25-tab-horizontal2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features25-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features25-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features25-content2 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features25-tab-horizontal3 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features25-divider-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features25-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features25-content3 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features25-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features25-image1 {
            width: 480px;
            height: 452px;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features25-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features25-image3 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features25-content4 {
            gap: 16px;
            flex: 1;
            width: 487px;
            display: flex;
            overflow: hidden;
            align-self: flex-start;
            align-items: flex-start;
            flex-shrink: 0;
            margin-left: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .features25-feature3-title2 {
            align-self: flex-start;
          }
          .features25-feature3-description2 {
            align-self: stretch;
          }
          .features25-text1 {
            display: inline-block;
          }
          .features25-text2 {
            display: inline-block;
          }
          .features25-text3 {
            display: inline-block;
          }
          .features25-text4 {
            display: inline-block;
          }
          .features25-text5 {
            display: inline-block;
          }
          .features25-text6 {
            display: inline-block;
          }
          .features25-text7 {
            display: inline-block;
          }
          .features25-text8 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features25-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
            .features25-tabs-menu {
              order: 2;
            }
          }
        `}
      </style>
    </>
  )
}

Features25.defaultProps = {
  feature3Description: undefined,
  feature1Description: undefined,
  feature1Title: undefined,
  feature3ImgAlt: 'Rafting Equipment Image',
  feature3Title1: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1589523322712-e6445bd82f73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzQ4NDI5Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1ImgSrc: '/external/f502032f-91b0-4fa4-87a4-fbfa45d69de0-1400w.jpg',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1646592472330-4a8d163a5f54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzQ4NDI5M3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature2ImgAlt: 'Professional Rafting Guide Image',
  feature2Description: undefined,
  feature2Title: undefined,
  feature3Description1: undefined,
  feature1ImgAlt: 'Rafting Adventure Image',
  feature3Title: undefined,
}

Features25.propTypes = {
  feature3Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature3Title1: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3Description1: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature3Title: PropTypes.element,
}

export default Features25
