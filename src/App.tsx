import { useState } from 'react'
import Header from './components/Header'
import Login from './components/Login'
import ChatSystem from './components/ChatSystem'

// Imports cho Người học
import LearnerDashboard from './components/Learner/LearnerDashboard'
import Schedule from './components/Learner/Schedule'
import Profile from './components/Learner/Profile'
import Documents from './components/Learner/Documents'
import TutorDetail from './components/Teacher/TutorDetail'

// Imports cho Người dạy
import TeacherDashboard from './components/Teacher/TeacherDashboard'
import RevenueDashboard from './components/Teacher/RevenueDashboard'
import TeacherSchedule from './components/Teacher/TeacherSchedule'
import MyClasses from './components/Teacher/MyClasses'
import ConnectionRequests from './components/Teacher/ConnectionRequests'
import Classroom from './components/Teacher/Classroom'

import { LEARNER_NAV, TEACHER_NAV } from './constants/Navigation'

// 🚀 1. Định nghĩa các Interface để thay thế cho 'any'
interface Session {
  subject: string
  tutor: string
  id: string
}

interface Tutor {
  id: number
  name: string
  avatar: string
  specialties: string
  rating: number
  reviews: number
  price: string
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'))
  const [mode, setMode] = useState<'learner' | 'teacher'>('learner')
  const [activeTab, setActiveTab] = useState('Tìm Kiếm')

  // 🚀 2. Sử dụng Interface thay vì 'any'
  const [activeSession, setActiveSession] = useState<Session | null>(null)
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null)

  const [user] = useState({
    name: 'Đàng Tiến Thành',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  })

  const currentNav = mode === 'learner' ? LEARNER_NAV : TEACHER_NAV

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
  }

  const handleModeChange = (newMode: 'learner' | 'teacher') => {
    setMode(newMode)
    setSelectedTutor(null)
    setActiveTab(newMode === 'learner' ? 'Tìm Kiếm' : 'Tổng quan')
  }

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {activeSession && (
        <Classroom session={activeSession} onLeave={() => setActiveSession(null)} />
      )}

      <Header
        mode={mode}
        setMode={handleModeChange}
        currentNav={currentNav}
        user={user}
        activeTab={activeTab}
        setActiveTab={tab => {
          setActiveTab(tab)
          setSelectedTutor(null)
        }}
        onLogout={handleLogout}
      />

      <main className="mx-auto px-6 py-8">
        {mode === 'learner' ? (
          <>
            {activeTab === 'Tìm Kiếm' &&
              (!selectedTutor ? (
                <LearnerDashboard onSelectTutor={(tutor: Tutor) => setSelectedTutor(tutor)} />
              ) : (
                <TutorDetail
                  tutor={selectedTutor}
                  onBack={() => setSelectedTutor(null)}
                  onChat={() => {
                    setActiveTab('Tin Nhắn')
                    setSelectedTutor(null)
                  }}
                />
              ))}

            {activeTab === 'Lịch Học' && (
              <Schedule onOpenRoom={(session: Session) => setActiveSession(session)} />
            )}
            {activeTab === 'Tin Nhắn' && <ChatSystem user={user} mode={mode} />}
            {activeTab === 'Tài Liệu' && <Documents />}
            {activeTab === 'Hồ Sơ' && <Profile />}
          </>
        ) : (
          <>
            {activeTab === 'Tổng quan' && <TeacherDashboard />}
            {activeTab === 'Lịch dạy' && (
              <TeacherSchedule onOpenRoom={(session: Session) => setActiveSession(session)} />
            )}
            {activeTab === 'Tin Nhắn' && <ChatSystem user={user} mode={mode} />}
            {activeTab === 'Lớp học' && <MyClasses setActiveTab={setActiveTab} />}
            {activeTab === 'Doanh thu' && <RevenueDashboard />}
            {activeTab === 'Hồ sơ' && <Profile />}
            {activeTab === 'Yêu cầu' && <ConnectionRequests />}
          </>
        )}
      </main>
    </div>
  )
}
