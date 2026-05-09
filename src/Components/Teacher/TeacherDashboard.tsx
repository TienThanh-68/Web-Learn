import { Users, Clock, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

const stats = [
  {
    label: 'Tổng học viên',
    value: '12',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    label: 'Giờ dạy đã thực hiện',
    value: '45h',
    icon: Clock,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    label: 'Doanh thu tháng này',
    value: '15.000.000đ',
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  }
];

const todaySchedule = [
  {
    student: 'Trần Anh',
    subject: 'Lập trình C++, Nhúng',
    time: '14:00',
    duration: '25 đã/tương'
  },
  {
    student: 'Trần Anh',
    subject: 'Thiết kế RISC-V',
    time: '16:30',
    duration: '32 đã/tương'
  },
  {
    student: 'Trần Anh',
    subject: 'MATLAB cơ bản',
    time: '19:00',
    duration: '03 đã/tương'
  },
  {
    student: 'Trần Anh',
    subject: 'Lập trình C++',
    time: 'Vào đây sau 15 phút',
    duration: '',
    status: 'join-now'
  }
];

const connectionRequests = [
  {
    name: 'Trần Văn A',
    subject: 'Cần hướng dẫn thiết kế mạch số',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  },
  {
    name: 'Trần Văn A',
    subject: 'VHDL cho FPGA',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  },
  {
    name: 'Nguyen Nam',
    subject: 'Thiết kế bộ lọc FIR',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    name: 'Nguyen Nam',
    subject: 'Thiết kế bộ lọc FIR',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  }
];

const weekDays = ['Một', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm'];
const timeSlots = ['14:00', '15:00', '16:30', '18:30', '19:00', '20:00'];

export default function TeacherDashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Bảng Điều Khiển & Lịch Dạy</h1>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-3">
              <div className={`p-3 ${stat.bgColor} rounded-lg`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900 mt-0.5">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-[340px,1fr,340px] gap-6">
        {/* Left - Today's Schedule */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Lịch Dạy Hôm Nay</h2>
            <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">
              Bảng cấp dạy
            </button>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
            {todaySchedule.map((session, idx) => (
              <div key={idx} className="p-4">
                <div className="flex gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                    alt={session.student}
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">{session.student}</p>
                    <p className="text-sm text-gray-600">{session.subject}</p>
                    {session.duration && (
                      <p className="text-xs text-yellow-600 mt-1">{session.duration}</p>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    {session.status === 'join-now' ? (
                      <button className="px-3 py-1.5 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors">
                        Mở phòng học
                      </button>
                    ) : (
                      <p className="font-semibold text-gray-900">{session.time}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center - Calendar */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quản Lý Lịch</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Availability Calendar</h3>
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronLeft className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600">Cần tìm và lưu current week</p>
            </div>

            {/* Calendar Grid */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-5 bg-gray-50 border-b border-gray-200">
                {weekDays.map((day, idx) => (
                  <div key={`day-${idx}`} className="px-2 py-2 text-center text-xs font-medium text-gray-700 border-r border-gray-200 last:border-r-0">
                    {day}
                  </div>
                ))}
              </div>
              <div>
                {timeSlots.map((time, timeIdx) => (
                  <div key={`row-${timeIdx}`} className="grid grid-cols-5 border-b border-gray-200 last:border-b-0">
                    {weekDays.map((day, dayIdx) => {
                      const isBooked = (time === '15:00' && dayIdx === 2) || (time === '16:30' && dayIdx === 2) || (time === '18:30' && dayIdx === 2);
                      return (
                        <div
                          key={`cell-${timeIdx}-${dayIdx}`}
                          className={`px-2 py-3 text-center border-r border-gray-200 last:border-r-0 ${
                            isBooked ? 'bg-teal-100' : 'hover:bg-gray-50'
                          }`}
                        >
                          {dayIdx === 0 && (
                            <span className="text-xs text-gray-500">{time}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <p className="mb-1">Availability Calendar</p>
                <p>Click những giờ bật sổ</p>
                <p>để sao tạo slot</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  Lưu khung giờ rảnh
                </button>
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Connection Requests */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Yêu Cầu Kết Nối</h2>
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
            {connectionRequests.map((request, idx) => (
              <div key={idx} className="p-4">
                <div className="flex gap-3 mb-3">
                  <img
                    src={request.avatar}
                    alt={request.name}
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">{request.name}</p>
                    <p className="text-sm text-gray-600">{request.subject}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors">
                    Chấp nhận
                  </button>
                  <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    Từ chối
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
