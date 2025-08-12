import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero17 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="hero17-header78">
        <div className="hero17-column thq-section-max-width thq-section-padding">
          <div className="hero17-content1">
            <h1 className="hero17-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero17-text8">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_U0R_aB'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero17-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero17-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ODr0Wg'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="hero17-actions">
            <a
              href="http://wa.me/+905530741350"
              target="_blank"
              rel="noreferrer noopener"
              className="hero17-button1 thq-button-filled"
            >
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero17-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_NteYy4'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
            <button className="thq-button-outline hero17-button2">
              <span className="thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero17-text7">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_9Rjddr'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="hero17-content2">
          <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero17-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero17-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero17-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero17-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero17-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero17-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero17-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero17-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero17-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero17-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero17-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero17-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
          <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero17-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero17-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero17-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero17-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero17-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image12Alt}
                src={props.image12Src}
                className="hero17-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero17-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero17-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero17-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero17-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero17-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero17-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="hero17-container2">
            <React.Fragment>
              <React.Fragment>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n  @keyframes scroll-x {\n    from {\n      transform: translateX(0);\n    }\n    to {\n      transform: translateX(calc(-100% - 16px));\n    }\n  }\n\n  @keyframes scroll-y {\n    from {\n      transform: translateY(0);\n    }\n    to {\n      transform: translateY(calc(-100% - 16px));\n    }\n  }\n',
                  }}
                />
              </React.Fragment>
            </React.Fragment>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero17-header78 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero17-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .hero17-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero17-text1 {
            text-align: center;
          }
          .hero17-text2 {
            text-align: center;
          }
          .hero17-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
          }
          .hero17-button1 {
            text-decoration: none;
          }
          .hero17-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero17-row-container1 {
            width: 100%;
          }
          .hero17-placeholder-image10 {
            width: 386px;
            height: 367px;
          }
          .hero17-placeholder-image11 {
            width: 364px;
            height: 359px;
          }
          .hero17-placeholder-image12 {
            width: 346px;
            height: 351px;
          }
          .hero17-placeholder-image13 {
            width: 337px;
            height: 345px;
          }
          .hero17-placeholder-image14 {
            width: 344px;
            height: 349px;
          }
          .hero17-placeholder-image15 {
            width: 347px;
            height: 361px;
          }
          .hero17-placeholder-image16 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image17 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image18 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image19 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image20 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image21 {
            width: 400px;
            height: 400px;
          }
          .hero17-row-container2 {
            width: 100%;
          }
          .hero17-placeholder-image22 {
            width: 378px;
            height: 329px;
          }
          .hero17-placeholder-image23 {
            width: 352px;
            height: 331px;
          }
          .hero17-placeholder-image24 {
            width: 339px;
            height: 339px;
          }
          .hero17-placeholder-image25 {
            width: 332px;
            height: 353px;
          }
          .hero17-placeholder-image26 {
            width: 353px;
            height: 348px;
          }
          .hero17-placeholder-image27 {
            width: 348px;
            height: 340px;
          }
          .hero17-placeholder-image28 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image29 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image30 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image31 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image32 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image33 {
            width: 400px;
            height: 400px;
          }
          .hero17-container2 {
            display: contents;
          }
          .hero17-text5 {
            display: inline-block;
          }
          .hero17-text6 {
            display: inline-block;
          }
          .hero17-text7 {
            display: inline-block;
          }
          .hero17-text8 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .hero17-content2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero17-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero17-button1 {
              width: 100%;
            }
            .hero17-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero17.defaultProps = {
  content1: undefined,
  image8Alt: 'Rafting team paddling in sync',
  image9Src: '/9-1500w.jpg',
  action1: undefined,
  image5Alt: 'Rafting team celebrating a successful run',
  action2: undefined,
  image12Src: '/12-1500w.jpg',
  image6Alt: 'Rafting through breathtaking canyons',
  image7Alt: 'Rafting team enjoying a break by the river',
  image12Alt: 'Rafting team high-fiving after a thrilling ride',
  image6Src: '/6-1500w.jpg',
  image4Src: '/4-1500w.jpg',
  image3Src: '/3-1500w.jpg',
  image4Alt: 'Rafting guide providing instructions to a group',
  image7Src: '/7-1500w.jpg',
  image10Src: '/10-1500w.jpg',
  image3Alt: 'Rafting team conquering a rapid',
  image11Src: '/11-1500w.jpg',
  image10Alt: 'Rafting team navigating a challenging section',
  image1Alt: 'Rafting on a fast-flowing river',
  image1Src: '/1.jpg',
  image9Alt: 'Rafting team gearing up for the adventure',
  image2Src: '/2-1500w.jpg',
  image2Alt: 'Excited group of rafters ready to embark',
  image5Src: '/5-1500w.jpg',
  heading1: undefined,
  image11Alt: 'Rafting team cheering at the finish line',
  image8Src: '/8-1500w.jpg',
}

Hero17.propTypes = {
  content1: PropTypes.element,
  image8Alt: PropTypes.string,
  image9Src: PropTypes.string,
  action1: PropTypes.element,
  image5Alt: PropTypes.string,
  action2: PropTypes.element,
  image12Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image4Src: PropTypes.string,
  image3Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image10Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image5Src: PropTypes.string,
  heading1: PropTypes.element,
  image11Alt: PropTypes.string,
  image8Src: PropTypes.string,
}

export default Hero17
