import { Search, Calendar, FileText, User, LayoutDashboard, BookOpen, MessageSquare, DollarSign } from 'lucide-react';

export const LEARNER_NAV = [
  { label: 'Tìm Kiếm', icon: Search, active: true },
  { label: 'Lịch Học', icon: Calendar, active: false },
  { label: 'Tài Liệu', icon: FileText, active: false },
  { label: 'Hồ Sơ', icon: User, active: false }
];

export const TEACHER_NAV = [
  { label: 'Tổng quan', icon: LayoutDashboard, active: true },
  { label: 'Lịch dạy', icon: Calendar, active: false },
  { label: 'Lớp học', icon: BookOpen, active: false },
  { label: 'Yêu cầu', icon: MessageSquare, active: false },
  { label: 'Doanh thu', icon: DollarSign, active: false },
  { label: 'Hồ sơ', icon: User, active: false }
];