export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600" alt="Khu căn hộ Phú Hưng" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-28 text-white">
        <h1 className="text-4xl sm:text-5xl font-semibold">Khu căn hộ Phú Hưng</h1>
        <p className="mt-3 max-w-2xl text-white/90">Chuẩn sống Phú Mỹ Hưng – Tâm điểm Thủ Dầu Một.</p>
        <a href="#lead" className="mt-6 inline-block rounded-2xl px-5 py-3 bg-white/90 text-neutral-900">Nhận tài liệu</a>
      </div>
    </section>
  );
}
