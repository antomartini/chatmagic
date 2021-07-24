import { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";

function ChatRoom(props) {
    const chatView = useRef();

    // Referencia a una coleccion de firestore
    // Una coleccion es un conjunto de documentos que contienen datos
    const messagesRef = props.firestore.collection('messages');

    // Query para documentos en una coleccion
    const query = messagesRef.orderBy('createdAt').limit(25);

    // Escuchar data con un hook
    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');


    const sendMessage = async (e) => {
        // Cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.
        e.preventDefault();

        const { uid, photoURL } = props.auth.currentUser;

        //Agrega un mensaje a la coleccion
        await messagesRef.add({
            text: formValue,
            createdAt: props.firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        chatView.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (<>
        <main>
            {messages && messages.map(msg => <ChatMessage auth={props.auth} key={msg.id} message={msg} />)}
            <span ref={chatView}></span>
        </main>
        <form onSubmit={sendMessage}>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Say something nice :)" />
            <button className={'buttonFormContainer'} type="submit" disabled={!formValue}>
                <span className={'buttonForm'}>🐞</span>
            </button>
        </form>
    </>)
}


export default ChatRoom