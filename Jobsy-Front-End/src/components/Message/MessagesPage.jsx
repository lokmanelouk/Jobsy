import { Link } from 'react-router-dom';
import { FaSearch, FaEllipsisV } from 'react-icons/fa';

const MessagesPage = () => {
  // Mock conversations data
  const conversations = [
    {
      id: '1',
      user: {
        name: 'Marie Dubois',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        online: true
      },
      lastMessage: {
        text: 'Thanks for the quick service!',
        time: '10:30 AM',
        unread: false
      }
    },
    {
      id: '2',
      user: {
        name: 'Jean Martin',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        online: false
      },
      lastMessage: {
        text: 'Can you come tomorrow instead?',
        time: 'Yesterday',
        unread: true
      }
    },
    // Add more conversations...
  ];

  return (
    <div className="flex h-screen bg-[#F9FAFB]">
      {/* Sidebar */}
      <div className="w-full md:w-96 bg-white border-r border-gray-200">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-[#1E293B]">Messages</h1>
          <div className="relative mt-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search messages"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="overflow-y-auto h-[calc(100vh-120px)]">
          {conversations.map((conversation) => (
            <Link
              key={conversation.id}
              to={`/messages/${conversation.id}`}
              className={`flex items-center p-4 border-b border-gray-200 hover:bg-gray-50 ${conversation.lastMessage.unread ? 'bg-blue-50' : ''}`}
            >
              <div className="relative mr-3">
                <img
                  src={conversation.user.avatar}
                  alt={conversation.user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {conversation.user.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[#1E293B]">{conversation.user.name}</h3>
                  <span className={`text-xs ${conversation.lastMessage.unread ? 'text-[#1E40AF] font-bold' : 'text-gray-500'}`}>
                    {conversation.lastMessage.time}
                  </span>
                </div>
                <p className={`text-sm truncate ${conversation.lastMessage.unread ? 'font-semibold text-[#1E293B]' : 'text-gray-600'}`}>
                  {conversation.lastMessage.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Empty State (for mobile) */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50">
        <div className="text-center p-6">
          <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
          <h3 className="text-lg font-medium text-[#1E293B]">Select a conversation</h3>
          <p className="text-gray-500 mt-1">Choose a chat to start messaging</p>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;