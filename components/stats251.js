import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats251 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats251-container thq-section-padding">
        <div className="stats251-max-width thq-section-max-width">
          <h1 className="stats251-text1">
            {props.heading3 ?? (
              <Fragment>
                <span className="stats251-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XQAHjH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
          <h1 className="stats251-text2">
            {props.heading31 ?? (
              <Fragment>
                <span className="stats251-text3">
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
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="stats251-image thq-img-ratio-1-1"
        />
      </div>
      <style jsx>
        {`
          .stats251-container {
            width: 1199px;
            height: 607px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .stats251-max-width {
            flex: 0 0 auto;
            width: 691px;
            height: 457px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .stats251-text1 {
            width: 480px;
            height: 120px;
            font-size: 0.5em;
            align-self: stretch;
          }
          .stats251-text2 {
            width: 590px;
            height: 342px;
            font-size: 0.5em;
            align-self: stretch;
          }
          .stats251-image {
            width: 440px;
            height: 297px;
          }
          .stats251-text3 {
            display: inline-block;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
          }
          .stats251-text4 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          @media (max-width: 991px) {
            .stats251-max-width {
              align-items: flex-start;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .stats251-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats251.defaultProps = {
  heading31: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxzdGF0aXN0aWNzfGVufDB8fHx8MTcxNjUzNjcxNXww&ixlib=rb-4.0.3&w=1500',
  heading3: undefined,
  image1Alt: 'Active Users Graph',
}

Stats251.propTypes = {
  heading31: PropTypes.element,
  image1Src: PropTypes.string,
  heading3: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default Stats251
