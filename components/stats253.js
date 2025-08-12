import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats253 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats253-container1 thq-section-padding">
        <div className="stats253-container2">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="stats253-image1 thq-img-ratio-1-1"
          />
          <img
            alt={props.image1Alt1}
            src={props.image1Src1}
            className="stats253-image2 thq-img-ratio-1-1"
          />
        </div>
        <div className="stats253-max-width thq-section-max-width">
          <h1 className="stats253-text1">
            {props.heading3 ?? (
              <Fragment>
                <span className="stats253-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XQAHjH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
          <h1 className="stats253-text2">
            {props.heading31 ?? (
              <Fragment>
                <span className="stats253-text3">
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
          .stats253-container1 {
            width: 1199px;
            height: 793px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .stats253-container2 {
            flex: 0 0 auto;
            width: 440px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .stats253-image1 {
            width: 440px;
            height: 297px;
          }
          .stats253-image2 {
            width: 440px;
            height: 297px;
          }
          .stats253-max-width {
            flex: 0 0 auto;
            width: 691px;
            height: 457px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .stats253-text1 {
            width: 480px;
            height: 120px;
            font-size: 0.5em;
            align-self: stretch;
          }
          .stats253-text2 {
            width: 590px;
            height: 342px;
            font-size: 0.5em;
            align-self: stretch;
          }
          .stats253-text3 {
            display: inline-block;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
          }
          .stats253-text4 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          @media (max-width: 991px) {
            .stats253-max-width {
              align-items: flex-start;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .stats253-image1 {
              width: 100%;
            }
            .stats253-image2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats253.defaultProps = {
  heading31: undefined,
  image1Src: '171d47a6-d7f3-41c2-b258-b7e7bdde3b6a',
  image1Alt: 'Active Users Graph',
  image1Alt1: 'Active Users Graph',
  image1Src1: '69d23011-055b-4675-a919-9c693ce9ded7',
  heading3: undefined,
}

Stats253.propTypes = {
  heading31: PropTypes.element,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Alt1: PropTypes.string,
  image1Src1: PropTypes.string,
  heading3: PropTypes.element,
}

export default Stats253
