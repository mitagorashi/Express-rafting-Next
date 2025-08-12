import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats231 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats231-container1 thq-section-padding">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="stats231-image thq-img-ratio-1-1"
        />
        <div className="stats231-max-width thq-section-max-width">
          <h1 className="stats231-text1">
            {props.heading3 ?? (
              <Fragment>
                <span className="stats231-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XQAHjH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
          <span className="stats231-text2">
            {props.text4 ?? (
              <Fragment>
                <span className="stats231-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_bZJYl2'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <div className="stats231-container2"></div>
        </div>
      </div>
      <style jsx>
        {`
          .stats231-container1 {
            width: 2825px;
            height: 1243px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .stats231-image {
            width: 990px;
            height: 1012px;
          }
          .stats231-max-width {
            flex: 0 0 auto;
            width: 1636px;
            height: 1023px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .stats231-text1 {
            align-self: stretch;
          }
          .stats231-text2 {
            align-self: stretch;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
          }
          .stats231-container2 {
            width: 1408px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 362px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .stats231-text3 {
            display: inline-block;
            font-size: 50px;
            font-weight: 800;
          }
          .stats231-text4 {
            display: inline-block;
            font-size: 24px;
          }
          @media (max-width: 991px) {
            .stats231-max-width {
              align-items: flex-start;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .stats231-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats231.defaultProps = {
  image1Alt: 'Active Users Graph',
  heading3: undefined,
  text4: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxzdGF0aXN0aWNzfGVufDB8fHx8MTcxNjUzNjcxNXww&ixlib=rb-4.0.3&w=2000',
}

Stats231.propTypes = {
  image1Alt: PropTypes.string,
  heading3: PropTypes.element,
  text4: PropTypes.element,
  image1Src: PropTypes.string,
}

export default Stats231
