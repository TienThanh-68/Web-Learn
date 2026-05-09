import { Bell, CheckCircle, MessageSquare, Clock, X } from 'lucide-react';

export default function NotificationCenter({ notifications, onClose, onClear }) {
  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[60] animate-in fade-in zoom-in duration-200">
      <div className="p-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
        <h3 className="font-bold text-gray-900 text-sm">Thông báo</h3>
        <button onClick={onClear} className="text-[10px] text-teal-600 font-bold hover:underline">Đánh dấu đã đọc</button>
      </div>
      
      <div className="max-h-[350px] overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((note: any) => (
            <div key={note.id} className="p-4 border-b border-gray-50 hover:bg-teal-50/30 transition-colors cursor-pointer group">
              <div className="flex gap-3">
                <div className={`p-2 rounded-xl shrink-0 ${note.type === 'success' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                  {note.type === 'success' ? <CheckCircle size={16} /> : <MessageSquare size={16} />}
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-800 leading-snug">
                    <span className="font-bold">{note.title}</span> {note.content}
                  </p>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400">
                    <Clock size={10} /> {note.time}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-10 text-center space-y-2">
            <Bell className="mx-auto text-gray-200" size={32} />
            <p className="text-xs text-gray-400">Bạn chưa có thông báo mới</p>
          </div>
        )}
      </div>
      
      <button onClick={onClose} className="w-full py-3 text-[11px] text-gray-500 font-medium hover:bg-gray-50 border-t border-gray-50">
        Đóng
      </button>
    </div>
  );
}