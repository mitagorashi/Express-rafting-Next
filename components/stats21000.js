import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats21000 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats21000-container1 thq-section-padding">
        <div className="stats21000-max-width thq-section-max-width">
          <h1 className="stats21000-text1">
            {props.heading3 ?? (
              <Fragment>
                <span className="stats21000-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XQAHjH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
          <h1 className="stats21000-text2">
            {props.heading31 ?? (
              <Fragment>
                <span className="stats21000-text4">
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
        <div className="stats21000-container2">
          <img
            alt={props.image1Alt1}
            src={props.image1Src1}
            className="stats21000-image1 thq-img-ratio-1-1"
          />
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="stats21000-image2 thq-img-ratio-1-1"
          />
        </div>
      </div>
      <style jsx>
        {`
          .stats21000-container1 {
            width: 1199px;
            height: 607px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .stats21000-max-width {
            width: 822px;
            height: 457px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .stats21000-text1 {
            width: 480px;
            height: 120px;
            font-size: 0.5em;
            align-self: stretch;
          }
          .stats21000-text2 {
            width: 590px;
            height: 342px;
            font-size: 0.5em;
            align-self: stretch;
          }
          .stats21000-container2 {
            flex: 0 0 auto;
            width: 440px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .stats21000-image1 {
            width: 440px;
            height: 297px;
          }
          .stats21000-image2 {
            width: 440px;
            height: 297px;
          }
          .stats21000-text3 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          .stats21000-text4 {
            display: inline-block;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
          }
          @media (max-width: 991px) {
            .stats21000-max-width {
              align-items: flex-start;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .stats21000-image1 {
              width: 100%;
            }
            .stats21000-image2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats21000.defaultProps = {
  heading3: undefined,
  image1Alt1: 'Active Users Graph',
  image1Src1: '669a93bc-62ee-461f-b440-93922d539a7f',
  heading31: undefined,
  image1Alt: 'Active Users Graph',
  image1Src: '3bed6d63-c51e-4d62-a937-af533282b4a9',
}

Stats21000.propTypes = {
  heading3: PropTypes.element,
  image1Alt1: PropTypes.string,
  image1Src1: PropTypes.string,
  heading31: PropTypes.element,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Stats21000
