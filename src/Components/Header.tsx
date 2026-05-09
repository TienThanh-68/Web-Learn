import { useState } from 'react';
import { BookOpen, Bell, LogOut, ChevronDown, User, MessageSquare } from 'lucide-react';

export default function Header({ mode, setMode, currentNav, user, activeTab, setActiveTab, onLogout }) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. Logo & App Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-100">
              < BookOpen className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-black text-gray-900 tracking-tight">SkillLink</h1>
              <p className="text-[10px] text-teal-600 font-bold uppercase tracking-widest leading-none">CareerGPS</p>
            </div>
          </div>

          {/* 2. Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-gray-50 p-1.5 rounded-2xl">
            {currentNav.map((item) => (
              <button
                key={item.id || item.label}
                onClick={() => setActiveTab(item.label)}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeTab === item.label
                    ? 'bg-white text-teal-700 shadow-sm scale-105'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* 3. Action Buttons & Profile */}
          <div className="flex items-center gap-3">
            {/* Nút Chuyển Mode */}
            <button 
              onClick={() => setMode(mode === 'learner' ? 'teacher' : 'learner')}
              className="hidden lg:block px-4 py-2 bg-orange-50 text-orange-700 rounded-xl text-[10px] font-black uppercase border border-orange-100 hover:bg-orange-100 transition-colors"
            >
              Mode: {mode === 'learner' ? 'Người học' : 'Người dạy'}
            </button>

            {/* Nút Chat */}
            <button 
              onClick={() => setActiveTab('Tin Nhắn')}
              className={`p-2.5 rounded-xl transition-all relative ${
                activeTab === 'Tin Nhắn' 
                  ? 'bg-teal-600 text-white shadow-lg shadow-teal-100' 
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }`}
            >
              <MessageSquare size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
            </button>

            {/* Nút Thông báo */}
            <button className="relative p-2.5 bg-gray-50 text-gray-500 rounded-xl hover:bg-gray-100">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="h-8 w-[1px] bg-gray-100 mx-1 hidden md:block"></div>

            {/* User Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 p-1 pr-3 bg-gray-50 rounded-2xl border border-gray-100 hover:border-teal-200 transition-all"
              >
                <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-xl object-cover" />
                <div className="text-left hidden sm:block">
                  <p className="text-xs font-black text-gray-900 leading-none">{user.name}</p>
                  <p className="text-[10px] text-gray-400 font-medium mt-1 uppercase">{mode}</p>
                </div>
                <ChevronDown size={14} className={`text-gray-400 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 animate-in fade-in zoom-in-95 duration-200">
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
                    <User size={18} /> Hồ sơ
                  </button>
                  <button 
                    onClick={onLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-xl font-bold mt-1"
                  >
                    <LogOut size={18} /> Đăng xuất
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}