import axios from 'axios';
import { useState } from 'react';
import { BookOpen, Mail, Lock, ArrowRight, User } from 'lucide-react';

export default function Login({ onLogin }: { onLogin: () => void }) {
    const [isRegister, setIsRegister] = useState(false); // Chuyển đổi mode
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Chỉ gửi 'name' nếu đang ở chế độ Đăng ký
        const payload = isRegister 
            ? formData 
            : { email: formData.email.trim(), password: formData.password };

        const url = isRegister 
            ? 'http://localhost:5000/api/auth/register' 
            : 'http://localhost:5000/api/auth/login';

        try {
            const response = await axios.post(url, payload);

            if (isRegister) {
                alert("Đăng ký thành công! Đăng nhập để vào hệ thống nhé Thành. 🚀");
                setIsRegister(false); // Quay lại màn hình đăng nhập
                setFormData({ name: '', email: formData.email, password: '' }); // Giữ lại email cho tiện
            } else {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user)); // Lưu user để hiển thị tên
                
                alert(`Chào mừng ${response.data.user.name} đã trở lại!`);
                if (onLogin) onLogin();
            }
        } catch (error: any) {
            const errorMsg = error.response?.data?.message || "Lỗi kết nối server rồi Thành ơi!";
            alert("Lỗi: " + errorMsg);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
            <div className="max-w-md w-full bg-white/80 backdrop-blur-lg rounded-3xl border border-white shadow-2xl p-8">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal-200">
                        <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">SkillLink</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        {isRegister ? 'Tham gia cộng đồng học tập ngay' : 'Kết nối tri thức, định vị tương lai'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Ô NHẬP TÊN - Chỉ hiện khi Đăng ký */}
                    {isRegister && (
                        <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                            <label className="text-[13px] font-bold text-gray-700 ml-1 uppercase">Họ và tên</label>
                            <div className="relative">
                                <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                <input 
                                    name="name"
                                    type="text" 
                                    required={isRegister}
                                    placeholder="Đàng Tiến Thành" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-teal-500 bg-white/50 transition-all text-gray-900"
                                />
                            </div>
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-gray-700 ml-1 uppercase">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                            <input 
                                name="email"
                                type="email" 
                                required
                                placeholder="thanhpro@gmail.com" 
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-teal-500 bg-white/50 transition-all text-gray-900"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[13px] font-bold text-gray-700 ml-1 uppercase">Mật khẩu</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                            <input 
                                name="password"
                                type="password" 
                                required
                                placeholder="••••••••" 
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-teal-500 bg-white/50 transition-all text-gray-900"
                            />
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-teal-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-teal-700 shadow-xl shadow-teal-100 transition-all mt-6 active:scale-[0.98]"
                    >
                        {isRegister ? 'Tạo tài khoản' : 'Đăng nhập ngay'}
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </form>

                {/* NÚT CHUYỂN ĐỔI CHẾ ĐỘ */}
                <div className="mt-8 text-center border-t border-gray-100 pt-6">
                    <p className="text-sm text-gray-500">
                        {isRegister ? 'Đã có tài khoản?' : 'Chưa có tài khoản?'}
                        <button 
                            type="button"
                            onClick={() => {
                                setIsRegister(!isRegister);
                                setFormData({ name: '', email: '', password: '' });
                            }}
                            className="ml-2 text-teal-600 font-bold hover:underline"
                        >
                            {isRegister ? 'Đăng nhập tại đây' : 'Đăng ký miễn phí'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}