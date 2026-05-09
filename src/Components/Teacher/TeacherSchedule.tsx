import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, User, Video, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';

// Dữ liệu mẫu mở rộng để test Filter
const scheduleData = [
  { id: 1, student: 'Nguyễn Văn Học', subject: 'Thiết kế RISC-V', time: '14:00 - 16:00', date: '2026-04-14', status: 'upcoming', price: 500000 },
  { id: 2, student: 'Lê Minh Tâm', subject: 'Lập trình Nhúng C++', time: '19:00 - 21:00', date: '2026-04-14', status: 'upcoming', price: 450000 },
  { id: 3, student: 'Trần Hoàng Nam', subject: 'FPGA Cơ bản', time: '08:00 - 10:00', date: '2026-04-15', status: 'completed', price: 600000 },
  { id: 4, student: 'Phạm Bình Minh', subject: 'MIPS Architecture', time: '10:00 - 12:00', date: '2026-04-13', status: 'cancelled', price: 0 },
];

export default function TeacherSchedule({ onOpenRoom }) {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed' | 'cancelled'>('all');

  const filteredData = scheduleData.filter(item => filter === 'all' || item.status === filter);
  const upcoming = scheduleData.filter(item => item.status === 'upcoming');
  const completed = scheduleData.filter(item => item.status === 'completed');
  const totalRevenue = completed.reduce((sum, item) => sum + item.price, 0);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-50 text-blue-700';
      case 'completed': return 'bg-green-50 text-green-700';
      case 'cancelled': return 'bg-red-50 text-red-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">📅 Quản lý Lịch dạy</h2>
          <p className="text-gray-500 text-sm">Thành ơi, hôm nay bạn có {upcoming.length} buổi dạy sắp tới.</p>
        </div>
        <button className="bg-teal-600 text-white px-5 py-2.5 rounded-2xl text-sm font-bold shadow-lg shadow-teal-100 hover:bg-teal-700 transition-all active:scale-95">
          + Thêm khung giờ trống
        </button>
      </div>

      {/* Stats Cards - Kiểu Learner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <div className="text-2xl font-black text-gray-900">{scheduleData.length}</div>
          <div className="text-xs text-gray-400 font-bold uppercase">Tổng buổi</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
          <div className="text-2xl font-black text-blue-700">{upcoming.length}</div>
          <div className="text-xs text-blue-500 font-bold uppercase">Sắp dạy</div>
        </div>
        <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
          <div className="text-2xl font-black text-green-700">{completed.length}</div>
          <div className="text-xs text-green-500 font-bold uppercase">Hoàn thành</div>
        </div>
        <div className="bg-teal-50 p-4 rounded-2xl border border-teal-100">
          <div className="text-2xl font-black text-teal-700">
            {(totalRevenue / 1000000).toFixed(1)}M
          </div>
          <div className="text-xs text-teal-500 font-bold uppercase">Doanh thu</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {(['all', 'upcoming', 'completed', 'cancelled'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
              filter === f
                ? 'bg-gray-900 text-white shadow-xl'
                : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'
            }`}
          >
            {f === 'all' ? 'Tất cả' : f === 'upcoming' ? 'Sắp dạy' : f === 'completed' ? 'Đã xong' : 'Đã hủy'}
          </button>
        ))}
      </div>

      {/* Schedule List */}
      <div className="space-y-4">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${getStatusStyle(item.status)}`}>
                  <CalendarIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900 text-lg">{item.subject}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${getStatusStyle(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1.5 font-medium">
                      <User className="w-4 h-4 text-teal-600"/> {item.student}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-4 h-4 text-teal-600"/> {item.time}
                    </span>
                    <span className="font-bold text-teal-700">
                      {new Intl.NumberFormat('vi-VN').format(item.price)}đ
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block mr-2">
                  <p className="text-xs text-gray-400 font-bold uppercase">Ngày dạy</p>
                  <p className="text-sm font-black text-gray-900">{item.date}</p>
                </div>
                
                {/* Nút Video Room - Thành giữ lại để vào dạy */}
                {item.status === 'upcoming' && (
                  <button 
                    onClick={() => onOpenRoom({ subject: item.subject, tutor: 'Bạn' })}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-2xl font-bold hover:bg-teal-600 transition-all shadow-lg active:scale-95"
                  >
                    <Video className="w-5 h-5" />
                    <span>Vào lớp</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {filteredData.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-400 font-medium">Không tìm thấy lịch dạy nào khớp với bộ lọc.</p>
          </div>
        )}
      </div>
    </div>
  );
}