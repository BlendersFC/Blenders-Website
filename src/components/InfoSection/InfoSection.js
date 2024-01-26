import React from "react"
import PropTypes from "prop-types"
import * as styles from "./InfoSection.module.css"

import image1 from "../../images/TMR-1.jpg"
import image2 from "../../images/TMR-2.jpg"
import image3 from "../../images/TMR-3.jpg"
import image4 from "../../images/TMR-4.jpg"

const InfoSection = ({ text, imageNumber, reverse }) => {
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
      default:
        return null
    }
  }

  const imageUrl = getImageSource()

  return (
    <div className={`${styles.container} ${reverse ? styles.reverse : ""}`}>
      <h2 className={styles.text}>{text}</h2>
      <div className={styles.rectangle}>
        {imageUrl && <img src={imageUrl} alt="" className={styles.img} />}
      </div>
    </div>
  )
}

InfoSection.propTypes = {
  text: PropTypes.string.isRequired,
  imageNumber: PropTypes.string.isRequired,
  reverse: PropTypes.bool, // Optional prop to determine if the order should be reversed
}

export default InfoSection
