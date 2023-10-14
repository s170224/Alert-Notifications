import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import Notification from '../Notification'

import './index.css'

const NotificationList = [
  {
    id: 1,
    logo1: AiFillCheckCircle,
    heading1: 'Success',
    para1: 'you can access all the files in the folder',
    deleteIcon: GrFormClose,
    textColor: '#2dca73',
  },
  {
    id: 2,
    logo1: RiErrorWarningFill,
    heading1: 'Error',
    para1: 'Sorry, you are not authorized to have access to delete the file',
    deleteIcon: GrFormClose,
    textColor: '#ff0b37',
  },

  {
    id: 3,
    logo1: MdWarning,
    heading1: 'Warning',
    para1: 'Viewers of this file can see comments and suggestions',
    deleteIcon: GrFormClose,
    textColor: '#ffb800',
  },
  {
    id: 4,
    logo1: MdInfo,
    heading1: 'Info',
    para1: 'Anyone on the internet can view these files',
    deleteIcon: GrFormClose,
    textColor: '#0f172a',
  },
]

const AlertNotifications = () => (
  <div className="container3">
    <h1>Alert Notifications</h1>

    {NotificationList.map(eachItem => (
      <Notification>
        <eachItem.logo1 color={eachItem.textColor} />
        <div className="con">
          <h1 style={{color: eachItem.textColor}}> {eachItem.heading1}</h1>
          <p className="para">{eachItem.para1}</p>
        </div>
        <GrFormClose />
      </Notification>
    ))}
  </div>
)

export default AlertNotifications
