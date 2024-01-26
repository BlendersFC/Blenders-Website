import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MemberCard from "../components/MemberCard/MemberCard"
import InfoSection from "../components/InfoSection/InfoSection"
import * as styles from "../styles/index.module.css"

// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//   },
//   {
//     text: "Examples",
//     url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
//     description:
//       "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//   },
// ]

// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ]

const moreLinks = [
  { text: "Github", url: "https://github.com/BlendersFC" },
  // {
  //   text: "Documentation",
  //   url: "https://gatsbyjs.com/docs/",
  // },
  // {
  //   text: "Starters",
  //   url: "https://gatsbyjs.com/starters/",
  // },
  // {
  //   text: "Showcase",
  //   url: "https://gatsbyjs.com/showcase/",
  // },
  // {
  //   text: "Contributing",
  //   url: "https://www.gatsbyjs.com/contributing/",
  // },
  // { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const teamMembers = [
  {
    name: "Marlene Cobian",
    description: "Lead Developer",
    imageNumber: 1,
  },
  {
    name: "Vicente Ruiz",
    description: "Lead Developer",
    imageNumber: 2,
  },
  {
    name: "Lizette Cruz",
    description: "Lead Developer",
    imageNumber: 3,
  },
  {
    name: "Ricardo Berumen",
    description: "Lead Developer",
    imageNumber: 4,
  },
  {
    name: "Montserrat Ballesteros",
    description: "Lead Developer",
    imageNumber: 5,
  },
  {
    name: "Iker Casillas",
    description: "Lead Developer",
    imageNumber: 6,
  },
  {
    name: "Pedro Deniz",
    description: "Lead Developer",
    imageNumber: 7,
  },
]

const IndexPage = () => (
  <Layout>
    <div>
      <div className={styles.textCenter}>
        <h1>
          Welcome to <b>Blenders FC!</b>
        </h1>
        <div>
          <p className={styles.description}>
            A Mexican robotics team preparing for potential entry into the
            RoboCup Humanoid League KidSize Soccer division. Within this
            account, we present our ongoing advancements, innovative pursuits,
            and collective endeavors. 🤖 ⚽ 🥅
          </p>
        </div>
      </div>

      <br></br>

      <div className={styles.mainSection}>
        <InfoSection
          text="We love to learn and share thoughtful contents"
          imageNumber={1}
          reverse={false}
        />
        <InfoSection
          text="We try to have fun with science"
          imageNumber={2}
          reverse={true}
        />
        <InfoSection
          text="Honorable mention in Mexican Tournament of Robotics 2023"
          imageNumber={3}
          reverse={false}
        />
        <InfoSection text="Hola" imageNumber={4} reverse={true} />
      </div>

      <div className={styles.memberSection}>
        <h2>Meet the Team!</h2>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className={styles.memberContainer}>
            {teamMembers.map(
              (member, index) =>
                // Render pairs of member cards
                index % 2 === 0 && (
                  <div key={index} className={styles.memberCardGroup}>
                    <MemberCard {...teamMembers[index]} />

                    {index + 1 < teamMembers.length && (
                      <MemberCard {...teamMembers[index + 1]} />
                    )}
                  </div>
                )
            )}
          </div>
        </div>

        <br></br>

        {/* <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p> */}
      </div>
      {/* <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul> */}
      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}${utmParameters}`}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
