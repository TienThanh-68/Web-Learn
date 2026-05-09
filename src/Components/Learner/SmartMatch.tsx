import { useState } from 'react';
import { Target, Cpu, Code, Zap, ChevronRight } from 'lucide-react';

export default function SmartMatch({ onFilter }) {
  const [goal, setGoal] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skillTrees = {
    'IC Design': ['Verilog', 'FPGA', 'Digital Circuit', 'SystemVerilog'],
    'Embedded System': ['C/C++', 'RTOS', 'Microcontroller', 'Linux'],
    'Frontend Dev': ['React', 'Tailwind', 'TypeScript', 'Next.js']
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  return (
    <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-8 text-white mb-10 shadow-xl relative overflow-hidden">
      {/* Hiệu ứng circuit line cho phong cách công nghệ */}
      <div className="absolute top-0 right-0 opacity-10 p-4">
        <Cpu size={120} />
      </div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Target className="text-teal-300" /> Định Vị Nghề Nghiệp (Smart Match)
        </h2>
        <p className="text-teal-100 mb-6 text-sm">Chọn mục tiêu nghề nghiệp, SkillLink sẽ tìm gia sư lấp đầy lỗ hổng kỹ năng cho bạn.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bước 1: Chọn Goal */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-teal-200 uppercase tracking-wider">1. Bạn muốn trở thành ai?</p>
            <div className="flex flex-wrap gap-3">
              {Object.keys(skillTrees).map((role) => (
                <button
                  key={role}
                  onClick={() => { setGoal(role); setSelectedSkills([]); }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    goal === role ? 'bg-white text-teal-800 shadow-lg' : 'bg-teal-700/50 hover:bg-teal-700'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Bước 2: Chọn Kỹ năng đang thiếu */}
          {goal && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
              <p className="text-sm font-semibold text-teal-200 uppercase tracking-wider">2. Bạn đang thiếu kỹ năng nào?</p>
              <div className="flex flex-wrap gap-2">
                {skillTrees[goal as keyof typeof skillTrees].map((skill) => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-3 py-1.5 rounded-lg text-xs flex items-center gap-2 border transition-all ${
                      selectedSkills.includes(skill) 
                        ? 'bg-orange-500 border-orange-400 text-white' 
                        : 'border-teal-400/30 hover:border-teal-300'
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

        {selectedSkills.length > 0 && (
          <button 
            onClick={() => onFilter(selectedSkills)}
            className="mt-8 bg-white text-teal-800 px-8 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-teal-50 transition-all group"
          >
            Tìm gia sư phù hợp ngay
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
}