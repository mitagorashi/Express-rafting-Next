import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Steps1 from '../components/steps1'
import Steps21 from '../components/steps21'
import Hero8 from '../components/hero8'
import Features103 from '../components/features103'
import Features104 from '../components/features104'
import Features105 from '../components/features105'
import Features106 from '../components/features106'
import Features107 from '../components/features107'
import Features108 from '../components/features108'
import Features109 from '../components/features109'
import Features1010 from '../components/features1010'
import Footer4 from '../components/footer4'

const Tours = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="tours-container">
        <Head>
          <title>Tours - Express rafting</title>
          <meta property="og:title" content="Tours - Express rafting" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="tours-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qOhPa-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="tours-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9bbSyn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="tours-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XOCjmf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="tours-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JDoFF3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="tours-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_F_gdXg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="tours-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CSrsPr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="tours-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mOnHkj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="tours-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_J7LCQk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link21={
            <Fragment>
              <span className="tours-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iMLX1X'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="tours-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NUCfW-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="tours-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yLkVV7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="tours-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_99tuAE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="tours-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4bCuR0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="tours-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4YM106'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="tours-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jls1yA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Navbar8>
        <a href="#Features103" className="tours-link1">
          <Steps1
            step1Title={
              <Fragment>
                <span className="tours-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_auySm0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step2Title={
              <Fragment>
                <span className="tours-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_uBalEP'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step4Title={
              <Fragment>
                <span className="tours-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_2BcFFz'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step1Title1={
              <Fragment>
                <span className="tours-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Sqa5go'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step1Title2={
              <Fragment>
                <span className="tours-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_29Q8m4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step2Title1={
              <Fragment>
                <span className="tours-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_i1F_vK'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step3Title2={
              <Fragment>
                <span className="tours-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_JNcgIx'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step4Title1={
              <Fragment>
                <span className="tours-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CHkDQJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step1Description={
              <Fragment>
                <span className="tours-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_e3un5U'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step2Description={
              <Fragment>
                <span className="tours-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kI6Jat'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step4Description={
              <Fragment>
                <span className="tours-text35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rIhPlg'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step1Description1={
              <Fragment>
                <span className="tours-text36">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7MEXCC'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step1Description2={
              <Fragment>
                <span className="tours-text37">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GzGn5B'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step2Description1={
              <Fragment>
                <span className="tours-text38">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_M53OTi'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step3Description2={
              <Fragment>
                <span className="tours-text39">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_a42mF3'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step4Description1={
              <Fragment>
                <span className="tours-text40">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_bfK-74'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            className="tours-component11"
          ></Steps1>
        </a>
        <Steps21
          step1Description={
            <Fragment>
              <span className="tours-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_C0q4M9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="tours-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QFION9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="tours-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pErABM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Steps21>
        <a href="#Features3" className="tours-link2">
          <Hero8
            action1={
              <Fragment>
                <span className="tours-text44">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_k6z3zb'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            content1={
              <Fragment>
                <span className="tours-text45">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_hAdy98'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="tours-text46">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qtQdlM'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            className="tours-component13"
          ></Hero8>
        </a>
        <Features103
          mainAction={
            <Fragment>
              <span className="tours-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Bhas3s'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="tours-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_I2pP0o'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          features103Id="Features103"
          rootClassName="features103root-class-name"
          secondaryAction={
            <Fragment>
              <span className="tours-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_itp6Th'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="tours-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zFiWju'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features103>
        <Features104
          mainAction={
            <Fragment>
              <span className="tours-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KFg1m0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="tours-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Djc2tf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          secondaryAction={
            <Fragment>
              <span className="tours-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kLA0Nr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="tours-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Zbsubp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features104>
        <Features105
          mainAction={
            <Fragment>
              <span className="tours-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ynmEkQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="tours-text56">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Yh0r7d'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          secondaryAction={
            <Fragment>
              <span className="tours-text57">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PFix6s'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="tours-text58">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mzr7bX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features105>
        <Features106
          mainAction={
            <Fragment>
              <span className="tours-text59">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gW_XnG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="tours-text60">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Kr6Yr-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          secondaryAction={
            <Fragment>
              <span className="tours-text61">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uU4qyR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="tours-text62">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UbSx6Q'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features106>
        <Features107
          mainAction={
            <Fragment>
              <span className="tours-text63">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7P8gH3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="tours-text64">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_l6XiGY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          secondaryAction={
            <Fragment>
              <span className="tours-text65">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OrdW4u'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="tours-text66">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4SF99G'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features107>
        <Features108
          mainAction={
            <Fragment>
              <span className="tours-text67">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2hCpIo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="tours-text68">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_W1zt2c'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          secondaryAction={
            <Fragment>
              <span className="tours-text69">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_t0YMWX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="tours-text70">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5pct2q'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features108>
        <Features109
          mainAction={
            <Fragment>
              <span className="tours-text71">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zNGjn0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="tours-text72">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_s9UFSw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          secondaryAction={
            <Fragment>
              <span className="tours-text73">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bTnmnc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="tours-text74">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PrTkXb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features109>
        <Features1010
          mainAction={
            <Fragment>
              <span className="tours-text75">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vhhmZp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="tours-text76">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lDlxPN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          secondaryAction={
            <Fragment>
              <span className="tours-text77">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JRqyu0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="tours-text78">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2bZMvi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features1010>
        <Footer4
          link1={
            <Fragment>
              <span className="tours-text79">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nBfIQb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="tours-text80">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XiUzE0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="tours-text81">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5PMuJQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="tours-text82">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9CFJ9e'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="tours-text83">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3Qspt9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="tours-text84">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6Urwo0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="tours-text85">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TYERyX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .tours-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tours-text10 {
            display: inline-block;
          }
          .tours-text11 {
            display: inline-block;
          }
          .tours-text12 {
            display: inline-block;
          }
          .tours-text13 {
            display: inline-block;
          }
          .tours-text14 {
            display: inline-block;
          }
          .tours-text15 {
            display: inline-block;
          }
          .tours-text16 {
            display: inline-block;
          }
          .tours-text17 {
            display: inline-block;
          }
          .tours-text18 {
            display: inline-block;
          }
          .tours-text19 {
            display: inline-block;
          }
          .tours-text20 {
            display: inline-block;
          }
          .tours-text21 {
            display: inline-block;
          }
          .tours-text22 {
            display: inline-block;
          }
          .tours-text23 {
            display: inline-block;
          }
          .tours-text24 {
            display: inline-block;
          }
          .tours-link1 {
            display: contents;
          }
          .tours-component11 {
            text-decoration: none;
          }
          .tours-text25 {
            display: inline-block;
          }
          .tours-text26 {
            display: inline-block;
          }
          .tours-text27 {
            display: inline-block;
          }
          .tours-text28 {
            display: inline-block;
          }
          .tours-text29 {
            display: inline-block;
          }
          .tours-text30 {
            display: inline-block;
          }
          .tours-text31 {
            display: inline-block;
          }
          .tours-text32 {
            display: inline-block;
          }
          .tours-text33 {
            display: inline-block;
          }
          .tours-text34 {
            display: inline-block;
          }
          .tours-text35 {
            display: inline-block;
          }
          .tours-text36 {
            display: inline-block;
          }
          .tours-text37 {
            display: inline-block;
          }
          .tours-text38 {
            display: inline-block;
          }
          .tours-text39 {
            display: inline-block;
          }
          .tours-text40 {
            display: inline-block;
          }
          .tours-text41 {
            display: inline-block;
          }
          .tours-text42 {
            display: inline-block;
          }
          .tours-text43 {
            display: inline-block;
          }
          .tours-link2 {
            display: contents;
          }
          .tours-component13 {
            text-decoration: none;
          }
          .tours-text44 {
            display: inline-block;
          }
          .tours-text45 {
            display: inline-block;
          }
          .tours-text46 {
            display: inline-block;
          }
          .tours-text47 {
            display: inline-block;
          }
          .tours-text48 {
            display: inline-block;
          }
          .tours-text49 {
            display: inline-block;
          }
          .tours-text50 {
            display: inline-block;
          }
          .tours-text51 {
            display: inline-block;
          }
          .tours-text52 {
            display: inline-block;
          }
          .tours-text53 {
            display: inline-block;
          }
          .tours-text54 {
            display: inline-block;
          }
          .tours-text55 {
            display: inline-block;
          }
          .tours-text56 {
            display: inline-block;
          }
          .tours-text57 {
            display: inline-block;
          }
          .tours-text58 {
            display: inline-block;
          }
          .tours-text59 {
            display: inline-block;
          }
          .tours-text60 {
            display: inline-block;
          }
          .tours-text61 {
            display: inline-block;
          }
          .tours-text62 {
            display: inline-block;
          }
          .tours-text63 {
            display: inline-block;
          }
          .tours-text64 {
            display: inline-block;
          }
          .tours-text65 {
            display: inline-block;
          }
          .tours-text66 {
            display: inline-block;
          }
          .tours-text67 {
            display: inline-block;
          }
          .tours-text68 {
            display: inline-block;
          }
          .tours-text69 {
            display: inline-block;
          }
          .tours-text70 {
            display: inline-block;
          }
          .tours-text71 {
            display: inline-block;
          }
          .tours-text72 {
            display: inline-block;
          }
          .tours-text73 {
            display: inline-block;
          }
          .tours-text74 {
            display: inline-block;
          }
          .tours-text75 {
            display: inline-block;
          }
          .tours-text76 {
            display: inline-block;
          }
          .tours-text77 {
            display: inline-block;
          }
          .tours-text78 {
            display: inline-block;
          }
          .tours-text79 {
            display: inline-block;
          }
          .tours-text80 {
            display: inline-block;
          }
          .tours-text81 {
            display: inline-block;
          }
          .tours-text82 {
            display: inline-block;
          }
          .tours-text83 {
            display: inline-block;
          }
          .tours-text84 {
            display: inline-block;
          }
          .tours-text85 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Tours

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
