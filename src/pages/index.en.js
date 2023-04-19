import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BookingButton } from "../components/buttons"

const Index = props => {
  const images = useStaticQuery(graphql`
    query {
      tumee: file(
        relativePath: {
          eq: "tumee-bayanbileg-english-speaking-therapist-in-tokyo-beyondbleu.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout {...props}>
      <SEO
        title="Psychotherapy for Trauma, Depression &amp; Anxiety in Tokyo"
        description="Psychotherapy for trauma, depression, anxiety, relationship issues &amp; general struggles of modern life."
      />
      <header className="home-header py-6 md:py-16 flex items-center">
        <div className="container relative">
          <div className="lg:flex items-center">
            <div className="lg:w-2/3">
              <div className="max-w-xl mx-auto">
                <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-light">
                  Psychotherapy for testing
                  <br />
                  <span className="font-bold">trauma</span>,{" "}
                  <span className="font-bold">depression</span>,{" "}
                  <span className="font-bold">anxiety</span>, relationship
                  issues &amp; general struggles of modern life.
                </h1>
              </div>
            </div>
            <div className="lg:w-1/3 mb-6 lg:mb-0">
              <Img
                fluid={images.tumee.childImageSharp.fluid}
                className="mx-auto max-w-lg shadow-xl"
                alt="Tumee Bayanbileg - English Speaking Therapist in Tokyo"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 pt-10 text-center">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-0">
              Most of us reach a point in our lives when we begin to feel that
              it is time for change, but when we recognize how difficult it is
              to alter our existing patterns of thinking and behaviors we tend
              to give up. This in turn leads to further avoidance, fears,
              disappointments, and decreased motivation. Ultimately these
              experiences can leave you feeling anxious or depressed, lead to
              difficulties in relationships, and have you living an unhappy
              life. Although it may feel like a dead end, in reality there are
              many ways in which you could be helped. Psychotherapy is a process
              through which you can explore your issues, improve insight into
              what is holding you back, and develop efficient ways to deal with
              your problems.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-gray-400 max-w-6xl mx-auto" />

      <section className="py-20 text-center relative">
        <div className="container">
          <div className="xl:flex items-center py-0">
            <div className="xl:w-1/3 p-5">
              <h3 className="mb-2 text-xl">
                <FontAwesomeIcon icon="globe-asia" className=" text-2xl" />{" "}
                PSYCHOTHERAPY JAPAN. LLC
              </h3>
              <div className="uppercase">Counseling &amp; Consulting</div>
            </div>
            <div className="xl:w-1/3 p-5">
              <a href="tel:03-5962-3883" className="no-underline">
                <h3 className="mb-2 text-2xl">
                  <FontAwesomeIcon icon="phone" /> 03-5962-3883
                </h3>
                <div className="uppercase">CALL NOW</div>
              </a>
            </div>
            <div className="xl:w-1/3 p-5">
              <a href="mailto:info@beyondbleu.com" className="no-underline">
                <h3 className="mb-2 text-2xl">
                  <FontAwesomeIcon icon="envelope" /> info@beyondbleu.com
                </h3>
                <div className="uppercase">E-MAIL ME</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-400 max-w-6xl mx-auto" />

      <section className="py-32 text-center">
        <div className="container">
          <div className="text-center">
            <h2>What my clients are saying...</h2>
          </div>
          <div className="lg:flex items-center py-3">
            <div className="lg:w-1/3 p-5">
              <p className="mb-0 text-lg text-gray-900">
                <FontAwesomeIcon
                  icon="quote-left"
                  className="text-gray-400 mb-2"
                />{" "}
                Thank you – in a big way. I’m struggling to find the words to
                express my gratitude. Thank you for helping me find my smile
                again and teaching me about how to pursue real happiness. These
                last few sessions have made me feel great as I’ve realized that
                I’ve accomplished a lot with you.{" "}
                <FontAwesomeIcon
                  icon="quote-right"
                  className="text-gray-400 mb-2"
                />
              </p>
            </div>
            <div className="lg:w-1/3 p-5">
              <p className="mb-0 text-lg text-gray-900">
                <FontAwesomeIcon
                  icon="quote-left"
                  className="text-gray-400 mb-2"
                />{" "}
                Excellent therapist and person! Excellent service and really
                really helpful session where the therapist actually shows she
                cares.{" "}
                <FontAwesomeIcon
                  icon="quote-right"
                  className="text-gray-400 mb-2"
                />
              </p>
            </div>
            <div className="lg:w-1/3 p-5">
              <p className="mb-0 text-lg text-gray-900">
                <FontAwesomeIcon
                  icon="quote-left"
                  className="text-gray-400 mb-2"
                />{" "}
                Understanding therapist! Very understanding therapist. Took the
                time to listen and understand the situation – Flexible about
                timing, location (via Zoom if needed) – Offering extra or
                follow-ups when needed.{" "}
                <FontAwesomeIcon
                  icon="quote-right"
                  className="text-gray-400 mb-2"
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 pt-0">
        <div className="container">
          <h2 className="text-5xl text-center">
            Book a therapy session, today.
          </h2>
          <p className="text-center max-w-lg mx-auto text-lg">
            Whether you're struggling with anxiety, depression, low self-esteem,
            or relationship troubles, I can help.
          </p>
          <div className="text-center">
            <BookingButton />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
