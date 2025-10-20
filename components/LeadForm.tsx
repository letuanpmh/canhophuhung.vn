'use client';
import { useState } from 'react';
export default function LeadForm() {
  const [status, setStatus] = useState<'idle'|'ok'|'err'>('idle');
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    try {
      await fetch('/api/lead', { method: 'POST', body: fd });
      setStatus('ok');
    } catch { setStatus('err'); }
  }
  return (
    <form id="lead" onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-3">
      <input name="name" placeholder="Họ và tên" className="border rounded-xl px-4 py-3" required />
      <input name="phone" placeholder="Số điện thoại" className="border rounded-xl px-4 py-3" required />
      <input name="email" placeholder="Email (tuỳ chọn)" className="border rounded-xl px-4 py-3" />
      <button className="sm:col-span-3 rounded-xl px-5 py-3 bg-neutral-900 text-white">Gửi yêu cầu</button>
      {status==='ok' && <p className="sm:col-span-3 text-green-600">Đã nhận thông tin. Chúng tôi sẽ liên hệ sớm.</p>}
      {status==='err' && <p className="sm:col-span-3 text-red-600">Có lỗi, vui lòng thử lại.</p>}
    </form>
  );
}
