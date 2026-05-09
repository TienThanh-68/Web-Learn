import { FileText, Download, MoreVertical, FileCode, Search } from 'lucide-react';

const myDocuments = [
  { id: 1, name: 'Tai_lieu_FPGA_Co_ban.pdf', size: '2.4 MB', date: '10/04/2026', type: 'pdf' },
  { id: 2, name: 'RISC-V_Architecture_Spec.zip', size: '15.8 MB', date: '12/04/2026', type: 'zip' },
  { id: 3, name: 'Lab_1_Verilog_Design.docx', size: '850 KB', date: '13/04/2026', type: 'doc' }
];

export default function Documents() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">Kho Tài Liệu</h2>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Tìm tài liệu..." className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Tên tài liệu</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Ngày tải lên</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Dung lượng</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {myDocuments.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                        {doc.type === 'zip' ? <FileCode className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                      </div>
                      <span className="font-medium text-gray-700">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{doc.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{doc.size}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400">
                      <Download className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}