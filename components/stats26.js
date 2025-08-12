import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats26 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats26-container1 thq-section-padding">
        <div className="stats26-max-width thq-section-max-width">
          <h1 className="stats26-text1">
            {props.heading3 ?? (
              <Fragment>
                <span className="stats26-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XQAHjH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
          <h1 className="stats26-text2">
            {props.heading31 ?? (
              <Fragment>
                <span className="stats26-text4">
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
        <div className="stats26-container2">
          <img
            alt={props.image1Alt1}
            src={props.image1Src1}
            className="stats26-image1 thq-img-ratio-1-1"
          />
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="stats26-image2 thq-img-ratio-1-1"
          />
        </div>
      </div>
      <style jsx>
        {`
          .stats26-container1 {
            width: 1199px;
            height: 607px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .stats26-max-width {
            width: 822px;
            height: 457px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .stats26-text1 {
            width: 480px;
            height: 120px;
            font-size: 0.5em;
            align-self: stretch;
          }
          .stats26-text2 {
            width: 590px;
            height: 342px;
            font-size: 0.5em;
            align-self: stretch;
          }
          .stats26-container2 {
            flex: 0 0 auto;
            width: 440px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .stats26-image1 {
            width: 440px;
            height: 297px;
          }
          .stats26-image2 {
            width: 440px;
            height: 297px;
          }
          .stats26-text3 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          .stats26-text4 {
            display: inline-block;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
          }
          @media (max-width: 991px) {
            .stats26-max-width {
              align-items: flex-start;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .stats26-image1 {
              width: 100%;
            }
            .stats26-image2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats26.defaultProps = {
  image1Src: 'c232c3c0-6c0c-4244-ac8c-2969459ef328',
  image1Alt: 'Active Users Graph',
  image1Alt1: 'Active Users Graph',
  heading3: undefined,
  heading31: undefined,
  image1Src1: '0dec6337-408c-40a8-96f2-9517b817f4ae',
}

Stats26.propTypes = {
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Alt1: PropTypes.string,
  heading3: PropTypes.element,
  heading31: PropTypes.element,
  image1Src1: PropTypes.string,
}

export default Stats26
