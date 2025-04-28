import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaPaperPlane, FaEllipsisV, FaImage } from 'react-icons/fa';
import { useState } from 'react';

const ChatPage = () => {
  const { conversationId } = useParams();

  // Mock data - replace with API calls
  const conversation = {
    id: '1',
    user: {
      name: 'Marie Dubois',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      online: true
    },
    messages: [
      {
        id: '1',
        text: 'Hi there! I need help with my wiring',
        sender: 'them',
        time: '10:00 AM'
      },
      {
        id: '2',
        text: 'Hello Marie! I can help with that. When are you available?',
        sender: 'me',
        time: '10:05 AM'
      },
      {
        id: '3',
        text: 'Thanks for the quick response! How about tomorrow at 2pm?',
        sender: 'them',
        time: '10:10 AM'
      },
      {
        id: '4',
        text: 'That works for me. I\'ll send you the address details shortly.',
        sender: 'me',
        time: '10:15 AM'
      },
      {
        id: '5',
        text: 'Perfect, thanks!',
        sender: 'them',
        time: '10:30 AM'
      }
    ]
  };

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      // Add message sending logic here
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-[#F9FAFB]">
      {/* Chat Sidebar (hidden on mobile when chat is open) */}
      <div className="hidden md:block w-96 bg-white border-r border-gray-200">
        {/* Same as MessagesPage sidebar */}
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center p-4 border-b border-gray-200 bg-white">
          <Link to="/messages" className="md:hidden mr-4 text-[#1E293B]">
            <FaArrowLeft size={20} />
          </Link>
          <div className="flex items-center flex-1">
            <div className="relative mr-3">
              <img
                src={conversation.user.avatar}
                alt={conversation.user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              {conversation.user.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div>
              <h2 className="font-semibold text-[#1E293B]">{conversation.user.name}</h2>
              <p className="text-xs text-gray-500">
                {conversation.user.online ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
          <button className="text-gray-500 hover:text-[#1E293B]">
            <FaEllipsisV />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="space-y-4">
            {conversation.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${message.sender === 'me' ? 'bg-[#1E40AF] text-white' : 'bg-white border border-gray-200'}`}
                >
                  <p>{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'me' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <form onSubmit={handleSendMessage} className="flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2 rounded-r-lg transition"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;