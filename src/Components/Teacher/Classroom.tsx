import { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, ScreenShare, MessageSquare, Users, Settings, LogOut, X } from 'lucide-react';

export default function Classroom({ session, onLeave }) {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  return (
    <div className="fixed inset-0 bg-gray-900 z-[100] flex flex-col font-sans">
      {/* Header Phòng học */}
      <div className="h-16 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="bg-teal-600 p-2 rounded-lg">
            <Video className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-white font-bold text-sm leading-none">{session.subject}</h2>
            <p className="text-gray-400 text-[11px] mt-1">Gia sư: {session.tutor} • Đang diễn ra</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 text-red-500 rounded-full text-xs font-bold animate-pulse">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div> REC
          </div>
          <button onClick={onLeave} className="p-2 hover:bg-gray-700 rounded-lg text-gray-400">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden p-4 gap-4">
        {/* Khu vực trung tâm: Chia sẻ màn hình / Whiteboard */}
        <div className="flex-1 bg-gray-800 rounded-3xl relative overflow-hidden flex items-center justify-center border border-gray-700">
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-gray-600">
              <ScreenShare className="w-8 h-8 text-gray-500" />
            </div>
            <p className="text-gray-400 text-sm font-medium">Bảng trắng / Màn hình đang chia sẻ</p>
            <button className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-xl text-xs font-bold hover:bg-teal-700 transition-all">
              Bắt đầu trình chiếu
            </button>
          </div>
        </div>

        {/* Sidebar: Camera Gia sư & Học viên */}
        <div className="w-72 flex flex-col gap-4">
          {/* Màn hình Gia sư */}
          <div className="aspect-video bg-gray-800 rounded-2xl border border-gray-700 relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" 
              className="w-full h-full object-cover"
              alt="Tutor Camera"
            />
            <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-md rounded-lg text-[10px] text-white font-bold">
              Gia sư (Bạn)
            </div>
          </div>

          {/* Màn hình Học viên */}
          <div className="aspect-video bg-gray-800 rounded-2xl border border-gray-700 relative overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2 text-gray-400 font-bold">
                T
              </div>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Trần Văn A</p>
            </div>
            <div className="absolute top-3 right-3">
              <MicOff className="w-4 h-4 text-red-500" />
            </div>
          </div>

          {/* Khung Chat nhanh */}
          <div className="flex-1 bg-gray-800 rounded-2xl border border-gray-700 p-4 flex flex-col">
            <h3 className="text-white text-xs font-bold mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-teal-400" /> Trò chuyện
            </h3>
            <div className="flex-1 overflow-y-auto space-y-3 text-[11px]">
              <div className="text-gray-400 italic">Học viên đã tham gia phòng...</div>
              <div className="bg-gray-700 p-2 rounded-lg text-white">
                <span className="font-bold text-teal-400">Trần Văn A:</span> Em không nghe rõ tiếng ạ
              </div>
            </div>
            <input 
              type="text" 
              placeholder="Gửi tin nhắn..." 
              className="mt-4 w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2 text-xs text-white focus:ring-1 focus:ring-teal-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Toolbar Điều khiển */}
      <div className="h-20 bg-gray-900 flex items-center justify-center gap-4">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className={`p-4 rounded-2xl transition-all ${isMuted ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
        >
          {isMuted ? <MicOff /> : <Mic />}
        </button>
        <button 
          onClick={() => setIsVideoOff(!isVideoOff)}
          className={`p-4 rounded-2xl transition-all ${isVideoOff ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
        >
          {isVideoOff ? <VideoOff /> : <Video />}
        </button>
        <button className="p-4 bg-gray-800 text-teal-400 rounded-2xl hover:bg-gray-700">
          <ScreenShare />
        </button>
        <button className="p-4 bg-gray-800 text-gray-400 rounded-2xl hover:bg-gray-700">
          <Users />
        </button>
        <div className="w-[1px] h-8 bg-gray-700 mx-2"></div>
        <button 
          onClick={onLeave}
          className="px-6 py-4 bg-red-600 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-red-700 shadow-lg shadow-red-900/20 transition-all"
        >
          <LogOut className="w-5 h-5" /> Kết thúc buổi học
        </button>
      </div>
    </div>
  );
}