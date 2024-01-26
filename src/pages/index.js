import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MemberCard from "../components/MemberCard/MemberCard"
import InfoSection from "../components/InfoSection/InfoSection"
import * as styles from "../styles/index.module.css"
import { FaGithub, FaInstagram } from "react-icons/fa"

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const teamMembers = [
  {
    name: "Marlene Cobian",
    description: "Mechatronics Engineer",
    imageNumber: 1,
  },
  {
    name: "Vicente Ruiz",
    description: "Mechatronics Eng. Student",
    imageNumber: 2,
  },
  {
    name: "Lizette Cruz",
    description: "Mechatronics Eng. Student",
    imageNumber: 3,
  },
  {
    name: "Ricardo Berumen",
    description: "Mechatronics Eng. Student",
    imageNumber: 4,
  },
  {
    name: "Montserrat Ballesteros",
    description: "Mechatronics Eng. Student",
    imageNumber: 5,
  },
  {
    name: "Iker Casillas",
    description: "Computer Science Student",
    imageNumber: 6,
  },
  {
    name: "Pedro Deniz",
    description: "Mechatronics Engineer",
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
          <div className={styles.iconContainer}>
            <a
              href="https://github.com/BlendersFC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/robotec.gdl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={styles.icon} />
            </a>
          </div>
        </div>
      </div>

      <br></br>

      <div className={styles.mainSection}>
        <InfoSection
          text="AAAAAAAAAAAAAAAAAAAAAAAA"
          imageNumber={1}
          reverse={false}
        />
        <InfoSection
          text="AAAAAAAAAAAAAAAAAAAAAA"
          imageNumber={2}
          reverse={true}
        />
        <InfoSection
          text="Participation in Mexican Tournament of Robotics 2023"
          imageNumber={3}
          reverse={false}
        />
        <InfoSection
          text="AAAAAAAAAAAAAAAAAAAAAAAAAA"
          imageNumber={4}
          reverse={true}
        />
      </div>

      <div className={styles.memberSection}>
        <h2 id="meet-team">Meet the Team!</h2>

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
      {/* {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}${utmParameters}`}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))} */}
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
