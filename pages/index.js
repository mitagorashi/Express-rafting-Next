import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Features4 from '../components/features4'
import Features101 from '../components/features101'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Team11 from '../components/team11'
import Contact10 from '../components/contact10'
import FAQ2 from '../components/faq2'
import Footer4 from '../components/footer4'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Express rafting</title>
          <meta property="og:title" content="Express rafting" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="home-text100">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1QFhwX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text101">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_58OPAg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text102">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pNbYui'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text103">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ivXK5s'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text104">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qehQEz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text105">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dItPnz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text106">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oZW2hs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text107">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3BzHUC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link21={
            <Fragment>
              <span className="home-text108">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MnOoM8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text109">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_afqJRw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text110">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1S4-BD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="home-text111">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_x3OMTG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text112">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DGghSl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text113">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_csRwvA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text114">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DHY5uI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Navbar8>
        <Hero17
          action1={
            <Fragment>
              <span className="home-text115">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mdqtxe'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text116">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KKd-QS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text117">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KxI6RZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text118">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YsZ8yq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Hero17>
        <Features24
          feature1Title={
            <Fragment>
              <span className="home-text119">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lrU5_V'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text120">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_D5hebQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text121">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nlt7Dc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text122">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PctdcI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text123">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VRGc6j'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text124">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OTSyK_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features24>
        <CTA26
          action1={
            <Fragment>
              <span className="home-text125">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OvQZld'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text126">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_W1BHwA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text127">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Vt3D8g'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></CTA26>
        <Features25
          feature1Title={
            <Fragment>
              <span className="home-text128">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_k89tPl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text129">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9Tbsgu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text130">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LV3WVA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Title1={
            <Fragment>
              <span className="home-text131">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_c9X8XN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text132">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gXUPuX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text133">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5dvHV9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text134">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HJbAwY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Description1={
            <Fragment>
              <span className="home-text135">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VM3esK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features25>
        <Features4
          sectionTitle={
            <Fragment>
              <span className="home-text136">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Z6w7Vs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features4>
        <Features101
          button5={
            <Fragment>
              <span className="home-text137">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1Dg1AS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          videoSrc="https://youtu.be/DvqoR0CzUmg?si=8Tosq1DtHxPye5It"
          mainAction={
            <Fragment>
              <span className="home-text138">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jviMby'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="home-text139">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nbQx6k'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="home-text140">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rQgYXu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features101>
        <Steps2
          step1Title={
            <Fragment>
              <span className="home-text141">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_64jfDX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text142">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_166cfE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text143">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-UP7hC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text144">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_u4hijn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step1Description={
            <Fragment>
              <span className="home-text145">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sNBufy'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text146">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tCHbSc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text147">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_aRpsAm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text148">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6ob3or'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Steps2>
        <a
          href="https://www.getyourguide.com/side-l856/from-side-koprulu-canyon-rafting-tour-with-optional-zipline-t489508?ranking_uuid=6da70274-96a1-4f5a-8027-17cffa08c8f0&amp;lang=en&amp;date_from=2025-08-22&amp;_pc=1,1"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link1"
        >
          <Testimonial17
            review1={
              <Fragment>
                <span className="home-text149">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_UzNMNY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            review2={
              <Fragment>
                <span className="home-text150">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_LbJbB6'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            review3={
              <Fragment>
                <span className="home-text151">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_8nVoBk'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            review4={
              <Fragment>
                <span className="home-text152">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_2Ik5rr'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            content1={
              <Fragment>
                <span className="home-text153">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_eC3qRD'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="home-text154">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_maLAad'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            author1Name={
              <Fragment>
                <span className="home-text155">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_iNj-Vw'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            author2Name={
              <Fragment>
                <span className="home-text156">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_JQTNQj'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            author3Name={
              <Fragment>
                <span className="home-text157">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_aqezLG'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            author4Name={
              <Fragment>
                <span className="home-text158">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_f5qN_B'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            author1Position={
              <Fragment>
                <span className="home-text159">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_HbbZzQ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            author2Position={
              <Fragment>
                <span className="home-text160">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text__9-ylO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            author3Position={
              <Fragment>
                <span className="home-text161">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_x9kbsz'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            author4Position={
              <Fragment>
                <span className="home-text162">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_u-Eiuo'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            className="home-component18"
          ></Testimonial17>
        </a>
        <Team11
          member1={
            <Fragment>
              <span className="home-text163">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wS6mYh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member2={
            <Fragment>
              <span className="home-text164">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__blw16'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member3={
            <Fragment>
              <span className="home-text165">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7pOSK6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member4={
            <Fragment>
              <span className="home-text166">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JxC3Oz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member5={
            <Fragment>
              <span className="home-text167">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BXaXMZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member6={
            <Fragment>
              <span className="home-text168">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7TNPMV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member7={
            <Fragment>
              <span className="home-text169">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RnMQVz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member8={
            <Fragment>
              <span className="home-text170">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tNwBtt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text171">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eluRhv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text172">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VjBDWS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member1Job={
            <Fragment>
              <span className="home-text173">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PFgEZ_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member2Job={
            <Fragment>
              <span className="home-text174">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3vhX_Z'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member3Job={
            <Fragment>
              <span className="home-text175">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jBNHyA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member4Job={
            <Fragment>
              <span className="home-text176">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_va4XZH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member5Job={
            <Fragment>
              <span className="home-text177">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YOIzFA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member6Job={
            <Fragment>
              <span className="home-text178">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2s_cyP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member7Job={
            <Fragment>
              <span className="home-text179">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Oh6f8r'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member8Job={
            <Fragment>
              <span className="home-text180">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8T_sNc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="team11root-class-name"
          member1Content={
            <Fragment>
              <span className="home-text181">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SCSovX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member2Content={
            <Fragment>
              <span className="home-text182">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_s9r3dF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member3Content={
            <Fragment>
              <span className="home-text183">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5eDHbL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member4Content={
            <Fragment>
              <span className="home-text184">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ojS7f0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member5Content={
            <Fragment>
              <span className="home-text185">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yivc2N'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member6Content={
            <Fragment>
              <span className="home-text186">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SI0_5B'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member7Content={
            <Fragment>
              <span className="home-text187">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YlMne8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member8Content={
            <Fragment>
              <span className="home-text188">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-oAnIB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Team11>
        <a
          href="https://share.google/waGrvXCvS7FCT2dqT"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link2"
        >
          <Contact10
            content1={
              <Fragment>
                <span className="home-text189">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6ARQKN'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="home-text190">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_wKqcvZ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            location1={
              <Fragment>
                <span className="home-text191">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ww9vWW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            location2={
              <Fragment>
                <span className="home-text192">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_LB7P3M'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            location1Description={
              <Fragment>
                <span className="home-text193">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_UvhXz1'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            location2Description={
              <Fragment>
                <span className="home-text194">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_MIBFQJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            className="home-component20"
          ></Contact10>
        </a>
        <iframe
          lat="37.13916226001197"
          lng="31.191894967417984"
          src="https://www.google.com/maps?q=https://maps.app.goo.gl/weLWCjxc8oWg2wiQ7&amp;output=embed"
          address="https://maps.app.goo.gl/weLWCjxc8oWg2wiQ7"
          className="home-google-maps"
        ></iframe>
        <FAQ2
          action={
            <Fragment>
              <span className="home-text195">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NvzHp8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text196">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JVXt_Y'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text197">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_q6EyF9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          faq1Answer={
            <Fragment>
              <span className="home-text198">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PpGNQm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          faq2Answer={
            <Fragment>
              <span className="home-text199">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MDiC8F'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          faq3Answer={
            <Fragment>
              <span className="home-text200">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Rd-L03'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          faq4Answer={
            <Fragment>
              <span className="home-text201">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pHoiD-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          faq5Answer={
            <Fragment>
              <span className="home-text202">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZTDJ3i'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          faq1Question={
            <Fragment>
              <span className="home-text203">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QOlp_T'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          faq2Question={
            <Fragment>
              <span className="home-text204">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_c1h9fv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          faq3Question={
            <Fragment>
              <span className="home-text205">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NkUKQt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          faq4Question={
            <Fragment>
              <span className="home-text206">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FOYxID'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          faq5Question={
            <Fragment>
              <span className="home-text207">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qh4lth'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></FAQ2>
        <hr className="home-separator"></hr>
        <Footer4
          link1={
            <Fragment>
              <span className="home-text208">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5H18Gx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text209">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AJZCic'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text210">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XO-jXD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text211">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7x8zK9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text212">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1Kb2xp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text213">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_G_G0ug'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text214">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EbtOqc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text100 {
            display: inline-block;
          }
          .home-text101 {
            display: inline-block;
          }
          .home-text102 {
            display: inline-block;
          }
          .home-text103 {
            display: inline-block;
          }
          .home-text104 {
            display: inline-block;
          }
          .home-text105 {
            display: inline-block;
          }
          .home-text106 {
            display: inline-block;
          }
          .home-text107 {
            display: inline-block;
          }
          .home-text108 {
            display: inline-block;
          }
          .home-text109 {
            display: inline-block;
          }
          .home-text110 {
            display: inline-block;
          }
          .home-text111 {
            display: inline-block;
          }
          .home-text112 {
            display: inline-block;
          }
          .home-text113 {
            display: inline-block;
          }
          .home-text114 {
            display: inline-block;
          }
          .home-text115 {
            display: inline-block;
          }
          .home-text116 {
            display: inline-block;
          }
          .home-text117 {
            display: inline-block;
          }
          .home-text118 {
            display: inline-block;
          }
          .home-text119 {
            display: inline-block;
          }
          .home-text120 {
            display: inline-block;
          }
          .home-text121 {
            display: inline-block;
          }
          .home-text122 {
            display: inline-block;
          }
          .home-text123 {
            display: inline-block;
          }
          .home-text124 {
            display: inline-block;
          }
          .home-text125 {
            display: inline-block;
          }
          .home-text126 {
            display: inline-block;
          }
          .home-text127 {
            display: inline-block;
          }
          .home-text128 {
            display: inline-block;
          }
          .home-text129 {
            display: inline-block;
          }
          .home-text130 {
            display: inline-block;
          }
          .home-text131 {
            display: inline-block;
          }
          .home-text132 {
            display: inline-block;
          }
          .home-text133 {
            display: inline-block;
          }
          .home-text134 {
            display: inline-block;
          }
          .home-text135 {
            display: inline-block;
          }
          .home-text136 {
            display: inline-block;
          }
          .home-text137 {
            display: inline-block;
          }
          .home-text138 {
            display: inline-block;
          }
          .home-text139 {
            display: inline-block;
          }
          .home-text140 {
            display: inline-block;
          }
          .home-text141 {
            display: inline-block;
          }
          .home-text142 {
            display: inline-block;
          }
          .home-text143 {
            display: inline-block;
          }
          .home-text144 {
            display: inline-block;
          }
          .home-text145 {
            display: inline-block;
          }
          .home-text146 {
            display: inline-block;
          }
          .home-text147 {
            display: inline-block;
          }
          .home-text148 {
            display: inline-block;
          }
          .home-link1 {
            display: contents;
          }
          .home-component18 {
            text-decoration: none;
          }
          .home-text149 {
            display: inline-block;
          }
          .home-text150 {
            display: inline-block;
          }
          .home-text151 {
            display: inline-block;
          }
          .home-text152 {
            display: inline-block;
          }
          .home-text153 {
            display: inline-block;
          }
          .home-text154 {
            display: inline-block;
          }
          .home-text155 {
            display: inline-block;
          }
          .home-text156 {
            display: inline-block;
          }
          .home-text157 {
            display: inline-block;
          }
          .home-text158 {
            display: inline-block;
          }
          .home-text159 {
            display: inline-block;
          }
          .home-text160 {
            display: inline-block;
          }
          .home-text161 {
            display: inline-block;
          }
          .home-text162 {
            display: inline-block;
          }
          .home-text163 {
            display: inline-block;
          }
          .home-text164 {
            display: inline-block;
          }
          .home-text165 {
            display: inline-block;
          }
          .home-text166 {
            display: inline-block;
          }
          .home-text167 {
            display: inline-block;
          }
          .home-text168 {
            display: inline-block;
          }
          .home-text169 {
            display: inline-block;
          }
          .home-text170 {
            display: inline-block;
          }
          .home-text171 {
            display: inline-block;
          }
          .home-text172 {
            display: inline-block;
          }
          .home-text173 {
            display: inline-block;
          }
          .home-text174 {
            display: inline-block;
          }
          .home-text175 {
            display: inline-block;
          }
          .home-text176 {
            display: inline-block;
          }
          .home-text177 {
            display: inline-block;
          }
          .home-text178 {
            display: inline-block;
          }
          .home-text179 {
            display: inline-block;
          }
          .home-text180 {
            display: inline-block;
          }
          .home-text181 {
            display: inline-block;
          }
          .home-text182 {
            display: inline-block;
          }
          .home-text183 {
            display: inline-block;
          }
          .home-text184 {
            display: inline-block;
          }
          .home-text185 {
            display: inline-block;
          }
          .home-text186 {
            display: inline-block;
          }
          .home-text187 {
            display: inline-block;
          }
          .home-text188 {
            display: inline-block;
          }
          .home-link2 {
            display: contents;
          }
          .home-component20 {
            text-decoration: none;
          }
          .home-text189 {
            display: inline-block;
          }
          .home-text190 {
            display: inline-block;
          }
          .home-text191 {
            display: inline-block;
          }
          .home-text192 {
            display: inline-block;
          }
          .home-text193 {
            display: inline-block;
          }
          .home-text194 {
            display: inline-block;
          }
          .home-google-maps {
            width: 1076px;
            height: 442px;
            animation-name: none;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-text195 {
            display: inline-block;
          }
          .home-text196 {
            display: inline-block;
          }
          .home-text197 {
            display: inline-block;
          }
          .home-text198 {
            display: inline-block;
          }
          .home-text199 {
            display: inline-block;
          }
          .home-text200 {
            display: inline-block;
          }
          .home-text201 {
            display: inline-block;
          }
          .home-text202 {
            display: inline-block;
          }
          .home-text203 {
            display: inline-block;
          }
          .home-text204 {
            display: inline-block;
          }
          .home-text205 {
            display: inline-block;
          }
          .home-text206 {
            display: inline-block;
          }
          .home-text207 {
            display: inline-block;
          }
          .home-separator {
            width: 100%;
            height: 30px;
          }
          .home-text208 {
            display: inline-block;
          }
          .home-text209 {
            display: inline-block;
          }
          .home-text210 {
            display: inline-block;
          }
          .home-text211 {
            display: inline-block;
          }
          .home-text212 {
            display: inline-block;
          }
          .home-text213 {
            display: inline-block;
          }
          .home-text214 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home

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
