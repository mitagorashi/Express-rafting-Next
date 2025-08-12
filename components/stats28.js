import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats28 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats28-container1 thq-section-padding">
        <div className="stats28-max-width thq-section-max-width">
          <h1 className="stats28-text1">
            {props.heading3 ?? (
              <Fragment>
                <span className="stats28-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XQAHjH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
          <h1 className="stats28-text2">
            {props.heading31 ?? (
              <Fragment>
                <span className="stats28-text3">
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
        <div className="stats28-container2">
          <img
            alt={props.image1Alt1}
            src={props.image1Src1}
            className="stats28-image1 thq-img-ratio-1-1"
          />
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="stats28-image2 thq-img-ratio-1-1"
          />
        </div>
      </div>
      <style jsx>
        {`
          .stats28-container1 {
            width: 1199px;
            height: 607px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .stats28-max-width {
            width: 822px;
            height: 457px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .stats28-text1 {
            width: 480px;
            height: 120px;
            font-size: 0.5em;
            align-self: stretch;
          }
          .stats28-text2 {
            width: 590px;
            height: 342px;
            font-size: 0.5em;
            align-self: stretch;
          }
          .stats28-container2 {
            flex: 0 0 auto;
            width: 440px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .stats28-image1 {
            width: 440px;
            height: 297px;
          }
          .stats28-image2 {
            width: 440px;
            height: 297px;
          }
          .stats28-text3 {
            display: inline-block;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
          }
          .stats28-text4 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          @media (max-width: 991px) {
            .stats28-max-width {
              align-items: flex-start;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .stats28-image1 {
              width: 100%;
            }
            .stats28-image2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats28.defaultProps = {
  heading31: undefined,
  image1Alt1: 'Active Users Graph',
  image1Alt: 'Active Users Graph',
  image1Src: '8202b376-3133-4117-af5d-ed901a8998d0',
  heading3: undefined,
  image1Src1: 'b151f774-aaf8-46bb-8dfe-944d93baf5be',
}

Stats28.propTypes = {
  heading31: PropTypes.element,
  image1Alt1: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  heading3: PropTypes.element,
  image1Src1: PropTypes.string,
}

export default Stats28
