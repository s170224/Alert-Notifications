import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <li className="li-container">
      <GrFormClose />
      <diV className="container">{children}</diV>
      <GrFormClose />
    </li>
  )
}

export default Notification
