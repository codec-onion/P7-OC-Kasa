import { useState } from 'react'
import UpChevron from '../../assets/upchevron.png'
import DownChevron from '../../assets/downchevron.png'

function Collapse(props) {
  const [openedCollapse, setOpenedCollapse] = useState(false)

  function toggleCollapse() {
    openedCollapse ? setOpenedCollapse(false) : setOpenedCollapse(true)
  }

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
      {openedCollapse ? (
        <p className={props.contentClassName}>{props.content}</p>
      ) : (
        ''
      )}
    </div>
  )
}

export default Collapse
