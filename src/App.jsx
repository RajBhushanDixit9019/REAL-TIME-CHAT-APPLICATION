import { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import './App.css';

const conversations = [
  { id: 1, name: 'General', members: 15, lastMessage: 'Hey everyone! 👋', time: '2 min ago', unread: 3 },
  { id: 2, name: 'Project Alpha', members: 8, lastMessage: 'Updated the documentation', time: '1 hour ago', unread: 0 },
  { id: 3, name: 'Random', members: 23, lastMessage: 'Anyone up for lunch?', time: '3 hours ago', unread: 1 },
  { id: 4, name: 'Design Team', members: 6, lastMessage: 'New mockups are ready', time: '5 hours ago', unread: 0 }
];

function App() {
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(conversations[0]);

  const handleSend = (message) => {
    setMessages((prev) => [...prev, { id: Date.now(), text: message, sender: 'You' }]);
  };

  return (
    <div className="chat-app">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="user-profile">
            <div className="user-avatar">🧑‍💼
              <span className="status-indicator status-online"></span>
            </div>
            <div>
              <div className="username">Alice Johnson</div>
              <div className="status">Online</div>
            </div>
          </div>
        </div>

        <div className="search-bar">
          <input
            className="search-input"
            placeholder="Search chats..."
            type="text"
          />
          <div className="search-icon">🔍</div>
        </div>

        <div className="tab-nav">
          <button className="tab-button active"># Rooms (4)</button>
          <button className="tab-button inactive">👥 Users (6)</button>
        </div>

        <div className="chat-list chat-scrollbar">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              className={`chat-item ${selectedUser.id === conv.id ? 'active' : ''}`}
              onClick={() => setSelectedUser(conv)}
            >
              <div className="chat-avatar">{conv.name[0]}</div>
              <div className="tile-info" style={{flex: 1}}>
                <div className="tile-header" style={{display: 'flex', justifyContent: 'space-between'}}>
                  <div className="tile-name">{conv.name}</div>
                  <div className="tile-time">{conv.time}</div>
                </div>
                <div className="tile-msg">{conv.lastMessage}</div>
                <div className="tile-meta" style={{display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem'}}>
                  <span className="tile-members">{conv.members} members</span>
                  {conv.unread > 0 && <span className="unread-badge">{conv.unread}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="chat-area">
        <div className="chat-header whatsapp-header">
          <div className="header-left" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="chat-avatar">{selectedUser.name[0]}</div>
            <div className="chat-title">
              <div className="chat-name">{selectedUser.name}</div>
              <div className="chat-subtitle">{selectedUser.members} members • 4 online</div>
            </div>
          </div>
          <div className="header-right">📞 🎥 ⋮</div>
        </div>

        <ChatWindow messages={messages} />

        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
}

export default App;
