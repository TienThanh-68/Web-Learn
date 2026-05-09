import { Calendar, Clock, Video, User } from 'lucide-react';

const upcomingClasses = [
  {
    id: 1,
    subject: 'Thiết kế hệ thống RISC-V',
    tutor: 'Nguyễn Văn A',
    date: '14/04/2026',
    time: '14:00 - 16:00',
    status: 'upcoming',
  },
  {
    id: 2,
    subject: 'Lập trình Nhúng C++',
    tutor: 'Lê Thị B',
    date: '15/04/2026',
    time: '09:00 - 11:00',
    status: 'upcoming',
  }
];

export default function Schedule({ onOpenRoom }) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Lịch Học Của Tôi</h2>
        <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
          {upcomingClasses.length} Buổi sắp tới
        </span>
      </div>

      <div className="space-y-4">
        {upcomingClasses.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-700">{item.subject}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    <span>Gia sư: {item.tutor}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => onOpenRoom({ subject: item.subject, tutor: item.tutor })}
                  className="flex-1 md:flex-none px-6 py-2.5 bg-teal-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-teal-700 transition-colors"
                >
                  <Video className="w-4 h-4" />
                  Vào phòng học
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {upcomingClasses.length === 0 && (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
          <p className="text-gray-500">Bạn chưa có lịch học nào sắp tới.</p>
        </div>
      )}
    </div>
  );
}