import { useState } from 'react'
import LeftArrow from '../../assets/left-arrow.png'
import RightArrow from '../../assets/right-arrow.png'

function Slideshow(props) {
  const numberOfPictures = props.pictures.length
  const [currentPictureNumber, setCurrentPictureNumber] = useState(1)
  const [translateValue, setTranslateValue] = useState(0)

  function moveToPreviousPicture() {
    if (currentPictureNumber === 1) {
      setCurrentPictureNumber(numberOfPictures)
      setTranslateValue((numberOfPictures - 1) * -100)
    } else {
      setCurrentPictureNumber(currentPictureNumber - 1)
      setTranslateValue((currentPictureNumber - 2) * -100)
    }
  }

  function moveToNextPicture() {
    if (currentPictureNumber === numberOfPictures) {
      setCurrentPictureNumber(1)
      setTranslateValue(0)
    } else {
      setCurrentPictureNumber(currentPictureNumber + 1)
      setTranslateValue(currentPictureNumber * -100)
    }
  }

  return (
    <div className="slideshow">
      {/* <img src={props.pictures[2]} alt="logement" /> */}
      {props.pictures.map((picture, index) => (
        <img
          key={`${picture}-${index}`}
          src={picture}
          alt={`N°${index} du logement`}
          style={{ transform: `translateX(${translateValue}%)` }}
        />
      ))}
      {numberOfPictures === 1 ? (
        ''
      ) : (
        <div>
          <span
            className="slideshow__left-arrow"
            onClick={moveToPreviousPicture}
          >
            <img
              src={LeftArrow}
              alt="Flèche cliquable pour passer à la précedente"
            />
          </span>
          <span className="slideshow__right-arrow" onClick={moveToNextPicture}>
            <img
              src={RightArrow}
              alt="Flèche cliquable pour passer à la suivante"
            />
          </span>
        </div>
      )}
      <span className="slideshow__counter">
        {`${currentPictureNumber}/${numberOfPictures}`}
      </span>
    </div>
  )
}

export default Slideshow
