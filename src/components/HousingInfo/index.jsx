function HousingInfo(props) {
  return (
    <div className="housing-info">
      <h1>{props.housingTitle}</h1>
      <p>{props.housingLocation}</p>
      {props.housingTags.map((element, index) => (
        <span key={`${element}-${index}`}>{element}</span>
      ))}
    </div>
  )
}

export default HousingInfo
