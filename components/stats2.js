import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.stats2Id}
        className="stats2-container1 thq-section-padding"
      >
        <div className="stats2-container2">
          <img
            alt={props.image1Alt1}
            src={props.image1Src1}
            className="stats2-image1 thq-img-ratio-1-1"
          />
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="stats2-image2 thq-img-ratio-1-1"
          />
        </div>
        <div className="stats2-max-width thq-section-max-width">
          <h1 className="stats2-text1">
            {props.heading3 ?? (
              <Fragment>
                <span className="stats2-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XQAHjH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
          <h1 className="stats2-text2">
            {props.heading31 ?? (
              <Fragment>
                <span className="stats2-text4">
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
          .stats2-container1 {
            width: 1199px;
            height: 607px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .stats2-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .stats2-image1 {
            width: var(--dl-layout-size-xxlarge);
            height: var(--dl-layout-size-xxlarge);
          }
          .stats2-image2 {
            width: var(--dl-layout-size-xxlarge);
            height: var(--dl-layout-size-xxlarge);
          }
          .stats2-max-width {
            gap: var(--dl-layout-space-fourunits);
            width: 822px;
            height: 457px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .stats2-text1 {
            width: 480px;
            height: 65px;
            font-size: 0.5em;
            align-self: stretch;
          }
          .stats2-text2 {
            width: 590px;
            height: 779px;
            font-size: 0.5em;
            align-self: stretch;
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .stats2-text3 {
            display: inline-block;
            font-size: 30px;
            font-weight: 800;
          }
          .stats2-text4 {
            display: inline-block;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
          }
          @media (max-width: 991px) {
            .stats2-max-width {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .stats2-image1 {
              width: 100%;
            }
            .stats2-image2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats2.defaultProps = {
  stats2Id: '',
  heading3: undefined,
  image1Alt1: 'Active Users Graph',
  heading31: undefined,
  image1Src1: '/11-300h.jpg',
  image1Alt: 'Active Users Graph',
  image1Src: '/14-300h.jpg',
}

Stats2.propTypes = {
  stats2Id: PropTypes.string,
  heading3: PropTypes.element,
  image1Alt1: PropTypes.string,
  heading31: PropTypes.element,
  image1Src1: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Stats2
