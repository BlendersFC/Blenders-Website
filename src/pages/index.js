import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MemberCard from "../components/MemberCard/MemberCard"
import InfoSection from "../components/InfoSection/InfoSection"
import * as styles from "../styles/index.module.css"
import { FaGithub, FaInstagram } from "react-icons/fa"

const teamMembers = [
  {
    name: "Marlene Cobian",
    description: "Mechatronics Engineer",
    imageNumber: 1,
    linkedinUrl: "https://www.linkedin.com/in/marlene-cobian/",
  },
  {
    name: "Vicente Ruiz",
    description: "Mechatronics Eng. Student",
    imageNumber: 2,
    linkedinUrl: "https://www.linkedin.com/in/vicenteimt2023/",
  },
  {
    name: "Lizette Cruz",
    description: "Mechatronics Eng. Student",
    imageNumber: 3,
    linkedinUrl: "linkedin.com/in/lizette-cruz-rodríguez-2b2b7427b",
  },
  {
    name: "Ricardo Berumen",
    description: "Mechatronics Eng. Student",
    imageNumber: 4,
    linkedinUrl: "https://www.linkedin.com/in/ricardo-berumen-arellano/",
  },
  {
    name: "Montserrat Ballesteros",
    description: "Mechatronics Eng. Student",
    imageNumber: 5,
    linkedinUrl: "https://www.linkedin.com/in/montserratballesterosherrera/",
  },
  {
    name: "Iker Casillas",
    description: "Computer Science Student",
    imageNumber: 6,
    linkedinUrl: "https://www.linkedin.com/in/ikercasillass/",
  },
  {
    name: "Pedro Deniz",
    description: "Mechatronics Engineer",
    imageNumber: 7,
    linkedinUrl: "https://www.linkedin.com/in/pedro-deniz/",
  },
]

const IndexPage = () => (
  <Layout>
    <div>
      <div className={styles.textCenter}>
        <h1 className={styles.title}>
          Welcome to <b>Blenders FC!</b>
        </h1>
        <div>
          <p className={styles.description}>
            We are a passionate Mexican robotics team based in Guadalajara,
            Mexico. Preparing for potential entry into the RoboCup Humanoid
            League KidSize Soccer division. Within this website, we proudly
            share our ongoing advancements, innovative pursuits, and the
            collective spirit that defines us. 🤖⚽🥅
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
          text="Witness the magic of the only team that could sign Lionel Mechssi and Cristiano Robonaldo"
          imageNumber={1}
          reverse={false}
        />
        <InfoSection
          text="We're proudly representing Tecnológico de Monterrey"
          imageNumber={2}
          reverse={true}
        />
        <InfoSection
          text="We actively participated in the Mexican Tournament of Robotics 2023"
          imageNumber={3}
          reverse={false}
        />
        <InfoSection
          text="Join our journey to conquer the RoboCup championship!"
          imageNumber={4}
          reverse={true}
        />
      </div>

      <div className={styles.memberSection}>
        <h2 className={styles.memberSectionTitle} id="meet-team">
          Meet the Team!
        </h2>

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
      </div>
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
