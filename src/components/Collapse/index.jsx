import { useState } from 'react'
import UpChevron from '../../assets/upchevron.png'
import DownChevron from '../../assets/downchevron.png'

function Collapse(props) {
  const [openedCollapse, setOpenedCollapse] = useState(false)

  function toggleCollapse() {
    openedCollapse ? setOpenedCollapse(false) : setOpenedCollapse(true)
  }

  const animHeightCollapse = openedCollapse
    ? 'collapse__content open'
    : 'collapse__content'

  return (
    <div className={props.globalClassName}>
      <div className="collapse__title" onClick={toggleCollapse}>
        <p>{props.title}</p>
        {openedCollapse ? (
          <img src={UpChevron} alt="Chevron vers le haut" />
        ) : (
          <img src={DownChevron} alt="Chevron vers le bas" />
        )}
      </div>
      <div className={animHeightCollapse}>
        {Array.isArray(props.content) ? (
          <ul>
            {props.content.map((element, index) => (
              <li key={`${element}-${index}`}>{element}</li>
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
