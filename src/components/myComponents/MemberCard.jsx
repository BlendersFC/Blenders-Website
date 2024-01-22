import React from "react"
import PropTypes from "prop-types"
import * as styles from "../../styles/MemberCard.module.css"

// Import images directly
import image1 from "../../images/placeholder.png"
import image2 from "../../images/placeholder.png"
import image3 from "../../images/placeholder.png"
import image4 from "../../images/placeholder.png"
import image5 from "../../images/placeholder.png"
import image6 from "../../images/placeholder.png"
import image7 from "../../images/placeholder.png"
import image8 from "../../images/placeholder.png"

const MemberCard = ({ name, description, imageNumber }) => {
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
      case 8:
        return image8
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
        <h3>{name}</h3>
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
