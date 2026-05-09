import { Users, MessageCircle, FileText } from 'lucide-react';

const myStudents = [
  { id: 1, name: 'Nguyễn Văn Học', course: 'Thiết kế RISC-V', progress: 75, avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Lê Minh Tâm', course: 'Lập trình Nhúng C++', progress: 40, avatar: 'https://i.pravatar.cc/150?u=2' },
];

// Thêm prop setActiveTab để có thể chuyển trang
export default function MyClasses({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Lớp Học Của Tôi</h2>
        <div className="flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-xl">
          <Users className="w-5 h-5 text-teal-600" />
          <span className="text-sm font-bold text-teal-700">{myStudents.length} Học viên đang học</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myStudents.map((student) => (
          <div key={student.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <img src={student.avatar} className="w-16 h-16 rounded-2xl object-cover shadow-sm" alt={student.name} />
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg">{student.name}</h3>
                <p className="text-sm text-gray-500 font-medium">{student.course}</p>
              </div>
              <div className="flex gap-2">
                {/* NÚT CHAT: Nhấn vào đây để sang trang Tin Nhắn */}
                <button 
                  onClick={() => setActiveTab('Tin Nhắn')}
                  className="p-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-teal-600 hover:text-white hover:shadow-lg hover:shadow-teal-100 transition-all active:scale-95"
                  title="Nhắn tin cho học viên"
                >
                  <MessageCircle className="w-5 h-5"/>
                </button>
                <button className="p-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-900 hover:text-white transition-all shadow-sm">
                  <FileText className="w-5 h-5"/>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                <span className="text-gray-400">Tiến độ khóa học</span>
                <span className="text-teal-600">{student.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-teal-500 h-full rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${student.progress}%` }}
                ></div>
              </div>
              <p className="text-[11px] text-gray-400 italic">Cập nhật lần cuối: 2 giờ trước</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}