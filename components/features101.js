import React, { Fragment } from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features101 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features101-layout300 thq-section-padding">
        <div className="features101-max-width thq-flex-column thq-section-max-width">
          <div className="features101-section-title thq-flex-column">
            <h2 className="thq-heading-2 features101-text10">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features101-text17">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_B7HkqY'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="features101-text11 thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features101-text18">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_UdGxfg'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div id="readMoreContainer" className="features101-container1">
            <span id="readMoreText" className="features101-text12">
              <span className="features101-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PsKiBW'),
                  }}
                ></span>
              </span>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <span className="features101-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_aWoE0N'),
                  }}
                ></span>
              </span>
              <br></br>
              <br></br>
              <br></br>
              <span className="features101-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5XoV68'),
                  }}
                ></span>
              </span>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <span className="features101-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wmkxaz'),
                  }}
                ></span>
              </span>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </span>
            <button id="readMoreBtn" className="features101-button1 button">
              <a
                href="https://youtu.be/DvqoR0CzUmg?si=8Tosq1DtHxPye5It"
                target="_blank"
                rel="noreferrer noopener"
                className="features101-link1"
              >
                {props.button5 ?? (
                  <Fragment>
                    <span className="features101-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_sWIoev'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </button>
          </div>
          <div>
            <div className="features101-container3">
              <React.Fragment>
                <Script>{`
              (function(){
  document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("readMoreBtn");
    const text = document.getElementById("readMoreText");

    btn.addEventListener("click", function() {
      if (!text.style.maxHeight || text.style.maxHeight === "4.8em") {
        text.style.maxHeight = "none";
        btn.innerText = "See less";
      } else {
        text.style.maxHeight = "4.8em";
        btn.innerText = "See more";
      }
    });
  });
})()
              `}</Script>
              </React.Fragment>
            </div>
          </div>
          <a href="https://youtu.be/Q0A7ViRiVrA?si=MoMYoRByiiSOnnbx">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="features101-image"
            />
          </a>
          <div className="features101-actions thq-flex-row">
            <Link href="/tours">
              <a className="features101-link3 thq-button-filled">
                <span className="thq-body-small">
                  {props.mainAction ?? (
                    <Fragment>
                      <span className="features101-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_ZdyDcF'),
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
      <style jsx>
        {`
          .features101-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features101-max-width {
            gap: var(--dl-layout-space-threeunits);
            align-items: center;
          }
          .features101-section-title {
            align-items: center;
          }
          .features101-text11 {
            text-align: center;
          }
          .features101-container1 {
            max-width: 600px;
            line-height: 1.6em;
          }
          .features101-text12 {
            display: block;
            overflow: hidden;
            max-height: 4.8em;
            transition: max-height 0.5s ease;
          }
          .features101-text13 {
            font-weight: bold;
          }
          .features101-text14 {
            font-weight: bold;
          }
          .features101-text15 {
            font-weight: bold;
          }
          .features101-text16 {
            font-weight: bold;
          }
          .features101-button1 {
            color: white;
            border: none;
            cursor: pointer;
            padding: 6px 12px;
            background: #007bff;
            margin-top: 10px;
          }
          .features101-link1 {
            text-decoration: none;
          }
          .features101-container3 {
            display: contents;
          }
          .features101-image {
            width: 953px;
            height: 522px;
            object-fit: cover;
            text-decoration: none;
          }
          .features101-actions {
            align-items: flex-start;
          }
          .features101-link3 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .features101-text17 {
            display: inline-block;
          }
          .features101-text18 {
            display: inline-block;
          }
          .features101-text19 {
            display: inline-block;
          }
          .features101-text20 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features101-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features101-section-title {
              width: auto;
            }
            .features101-text10 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .features101-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features101-actions {
              width: 100%;
              flex-direction: column;
            }
            .features101-link3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features101.defaultProps = {
  sectionTitle: undefined,
  sectionDescription: undefined,
  mainAction: undefined,
  imageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1000',
  imageAlt: 'image',
  button5: undefined,
}

Features101.propTypes = {
  sectionTitle: PropTypes.element,
  sectionDescription: PropTypes.element,
  mainAction: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  button5: PropTypes.element,
}

export default Features101
