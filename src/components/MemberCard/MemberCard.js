import React from "react"
import PropTypes from "prop-types"
import * as styles from "./MemberCard.module.css"

// Import images directly
import image1 from "../../images/profile-mar.jpg"
import image2 from "../../images/profile-vicente.jpg"
import image3 from "../../images/profile-liz.jpg"
import image4 from "../../images/profile-ricardo.jpg"
import image5 from "../../images/profile-montse.jpg"
import image6 from "../../images/profile-iker.jpg"
import image7 from "../../images/profile-pedro.jpg"

const MemberCard = ({ name, description, imageNumber, linkedinUrl }) => {
  const getImageSource = () => {
    switch (imageNumber) {
      case 1:
        return image1
      case 2:
        return image2
      case 3:
        return image3
      case 4:
        return image4
      case 5:
        return image5
      case 6:
        return image6
      case 7:
        return image7
      default:
        return null
    }
  }

  const imageUrl = getImageSource()

  return (
    <div className={styles.memberCard}>
      <div className={styles.roundedImage}>
        {imageUrl && <img src={imageUrl} alt="" width={100} height={100} />}
      </div>
      <div className={styles.memberInfo}>
        {/* Use an anchor tag to make the name a clickable link */}
        <h3>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedInLink}
          >
            {name}
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageNumber: PropTypes.number.isRequired,
}

export default MemberCard
