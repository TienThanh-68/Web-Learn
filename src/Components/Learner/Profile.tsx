import { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Camera } from 'lucide-react';

export default function Profile() {
  // 1. Khởi tạo State với dữ liệu từ localStorage hoặc giá trị mặc định
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: 'Chưa cập nhật',
    address: 'Chưa cập nhật',
    role: ''
  });

  // 2. useEffect để lấy dữ liệu ngay khi trang được load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUserData({
        name: parsedUser.name || 'Đàng Tiến Thành',
        email: parsedUser.email || '',
        phone: parsedUser.phone || '09xx xxx xxx',
        address: parsedUser.address || 'Hồ Chí Minh, Việt Nam',
        role: parsedUser.role || 'Sinh viên năm 2'
      });
    }
  }, []);

  // 3. Hàm xử lý khi Thành gõ thay đổi thông tin
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-3xl mx-auto animate-in fade-in duration-500">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Header Hồ sơ */}
        <div className="h-32 bg-gradient-to-r from-teal-500 to-teal-700"></div>
        
        <div className="px-8 pb-8">
          <div className="relative -mt-12 mb-6 flex items-end gap-4">
            <div className="relative">
              <img 
                src="https://www.bing.com/images/search?view=detailV2&ccid=a1uL88oB&id=B8EEB5A7DCD46B5710C42E1DE09B447D08B9AC1C&thid=OIP.a1uL88oBnu4DRnGKjJvMSwHaHa&mediaurl=https%3A%2F%2Fhaycafe.vn%2Fwp-content%2Fuploads%2F2022%2F03%2Fanh-ma-cute-de-thuong-600x600.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.6b5b8bf3ca019eee0346718a8c9bcc4b%3Frik%3DHKy5CH1Em%252bAdLg%26pid%3DImgRaw%26r%3D0&exph=600&expw=600&q=%E1%BA%A2nh+MA+D%E1%BB%85+Th%C6%B0%C6%A1ng&FORM=IRPRST&ck=6F505E7149926AA7959E9CFCED4D5982&selectedIndex=3&itb=0&cw=1375&ch=659&ajaxhist=0&ajaxserp=0" 
                className="w-32 h-32 rounded-2xl border-4 border-white object-cover shadow-md"
                alt="Avatar"
              />
              <button className="absolute bottom-2 right-2 p-2 bg-white rounded-lg shadow-sm border border-gray-100 text-gray-600 hover:text-teal-600 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="mb-2">
              <h2 className="text-2xl font-bold text-gray-900">{userData.name}</h2>
              <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider">{userData.role}</p>
            </div>
          </div>

          {/* Form chỉnh sửa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 ml-1">
                <User className="w-4 h-4" /> Họ và tên
              </label>
              <input 
                type="text" 
                name="name"
                value={userData.name} 
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 ml-1">
                <Mail className="w-4 h-4" /> Email
              </label>
              <input 
                type="email" 
                name="email"
                value={userData.email} 
                className="w-full p-3 rounded-xl border border-gray-100 bg-gray-100 text-gray-500 cursor-not-allowed" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 ml-1">
                <Phone className="w-4 h-4" /> Số điện thoại
              </label>
              <input 
                type="text" 
                name="phone"
                value={userData.phone} 
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 ml-1">
                <MapPin className="w-4 h-4" /> Địa chỉ
              </label>
              <input 
                type="text" 
                name="address"
                value={userData.address} 
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50" 
              />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-50 flex justify-end gap-3">
            <button className="px-6 py-2.5 rounded-xl border border-gray-200 font-bold text-gray-600 hover:bg-gray-50 transition-all">
              Hủy
            </button>
            <button className="px-8 py-2.5 rounded-xl bg-teal-600 text-white font-bold hover:bg-teal-700 shadow-lg shadow-teal-100 transition-all active:scale-95">
              Lưu thay đổi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}