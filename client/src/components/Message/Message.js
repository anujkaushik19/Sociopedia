import classes from './Message.css'
import {format} from "timeago.js"

function Message({message,own}) {
  console.log('id is',own)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={own? 'message own':'message'}>
        <div className='messageTop'>
            <img src={PF + 'person/2.jpeg'} alt=""  className='messageImg'/>
            <p className='messageText'>{message.text}</p>
        </div>
        <div className='messageBottom' >{format(message.createdAt)}</div>
    </div>
  )
}

export default Message