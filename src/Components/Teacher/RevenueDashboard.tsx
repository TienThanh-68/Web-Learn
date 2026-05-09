import { useState } from 'react';
import { DollarSign, TrendingUp, Users, Calendar, ArrowUpRight, PieChart, CreditCard } from 'lucide-react';

// Dữ liệu mẫu (Thành có thể thay bằng dữ liệu từ API sau)
const MONTHLY_REVENUE = [
  { month: 'T1', amount: 12000000 },
  { month: 'T2', amount: 15000000 },
  { month: 'T3', amount: 13500000 },
  { month: 'T4', amount: 15200000 }, // Tháng hiện tại
];

const PAYMENT_HISTORY = [
  { id: 101, student: 'Nguyễn Văn Học', subject: 'RISC-V', amount: 500000, date: '12/04/2026', status: 'completed' },
  { id: 102, student: 'Lê Minh Tâm', subject: 'Nhúng C++', amount: 450000, date: '11/04/2026', status: 'completed' },
  { id: 103, student: 'Trần Hoàng Nam', subject: 'FPGA', amount: 600000, date: '10/04/2026', status: 'pending' },
];

export default function RevenueDashboard() {
  const [period, setPeriod] = useState<'week' | 'month' | 'year'>('month');
  
  const formatPrice = (price: number) => new Intl.NumberFormat('vi-VN').format(price);
  const maxRevenue = Math.max(...MONTHLY_REVENUE.map(m => m.amount));

  const stats = [
    { label: 'Tổng doanh thu', value: '15.200.000đ', icon: DollarSign, color: 'text-teal-600', bg: 'bg-teal-50', trend: '+12%' },
    { label: 'Học viên mới', value: '+5', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', trend: '+2' },
    { label: 'Tỷ lệ hoàn thành', value: '98%', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-50', trend: '+0.5%' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-gray-900">💰 Quản lý doanh thu</h2>

      {/* 1. Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-2xl ${s.bg} ${s.color}`}><s.icon className="w-6 h-6" /></div>
              <span className="flex items-center text-[10px] font-black text-green-600 bg-green-50 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                <ArrowUpRight className="w-3 h-3 mr-1" /> {s.trend}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{s.label}</p>
              <p className="text-2xl font-black text-gray-900 mt-1">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 2. Bar Chart Section */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-teal-600" /> Biểu đồ thu nhập
            </h3>
            <div className="flex gap-1 bg-gray-50 p-1 rounded-xl">
              {['week', 'month', 'year'].map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p as any)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    period === p ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {p === 'week' ? 'Tuần' : p === 'month' ? 'Tháng' : 'Năm'}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-end gap-4 h-64 px-2">
            {MONTHLY_REVENUE.map((item) => {
              const height = (item.amount / maxRevenue) * 100;
              return (
                <div key={item.month} className="flex-1 flex flex-col items-center gap-3 group">
                  <div className="w-full relative" style={{ height: '200px' }}>
                    <div
                      className="absolute bottom-0 w-full bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-xl transition-all duration-700 cursor-pointer group-hover:from-teal-700 group-hover:to-teal-500 shadow-lg shadow-teal-50"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        {formatPrice(item.amount)}đ
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-black text-gray-400 uppercase">{item.month}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Withdrawal Section */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 flex flex-col">
          <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-teal-600" /> Rút tiền nhanh
          </h3>
          <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-6 text-white shadow-xl shadow-teal-100 flex-1 flex flex-col justify-center">
            <p className="text-teal-100 text-xs font-bold uppercase tracking-widest mb-2">Số dư hiện tại</p>
            <h2 className="text-3xl font-black mb-6">15.200.000đ</h2>
            <div className="space-y-3">
              <button className="w-full py-3 bg-white text-teal-700 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-teal-50 transition-all active:scale-95 shadow-lg">
                Rút về Ngân hàng
              </button>
              <p className="text-[10px] text-teal-200 text-center italic">Cập nhật lúc: 21:00 hôm nay</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Payment History */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h3 className="font-bold text-gray-800">Lịch sử thanh toán mới nhất</h3>
          <button className="text-teal-600 text-xs font-bold uppercase hover:underline">Xem tất cả</button>
        </div>
        <div className="divide-y divide-gray-50 px-6">
          {PAYMENT_HISTORY.map((p) => (
            <div key={p.id} className="py-4 flex justify-between items-center group">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${p.status === 'completed' ? 'bg-teal-50 text-teal-600' : 'bg-orange-50 text-orange-600'}`}>
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Thanh toán #SKL-{p.id}</p>
                  <p className="text-[11px] text-gray-400 font-medium">
                    {p.date} • <span className="text-teal-600 font-bold">{p.student}</span> ({p.subject})
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-black text-sm ${p.status === 'completed' ? 'text-teal-600' : 'text-orange-500'}`}>
                  {p.status === 'completed' ? '+' : ''}{formatPrice(p.amount)}đ
                </p>
                <p className="text-[9px] font-black uppercase text-gray-300">{p.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}