import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats210 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats210-container1 thq-section-padding">
        <div className="stats210-container2">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="stats210-image1 thq-img-ratio-1-1"
          />
          <img
            alt={props.image1Alt1}
            src={props.image1Src1}
            className="stats210-image2 thq-img-ratio-1-1"
          />
        </div>
        <div className="stats210-max-width thq-section-max-width">
          <h1 className="stats210-text1">
            {props.heading3 ?? (
              <Fragment>
                <span className="stats210-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XQAHjH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
          <h1 className="stats210-text2">
            {props.heading31 ?? (
              <Fragment>
                <span className="stats210-text4">
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
      </div>
      <style jsx>
        {`
          .stats210-container1 {
            width: 1199px;
            height: 607px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .stats210-container2 {
            flex: 0 0 auto;
            width: 440px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .stats210-image1 {
            width: 100%;
            height: 267px;
          }
          .stats210-image2 {
            width: 440px;
            height: 297px;
          }
          .stats210-max-width {
            width: 822px;
            height: 457px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .stats210-text1 {
            width: 480px;
            height: 65px;
            font-size: 0.5em;
            align-self: stretch;
          }
          .stats210-text2 {
            width: 590px;
            height: 779px;
            font-size: 0.5em;
            align-self: stretch;
          }
          .stats210-text3 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          .stats210-text4 {
            display: inline-block;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
          }
          @media (max-width: 991px) {
            .stats210-max-width {
              align-items: flex-start;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .stats210-image1 {
              width: 100%;
            }
            .stats210-image2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats210.defaultProps = {
  heading3: undefined,
  image1Src1: '/1.jpg',
  image1Alt: 'Active Users Graph',
  image1Src: '/external/screenshot%202025-08-09%20201330-500w.jpg',
  heading31: undefined,
  image1Alt1: 'Active Users Graph',
}

Stats210.propTypes = {
  heading3: PropTypes.element,
  image1Src1: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  heading31: PropTypes.element,
  image1Alt1: PropTypes.string,
}

export default Stats210
