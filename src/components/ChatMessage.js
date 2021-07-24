import moment from 'moment';

const ChatMessage = (props) => {
    // Desestructuracion
    const { text, uid, photoURL, createdAt } = props.message;
    
    // Las fechas en Firebase se almacenan en formato "EPOCH"
    const messageClass = uid === props.auth.currentUser.uid ? 'sent' : 'received';
    let date = new Date()
    date.setUTCSeconds(createdAt ? createdAt.seconds : date)
    date = moment(date).format('DD/MM, hh:mm a')

    return <div className={messageClass === 'sent' ? 'containerMessageSent': 'containerMessageReceived' }>
      <div className={"dateChat"}><span>{date}</span></div>
      <div className={`message ${messageClass}`}>
        <img src={photoURL} alt="Profile"/>
        <p>{text}</p>
      </div>
    </div>
  }

export default ChatMessage