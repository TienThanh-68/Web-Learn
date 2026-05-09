import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Hàm Đăng ký
export const register = async (userData) => {
    return await axios.post(`${API_URL}/register`, userData);
};

// Hàm Đăng nhập
export const login = async (userData) => {
    return await axios.post(`${API_URL}/login`, userData);
};

// Hàm lấy Profile (Cần gửi kèm Token)
export const getProfile = async (token) => {
    return await axios.get(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};