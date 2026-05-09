import { useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
// Dán trực tiếp vào đây luôn Thành ơi, khỏi import cho đỡ lỗi đường dẫn:
export interface Message {
  chatId?: string;
  id?: string;
  senderId: string;
  senderName?: string;
  content: string;
  timestamp: string;
}

export interface Chat {
  id: string;
  participantName: string;
  participantAvatar: string;
  lastMessage: string;
  messages: Message[];
}

// Kết nối tới Backend của Thành
const socket = io('http://localhost:5000');

export default function ChatSystem({ user, mode }) {
  const [chats, setChats] = useState<Chat[]>([]); // Sẽ fetch từ API sau
  const [selectedChatId, setSelectedChatId] = useState<string>('');
  const [newMessage, setNewMessage] = useState('');
  const [showMobileList, setShowMobileList] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 1. Tham gia vào phòng chat riêng khi chọn hội thoại
  useEffect(() => {
    if (selectedChatId) {
      socket.emit('join_room', selectedChatId);
    }
  }, [selectedChatId]);

  // 2. Lắng nghe tin nhắn Real-time từ Server
  useEffect(() => {
    socket.on('receive_message', (data: Message) => {
      setChats((prev) => 
        prev.map((c) => 
          c.id === data.chatId // Giả sử Message có thêm chatId
            ? { ...c, messages: [...c.messages, data], lastMessage: data.content } 
            : c
        )
      );
    });

    return () => { socket.off('receive_message'); };
  }, []);

  const selectedChat = chats.find((c) => c.id === selectedChatId);

  // Tự động cuộn xuống tin nhắn mới nhất
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedChat?.messages.length]);

  const handleSend = () => {
    if (!newMessage.trim() || !selectedChatId) return;

    const msgData = {
      chatId: selectedChatId,
      senderId: user.id, // ID của Thành từ context/localStorage
      senderName: user.name,
      content: newMessage,
      timestamp: new Date().toISOString(),
    };

    // 3. Gửi tin nhắn lên Server qua Socket
    socket.emit('send_message', msgData);

    // Cập nhật giao diện ngay lập tức
    setChats(chats.map((c) =>
      c.id === selectedChatId
        ? { ...c, messages: [...c.messages, msgData as any], lastMessage: newMessage }
        : c
    ));
    setNewMessage('');
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100" style={{ height: '80vh' }}>
      
      {/* List Chat bên trái */}
      <div className={`${showMobileList ? 'flex' : 'hidden'} md:flex flex-col w-full md:w-1/3 border-r`}>
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">Tin nhắn</h2>
          <p className="text-xs text-gray-400 mt-1">Chế độ: <span className="text-teal-600 font-bold uppercase">{mode === 'learner' ? 'Người học' : 'Gia sư'}</span></p>
        </div>
        <div className="overflow-y-auto flex-1">
          {chats.map((chat) => (
            <button 
              key={chat.id} 
              onClick={() => { setSelectedChatId(chat.id); setShowMobileList(false); }}
              className={`w-full p-4 flex gap-3 hover:bg-gray-50 transition-all ${selectedChatId === chat.id ? 'bg-teal-50/50 border-r-4 border-teal-600' : ''}`}
            >
              <img src={chat.participantAvatar} className="w-12 h-12 rounded-2xl object-cover" />
              <div className="text-left flex-1 min-w-0">
                <h4 className="font-bold text-sm truncate">{chat.participantName}</h4>
                <p className="text-xs text-gray-500 truncate">{chat.lastMessage}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Cửa sổ Chat bên phải */}
      <div className={`${!showMobileList ? 'flex' : 'hidden'} md:flex flex-col flex-1 bg-gray-50/30`}>
        {selectedChat ? (
          <>
            {/* Header chat */}
            <div className="p-4 bg-white border-b flex items-center gap-4">
              <button onClick={() => setShowMobileList(true)} className="md:hidden text-gray-400"><X /></button>
              <img src={selectedChat.participantAvatar} className="w-10 h-10 rounded-full object-cover" />
              <h3 className="font-bold text-gray-800">{selectedChat.participantName}</h3>
            </div>

            {/* Vùng tin nhắn */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {selectedChat.messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.senderId === user.id ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] p-3 rounded-2xl text-sm shadow-sm ${
                    msg.senderId === user.id 
                    ? 'bg-teal-600 text-white rounded-br-none' 
                    : 'bg-white text-gray-700 border rounded-bl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Ô nhập tin nhắn */}
            <div className="p-4 bg-white border-t">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Nhập tin nhắn..."
                  className="flex-1 bg-gray-100 border-none rounded-2xl px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                />
                <button 
                  onClick={handleSend}
                  className="bg-teal-600 text-white p-3 rounded-2xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-100"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400 italic">Chọn một người để bắt đầu trao đổi tri thức 📚</div>
        )}
      </div>
    </div>
  );
}