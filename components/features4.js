import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Features2 from './features2'

const Features4 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features4-layout301 thq-section-padding">
        <div className="features4-max-width thq-section-max-width">
          <h2 className="features4-text10 thq-heading-2">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="features4-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_8PJyEM'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
        </div>
        <Features2
          slogan={
            <Fragment>
              <span className="features4-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mYbStl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          mainAction={
            <Fragment>
              <span className="features4-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LtmS8-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="features4-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1AhX92'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="features4-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lnd9_a'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="features4-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_s2kYqd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="features4-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ibEHc9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature4Title={
            <Fragment>
              <span className="features4-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mzxzzB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature5Title={
            <Fragment>
              <span className="features4-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FuxKFB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="features4-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iHUTnB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="features4-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rNO0w4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="features4-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5hCm5c'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="features4-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gkXwD6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature4Description={
            <Fragment>
              <span className="features4-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_m3ubbG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature5Description={
            <Fragment>
              <span className="features4-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_q1L-t4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features2>
      </div>
      <style jsx>
        {`
          .features4-layout301 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features4-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            animation-name: fadeInDown;
            flex-direction: column;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features4-text10 {
            text-align: center;
          }
          .features4-text11 {
            display: inline-block;
          }
          .features4-text12 {
            display: inline-block;
          }
          .features4-text13 {
            display: inline-block;
          }
          .features4-text14 {
            display: inline-block;
          }
          .features4-text15 {
            display: inline-block;
          }
          .features4-text16 {
            display: inline-block;
          }
          .features4-text17 {
            display: inline-block;
          }
          .features4-text18 {
            display: inline-block;
          }
          .features4-text19 {
            display: inline-block;
          }
          .features4-text20 {
            display: inline-block;
          }
          .features4-text21 {
            display: inline-block;
          }
          .features4-text22 {
            display: inline-block;
          }
          .features4-text23 {
            display: inline-block;
          }
          .features4-text24 {
            display: inline-block;
          }
          .features4-text25 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .features4-text10 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .features4-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Features4.defaultProps = {
  sectionTitle: undefined,
}

Features4.propTypes = {
  sectionTitle: PropTypes.element,
}

export default Features4
