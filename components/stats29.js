import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats29 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats29-container1 thq-section-padding">
        <div className="stats29-max-width thq-section-max-width">
          <h1 className="stats29-text1">
            {props.heading3 ?? (
              <Fragment>
                <span className="stats29-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XQAHjH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
          <h1 className="stats29-text2">
            {props.heading31 ?? (
              <Fragment>
                <span className="stats29-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_YFFXFe'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
        </div>
        <div className="stats29-container2">
          <img
            alt={props.image1Alt1}
            src={props.image1Src1}
            className="stats29-image1 thq-img-ratio-1-1"
          />
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="stats29-image2 thq-img-ratio-1-1"
          />
        </div>
      </div>
      <style jsx>
        {`
          .stats29-container1 {
            width: 1199px;
            height: 607px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .stats29-max-width {
            width: 822px;
            height: 457px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .stats29-text1 {
            width: 480px;
            height: 120px;
            font-size: 0.5em;
            align-self: stretch;
          }
          .stats29-text2 {
            width: 590px;
            height: 342px;
            font-size: 0.5em;
            align-self: stretch;
          }
          .stats29-container2 {
            flex: 0 0 auto;
            width: 440px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .stats29-image1 {
            width: 440px;
            height: 297px;
          }
          .stats29-image2 {
            width: 440px;
            height: 297px;
          }
          .stats29-text3 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          .stats29-text4 {
            display: inline-block;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
          }
          @media (max-width: 991px) {
            .stats29-max-width {
              align-items: flex-start;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .stats29-image1 {
              width: 100%;
            }
            .stats29-image2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats29.defaultProps = {
  image1Src1: 'a99c2edd-ad4e-4d20-9dd0-3919c0464bd8',
  heading3: undefined,
  image1Src: '72527161-25e7-42c5-a7b8-de62f0a785a0',
  image1Alt1: 'Active Users Graph',
  heading31: undefined,
  image1Alt: 'Active Users Graph',
}

Stats29.propTypes = {
  image1Src1: PropTypes.string,
  heading3: PropTypes.element,
  image1Src: PropTypes.string,
  image1Alt1: PropTypes.string,
  heading31: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default Stats29
