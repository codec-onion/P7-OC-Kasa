import { useState } from 'react'
import UpChevron from '../../assets/upchevron.png'
import DownChevron from '../../assets/downchevron.png'

function Collapse(props) {
  const [openedCollapse, setOpenedCollapse] = useState(false)

  function toggleCollapse() {
    openedCollapse ? setOpenedCollapse(false) : setOpenedCollapse(true)
  }

  const animHeightCollapse = openedCollapse
    ? `${props.contentClassName} open`
    : `${props.contentClassName}`

  // useEffect(() => {
  //   console.log(document.querySelector(`#${props.id}`))
  // }, [])

  return (
    <div className={props.globalClassName}>
      <div className={props.titleClassName} onClick={toggleCollapse}>
        {props.title}
        {openedCollapse ? (
          <img src={UpChevron} alt="Chevron vers le haut" />
        ) : (
          <img src={DownChevron} alt="Chevron vers le bas" />
        )}
      </div>
      <div
        className={animHeightCollapse}
        // id={props.id}
      >
        {Array.isArray(props.content) ? (
          <ul>
            {props.content.map((element) => (
              <li>{element}</li>
            ))}
          </ul>
        ) : (
          <p>{props.content}</p>
        )}
      </div>
    </div>
  )
}

export default Collapse
