function Slideshow(props) {
  return (
    <div className="slideshow">
      <img src={props.pictures[2]} alt="logement" />
      {/* {props.pictures.map((picture, index) => (
        <img
          key={`${picture}-${index}`}
          src={picture}
          alt={`N°${index} du logement`}
        />
      ))} */}
    </div>
  )
}

export default Slideshow
