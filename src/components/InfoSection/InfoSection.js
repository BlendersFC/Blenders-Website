import React, { useState } from "react"
import PropTypes from "prop-types"
import * as styles from "./InfoSection.module.css"
import { useInView } from "react-intersection-observer"
import image1 from "../../images/TMR-1.jpg"
import image2 from "../../images/TMR-2.jpg"
import image3 from "../../images/TMR-3.jpg"
import image4 from "../../images/TMR-4.jpg"

const InfoSection = ({ text, imageNumber, reverse }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

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
    <div
      ref={ref}
      className={`${styles.container} ${reverse ? styles.reverse : ""} ${
        inView ? styles.visible : ""
      }`}
    >
      <h2 className={styles.text}>{text}</h2>
      <div className={styles.rectangle}>
        {imageUrl && <img src={imageUrl} alt="" className={styles.img} />}
      </div>
    </div>
  )
}

InfoSection.propTypes = {
  text: PropTypes.string.isRequired,
  imageNumber: PropTypes.number.isRequired,
  reverse: PropTypes.bool,
}

export default InfoSection
