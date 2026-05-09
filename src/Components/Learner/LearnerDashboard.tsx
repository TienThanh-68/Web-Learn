import { useState } from 'react';
import { Search, Star, SlidersHorizontal, Target, Cpu, Zap, ChevronRight, X } from 'lucide-react';

const tutors = [
  {
    id: 1,
    name: 'Trần Văn Vietnamese',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    specialties: 'FPGA, MATLAB',
    rating: 4.8,
    reviews: 120,
    price: '250.000đ/giờ'
  },
  {
    id: 2,
    name: 'Nguyen Vietnamese',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    specialties: 'Lập trình C++, Nhúng',
    rating: 4.8,
    reviews: 120,
    price: '250.000đ/giờ'
  },
  {
    id: 3,
    name: 'Nguyen Vietnamese',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop',
    specialties: 'Lập trình Nhúng',
    rating: 4.8,
    reviews: 120,
    price: '250.000đ/giờ'
  },
  {
    id: 4,
    name: 'Trần A Vietnamese',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
    specialties: 'FPGA, Python',
    rating: 4.8,
    reviews: 120,
    price: '250.000đ/giờ'
  },
  {
    id: 5,
    name: 'Tutu B Vietnamese',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    specialties: 'C++, DSA',
    rating: 4.8,
    reviews: 120,
    price: '250.000đ/giờ'
  },
  {
    id: 6,
    name: 'Trần K Vietnamese',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    specialties: 'Web Development',
    rating: 4.8,
    reviews: 120,
    price: '250.000đ/giờ'
  }
];

const upcomingClasses = [
  {
    tutor: 'Trần Văn A',
    subject: 'Lập trình Verilog',
    time: '10:30 AM, 15/05/2026',
    status: 'upcoming'
  },
  {
    tutor: 'Trần Văn A',
    subject: 'Lập trình Verilog',
    time: '10:30 AM, 15/05/2026',
    status: 'upcoming'
  },
  {
    tutor: 'Trần Văn A',
    subject: 'Lập trình Verilog',
    time: '10:30 AM, 15/05/2026',
    status: 'upcoming'
  }
];

const skillTrees = {
  'Thiết kế IC': ['Verilog', 'FPGA', 'Digital Circuit', 'SystemVerilog'],
  'Hệ thống Nhúng': ['C/C++', 'RTOS', 'Microcontroller', 'Embedded Linux'],
  'Phát triển Web': ['React', 'Node.js', 'Tailwind', 'TypeScript']
};

const progressData = [
  { subject: 'Thiết kế mạch số', progress: 75, color: 'bg-teal-600' },
  { subject: 'Thiết kế mạch số', progress: 70, color: 'bg-teal-600' }
];

export default function LearnerDashboard({ onSelectTutor }: { onSelectTutor: (tutor: any) => void }) {
  const [goal, setGoal] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  return (
    <div className="max-w-7xl mx-auto pb-20">
      {/* 🚀 SMART MATCH SECTION (Cá nhân hóa theo CareerGPS) */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-8 text-white mb-10 shadow-xl relative overflow-hidden">
        {/* Background circuit icon decoration */}
        <div className="absolute -top-4 -right-4 opacity-10 rotate-12">
          <Cpu size={160} />
        </div>

        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Target className="text-teal-300" /> Định Vị Nghề Nghiệp (Smart Match)
          </h2>
          <p className="text-teal-100 mb-8 text-sm max-w-xl">
            Chọn mục tiêu nghề nghiệp để SkillLink tìm gia sư lấp đầy lỗ hổng kiến thức cho bạn.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Step 1: Career Goal */}
            <div className="space-y-4">
              <p className="text-xs font-bold text-teal-200 uppercase tracking-widest">1. Bạn muốn trở thành ai?</p>
              <div className="flex flex-wrap gap-3">
                {Object.keys(skillTrees).map((role) => (
                  <button
                    key={role}
                    onClick={() => { setGoal(role); setSelectedSkills([]); }}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      goal === role 
                        ? 'bg-white text-teal-800 shadow-xl scale-105' 
                        : 'bg-teal-700/40 border border-teal-500/30 hover:bg-teal-700'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Skill Gaps */}
            {goal && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                <p className="text-xs font-bold text-teal-200 uppercase tracking-widest">2. Bạn đang thiếu kỹ năng nào?</p>
                <div className="flex flex-wrap gap-2">
                  {skillTrees[goal as keyof typeof skillTrees].map((skill) => (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 border transition-all ${
                        selectedSkills.includes(skill) 
                          ? 'bg-orange-500 border-orange-400 text-white shadow-lg shadow-orange-900/20' 
                          : 'border-teal-400/30 bg-teal-800/20 hover:border-teal-300'
                      }`}
                    >
                      {skill}
                      {selectedSkills.includes(skill) && <Zap size={12} className="fill-current" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="mb-12">
        <div className="relative max-w-2xl mx-auto mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm kỹ năng hoặc tên gia sư..."
            className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-xl text-gray-500">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>

        {selectedSkills.length > 0 && (
          <div className="flex justify-center items-center gap-2 flex-wrap mb-4">
            <span className="text-xs text-gray-400 uppercase font-bold mr-2">Đang lọc theo:</span>
            {selectedSkills.map(skill => (
              <button 
                key={skill}
                onClick={() => toggleSkill(skill)}
                className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-teal-100"
              >
                {skill} <X size={12} />
              </button>
            ))}
            <button onClick={() => setSelectedSkills([])} className="text-xs text-red-500 hover:underline ml-2">Xóa hết</button>
          </div>
        )}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-[320px,1fr] gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4 px-1">Điều Khiển Học Tập</h2>
            <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">Lịch Học Sắp Tới</h3>
              <div className="space-y-4">
                {upcomingClasses.map((cls, idx) => (
                  <div key={idx} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                      alt={cls.tutor}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-xs text-gray-900">{cls.tutor}</p>
                      <p className="text-[11px] text-gray-500 truncate">{cls.subject}</p>
                      <p className="text-[10px] text-teal-600 font-medium mt-1">{cls.time}</p>
                    </div>
                    <button className="h-8 px-3 bg-teal-50 text-teal-700 text-[10px] font-bold rounded-lg hover:bg-teal-100 transition-colors">
                      Vào học
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 px-1">Tiến Độ Mục Tiêu</h3>
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm space-y-6">
              {progressData.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-gray-600">{item.subject}</span>
                    <span className="text-xs font-black text-teal-700">{item.progress}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-700`}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
              <p className="text-[10px] text-gray-400 text-center italic mt-4">
                Hoàn thành 100% để nhận huy hiệu Kỹ sư từ SkillLink
              </p>
            </div>
          </div>
        </div>

        {/* Right Content - Tutor Grid */}
        <div>
          <div className="flex items-center justify-between mb-6 px-1">
            <h2 className="text-xl font-bold text-gray-900">
              {selectedSkills.length > 0 ? 'Gia Sư Phù Hợp Với Lỗ Hổng' : 'Gia Sư Chuyên Gia'}
            </h2>
            <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Sắp xếp:</span>
                <select className="text-xs font-bold text-gray-900 bg-transparent outline-none cursor-pointer">
                    <option>Phổ biến nhất</option>
                    <option>Giá thấp nhất</option>
                    <option>Đánh giá cao nhất</option>
                </select>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {tutors.map((tutor) => (
              <div
                key={tutor.id}
                className="bg-white rounded-[2rem] border border-gray-100 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Status indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 bg-green-50 rounded-full">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold text-green-600 uppercase">Sẵn sàng</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <img
                      src={tutor.avatar}
                      alt={tutor.name}
                      className="w-24 h-24 rounded-3xl object-cover ring-8 ring-gray-50 group-hover:ring-teal-50 transition-all duration-500"
                    />
                  </div>
                  
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-teal-700 transition-colors">{tutor.name}</h3>
                  <div className="flex gap-1 mt-2 mb-3">
                    {tutor.specialties.split(', ').map(s => (
                        <span key={s} className="text-[10px] font-bold px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md">
                            {s}
                        </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="font-black text-sm text-gray-900">{tutor.rating}</span>
                    <span className="text-xs text-gray-400 font-medium">({tutor.reviews})</span>
                  </div>

                  <div className="w-full pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div>
                        <p className="text-[10px] text-gray-400 text-left font-bold uppercase">Học phí</p>
                        <span className="text-sm font-black text-teal-700">{tutor.price}</span>
                    </div>
                    {/* QUAN TRỌNG: Sửa nút Hồ Sơ để gọi hàm onSelectTutor */}
                    <button 
                      onClick={() => onSelectTutor(tutor)}
                      className="px-5 py-2.5 bg-gray-900 text-white rounded-2xl text-[11px] font-bold hover:bg-teal-600 shadow-lg shadow-gray-200 hover:shadow-teal-100 transition-all duration-300 active:scale-95"
                    >
                      Hồ Sơ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}