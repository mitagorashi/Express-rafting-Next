import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import ContactForm3 from '../components/contact-form3'
import Contact14 from '../components/contact14'
import Contact7 from '../components/contact7'
import Footer4 from '../components/footer4'

const Contact = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Express rafting</title>
          <meta property="og:title" content="Contact - Express rafting" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="contact-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4AhSbK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="contact-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rGJglF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="contact-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fwxRX8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="contact-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0QMZvk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="contact-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_53kqlK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="contact-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RmdZdD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="contact-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Jfu-UZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="contact-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gc7tSd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link21={
            <Fragment>
              <span className="contact-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hnBfcA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="contact-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kb7NvX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="contact-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lOzpWN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="contact-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_shxMIH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="contact-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-6D1RZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="contact-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Qjk2Vt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="contact-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zugKb7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Navbar8>
        <ContactForm3
          action={
            <Fragment>
              <span className="contact-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8cV4_4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ItTe95'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contact-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GmBONs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JJzZj4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></ContactForm3>
        <Contact14
          link1={
            <Fragment>
              <span className="contact-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0UxSZ7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          email1={
            <Fragment>
              <span className="contact-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4RjVcl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          phone1={
            <Fragment>
              <span className="contact-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jPVUAW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          address1={
            <Fragment>
              <span className="contact-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jVzCm9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_z7epgQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contact-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UDAh_m'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="contact-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TB6v9V'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content4={
            <Fragment>
              <span className="contact-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xpboci'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_R6g3IX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="contact-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zs1_pf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="contact-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yB1y8h'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading4={
            <Fragment>
              <span className="contact-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kFnF93'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Contact14>
        <Contact7
          content1={
            <Fragment>
              <span className="contact-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FfNGpI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PMSBBa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="contact-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MJe4rC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="contact-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mxXtYB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Contact7>
        <Footer4
          link1={
            <Fragment>
              <span className="contact-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2CSMIH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="contact-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CYCk0A'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="contact-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sR_pDa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="contact-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WH960A'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="contact-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MFNTB3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="contact-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sxq32S'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="contact-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7vb56A'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-text10 {
            display: inline-block;
          }
          .contact-text11 {
            display: inline-block;
          }
          .contact-text12 {
            display: inline-block;
          }
          .contact-text13 {
            display: inline-block;
          }
          .contact-text14 {
            display: inline-block;
          }
          .contact-text15 {
            display: inline-block;
          }
          .contact-text16 {
            display: inline-block;
          }
          .contact-text17 {
            display: inline-block;
          }
          .contact-text18 {
            display: inline-block;
          }
          .contact-text19 {
            display: inline-block;
          }
          .contact-text20 {
            display: inline-block;
          }
          .contact-text21 {
            display: inline-block;
          }
          .contact-text22 {
            display: inline-block;
          }
          .contact-text23 {
            display: inline-block;
          }
          .contact-text24 {
            display: inline-block;
          }
          .contact-text25 {
            display: inline-block;
          }
          .contact-text26 {
            display: inline-block;
          }
          .contact-text27 {
            display: inline-block;
          }
          .contact-text28 {
            display: inline-block;
          }
          .contact-text29 {
            display: inline-block;
          }
          .contact-text30 {
            display: inline-block;
          }
          .contact-text31 {
            display: inline-block;
          }
          .contact-text32 {
            display: inline-block;
          }
          .contact-text33 {
            display: inline-block;
          }
          .contact-text34 {
            display: inline-block;
          }
          .contact-text35 {
            display: inline-block;
          }
          .contact-text36 {
            display: inline-block;
          }
          .contact-text37 {
            display: inline-block;
          }
          .contact-text38 {
            display: inline-block;
          }
          .contact-text39 {
            display: inline-block;
          }
          .contact-text40 {
            display: inline-block;
          }
          .contact-text41 {
            display: inline-block;
          }
          .contact-text42 {
            display: inline-block;
          }
          .contact-text43 {
            display: inline-block;
          }
          .contact-text44 {
            display: inline-block;
          }
          .contact-text45 {
            display: inline-block;
          }
          .contact-text46 {
            display: inline-block;
          }
          .contact-text47 {
            display: inline-block;
          }
          .contact-text48 {
            display: inline-block;
          }
          .contact-text49 {
            display: inline-block;
          }
          .contact-text50 {
            display: inline-block;
          }
          .contact-text51 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Contact

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
