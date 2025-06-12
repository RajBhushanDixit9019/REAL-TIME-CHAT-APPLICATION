import { useEffect, useRef } from 'react';

function ChatWindow({ messages }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`chat-message ${msg.sender === 'You' ? 'self' : 'other'}`}
        >
          <div className="bubble">
            <span className="text">{msg.text}</span>
          </div>
        </div>
      ))}
      <div ref={endRef} />
    </div>
  );
}

export default ChatWindow;