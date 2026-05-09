import { ArrowLeft, Star, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';

export default function TutorDetail({ tutor, onBack, onChat }) {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-teal-600 mb-6 font-bold transition-colors">
        <ArrowLeft size={20} /> Quay lại danh sách
      </button>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
        <div className="h-40 bg-gradient-to-r from-teal-500 to-teal-700"></div>
        <div className="px-8 pb-8">
          <div className="relative -mt-16 mb-6 flex flex-col md:flex-row items-center md:items-end gap-6">
            <img src={tutor.avatar} className="w-40 h-40 rounded-3xl border-8 border-white object-cover shadow-2xl" />
            <div className="mb-4 text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <h2 className="text-3xl font-black text-gray-900">{tutor.name}</h2>
                <ShieldCheck className="text-teal-500 w-6 h-6" />
              </div>
              <p className="text-teal-600 font-bold uppercase tracking-widest text-sm mt-1">
    {tutor?.specialties || 'Chuyên gia SkillLink'}
</p>
            </div>
            <div className="flex gap-3 mb-4">
              <button onClick={onChat} className="p-4 bg-teal-50 text-teal-600 rounded-2xl hover:bg-teal-600 hover:text-white transition-all shadow-lg shadow-teal-50">
                <MessageCircle size={24} />
              </button>
              <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-teal-700 transition-all shadow-xl">
                Đặt lịch học
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Giới thiệu bản thân</h3>
                <p className="text-gray-600 leading-relaxed">Chào Thành, mình là chuyên gia trong lĩnh vực {tutor.subjects[0]}. Với 5 năm kinh nghiệm thực chiến, mình sẽ giúp bạn làm chủ kiến thức một cách nhanh nhất.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Học phí</p>
                <p className="text-2xl font-black text-teal-600">{tutor.price}/giờ</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Đánh giá</p>
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={20} />
                  <span className="text-xl font-black text-gray-900">{tutor.rating}</span>
                  <span className="text-gray-400 text-sm">(120 đánh giá)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}