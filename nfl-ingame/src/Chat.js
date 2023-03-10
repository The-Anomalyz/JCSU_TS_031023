import React, { useState, useEffect } from 'react'
import io from "socket.io-client";
import './Chat.css'

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const socket = io("http://localhost:3000");

  useEffect(() => {
    // Listen for new messages
    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = { user: username, message: message };
    // Emit the message to the server
    socket.emit("chat message", newMessage);
  setMessages((prevMessages) => [...prevMessages, newMessage]); // add the new message to the messages array
  setMessage("");
  };
  return (
    <div className="chat-container">
      <h3>Get Side Chatty</h3>
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className="message">
            <span className="user">{msg.user}: </span>
            {msg.message}
          </div>
        ))}
      </div>
      <form >
        <div className='form-cont'>
        <div>
        <h5>Name:</h5>
        <input className='chat-container-input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
        <h5>Message:</h5>
        <textarea className='chat-container-textarea' value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        </div>
        <div> <button className='chat-btn' type="submit" onClick={handleSubmit}>Send</button></div>
      </form>
    </div>
  )
}

export default Chat
