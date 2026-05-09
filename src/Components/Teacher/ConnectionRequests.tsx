import { Check, X } from 'lucide-react';

const connectionRequests = [
  {
    id: 1,
    name: 'Trần Văn A',
    subject: 'Cần hướng dẫn thiết kế mạch số',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'Nguyen Nam',
    subject: 'Thiết kế bộ lọc FIR',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  }
];

export default function ConnectionRequests() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Yêu Cầu Kết Nối</h2>
      <div className="grid gap-4">
        {connectionRequests.map((request) => (
          <div key={request.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={request.avatar} className="w-14 h-14 rounded-full object-cover" alt={request.name} />
              <div>
                <h3 className="font-bold text-gray-900">{request.name}</h3>
                <p className="text-sm text-gray-500">{request.subject}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-teal-50 text-teal-600 rounded-xl hover:bg-teal-600 hover:text-white transition-all">
                <Check className="w-6 h-6" />
              </button>
              <button className="p-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}